import type { Assumptions, ValuationResult, ProjectedYear, SensitivityAnalysis } from '../types';

const calculatePriceFromProjections = (
    projections: ProjectedYear[],
    projectionYears: number,
    dr: number,
    pgr: number,
    netDebt: number,
    sharesOutstanding: number
): number | null => {
    if (dr <= pgr) return null;

    let sumOfDiscountedFcff = 0;
    for (let i = 0; i < projections.length; i++) {
        const discountedFcff = projections[i].fcff / Math.pow(1 + dr, i + 1);
        sumOfDiscountedFcff += discountedFcff;
    }
    
    const finalYearProjection = projections[projections.length - 1];
    if (!finalYearProjection) return null;

    const terminalValueFcff = finalYearProjection.fcff * (1 + pgr);
    const terminalValue = terminalValueFcff / (dr - pgr);
    const discountedTerminalValue = terminalValue / Math.pow(1 + dr, projectionYears);

    const enterpriseValue = sumOfDiscountedFcff + discountedTerminalValue;
    const equityValue = enterpriseValue - netDebt;
    const estimatedStockPrice = equityValue / sharesOutstanding;
    
    return isNaN(estimatedStockPrice) || !isFinite(estimatedStockPrice) ? null : estimatedStockPrice;
};


export const calculateDCFValuation = (assumptions: Assumptions): ValuationResult => {
    const {
        currentRevenue,
        revenueGrowthRate,
        ebitdaMargin,
        taxRate,
        capexAsPercentageOfRevenue,
        nwcAsPercentageOfRevenue,
        discountRate,
        perpetualGrowthRate,
        sharesOutstanding,
        netDebt,
        projectionYears,
    } = assumptions;

    // Convert percentages to decimals
    const rg = revenueGrowthRate / 100;
    const ebitdaM = ebitdaMargin / 100;
    const tRate = taxRate / 100;
    const capexPct = capexAsPercentageOfRevenue / 100;
    const nwcPct = nwcAsPercentageOfRevenue / 100;
    const dr = discountRate / 100;
    const pgr = perpetualGrowthRate / 100;

    const projections: ProjectedYear[] = [];
    let lastRevenue = currentRevenue;
    
    // For simplicity, we assume Depreciation & Amortization is included in EBITDA and equals CapEx for FCFF calculation
    // FCFF = EBITDA * (1 - Tax Rate) + (Tax Rate * D&A) - CapEx - Change in NWC
    // Simplified: FCFF = EBITDA * (1 - Tax Rate) - (CapEx - D&A) - Change in NWC
    // Assuming D&A is some percentage of revenue, and for simplicity lets make CapEx net of D&A (so we use Net CapEx)
    // A more common simplification: FCFF = EBIT(1-T) + D&A - Capex - Change in NWC
    // We will use EBITDA and assume D&A is a fixed % of revenue, say 4%.
    const deprAsPercentageOfRevenue = 4 / 100;

    let cumulativeNWC = currentRevenue * nwcPct;

    for (let i = 1; i <= projectionYears; i++) {
        const revenue = lastRevenue * (1 + rg);
        const ebitda = revenue * ebitdaM;
        const depreciation = revenue * deprAsPercentageOfRevenue;
        const ebit = ebitda - depreciation;

        const taxes = ebit > 0 ? ebit * tRate : 0;
        const capex = revenue * capexPct;
        
        const nextNWC = revenue * nwcPct;
        const changeInNWC = nextNWC - cumulativeNWC;
        cumulativeNWC = nextNWC;

        const fcff = ebit - taxes + depreciation - capex - changeInNWC;

        projections.push({
            year: new Date().getFullYear() + i,
            revenue: parseFloat(revenue.toFixed(2)),
            fcff: parseFloat(fcff.toFixed(2)),
        });

        lastRevenue = revenue;
    }

    // Main valuation from projections
    const mainPrice = calculatePriceFromProjections(projections, projectionYears, dr, pgr, netDebt, sharesOutstanding);
    if (mainPrice === null) {
        throw new Error("Invalid assumptions for valuation. Check if Discount Rate > Perpetual Growth Rate.");
    }
    
    // This part is a bit redundant but we need EV and Equity Value for display.
    let sumOfDiscountedFcff = 0;
    for (let i = 0; i < projections.length; i++) {
        const discountedFcff = projections[i].fcff / Math.pow(1 + dr, i + 1);
        sumOfDiscountedFcff += discountedFcff;
    }
    const finalYearProjection = projections[projections.length - 1];
    const terminalValueFcff = finalYearProjection.fcff * (1 + pgr);
    const terminalValue = terminalValueFcff / (dr - pgr);
    const discountedTerminalValue = terminalValue / Math.pow(1 + dr, projectionYears);
    const enterpriseValue = sumOfDiscountedFcff + discountedTerminalValue;
    const equityValue = enterpriseValue - netDebt;


    // Ratios
    const currentEbitda = currentRevenue * ebitdaM;
    const currentDepreciation = currentRevenue * deprAsPercentageOfRevenue;
    const currentEbit = currentEbitda - currentDepreciation;
    const currentNetIncome = currentEbit > 0 ? currentEbit * (1-tRate) : 0;
    
    const peRatio = currentNetIncome > 0 ? equityValue / currentNetIncome : null;
    const psRatio = equityValue / currentRevenue;
    const debtToEquity = netDebt / equityValue;

    // Sensitivity Analysis
    const drStep = 0.005; // 0.5%
    const pgrStep = 0.0025; // 0.25%
    const sensitivityDiscountRates = [dr - 2 * drStep, dr - drStep, dr, dr + drStep, dr + 2 * drStep];
    const sensitivityGrowthRates = [pgr - 2 * pgrStep, pgr - pgrStep, pgr, pgr + pgrStep, pgr + 2 * pgrStep];

    const sensitivityResults: (number | null)[][] = [];

    for (const newDr of sensitivityDiscountRates) {
        const row: (number | null)[] = [];
        for (const newPgr of sensitivityGrowthRates) {
            const price = calculatePriceFromProjections(
                projections,
                projectionYears,
                newDr,
                newPgr,
                netDebt,
                sharesOutstanding
            );
            row.push(price ? parseFloat(price.toFixed(2)) : null);
        }
        sensitivityResults.push(row);
    }
    
    const sensitivityAnalysis: SensitivityAnalysis = {
        discountRates: sensitivityDiscountRates.map(r => r * 100),
        growthRates: sensitivityGrowthRates.map(r => r * 100),
        results: sensitivityResults
    };

    return {
        estimatedStockPrice: parseFloat(mainPrice.toFixed(2)),
        enterpriseValue: parseFloat(enterpriseValue.toFixed(2)),
        equityValue: parseFloat(equityValue.toFixed(2)),
        ratios: {
            peRatio: peRatio ? parseFloat(peRatio.toFixed(2)) : null,
            psRatio: parseFloat(psRatio.toFixed(2)),
            debtToEquity: parseFloat(debtToEquity.toFixed(2)),
        },
        projections,
        sensitivityAnalysis,
    };
};