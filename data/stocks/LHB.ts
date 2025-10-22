import type { Assumptions } from '../../types';

const stock: Assumptions = {
    name: 'LafargeHolcim Bangladesh Limited',
    logo: '/logos/LHB.png',
    // FIX: Added currentRevenue based on the latest historical data to satisfy the Assumptions type.
    currentRevenue: 28000,
    revenueGrowthRate: 8,
    ebitdaMargin: 18,
    taxRate: 25,
    capexAsPercentageOfRevenue: 3,
    nwcAsPercentageOfRevenue: 5,
    discountRate: 11,
    perpetualGrowthRate: 3,
    sharesOutstanding: 1050,
    netDebt: 12000,
    projectionYears: 5,
    summary: 'LafargeHolcim Bangladesh Limited is a frontline cement producer in Bangladesh. It is a joint venture of LafargeHolcim Group based in Switzerland and Cementos Molins of Spain.',
    industry: 'Cement',
    category: 'A',
    shareholding: { directors: 65.0, government: 0.0, institutions: 15.0, foreign: 5.0, public: 15.0 },
    freeFloatShares: 367,
    listingYear: 2003,
    businessModel: {
        revenueStreams: ['Cement Sales (Bulk & Bagged)', 'Aggregates & Concrete', 'Clinker Export'],
        keyClients: ['Real Estate Developers', 'Construction Companies', 'Government Infrastructure Projects', 'Retailers'],
        competitiveAdvantages: ['Global Brand Recognition', 'Integrated Logistics (Conveyor Belt)', 'High-Quality Products', 'Strong Distribution Network'],
        distributionChannels: ['Dealer Network', 'Direct to Corporate Clients', 'Retail Outlets', 'Own Fleet of Trucks'],
    },
    marketCap: 75000,
    authorizedCapital: 14000,
    paidUpCapital: 11600,
    historicalData: [
        { 
            year: '2019', revenue: 20000, grossProfit: 4500, ebitda: 3600, operatingProfit: 3240, interestExpense: -107, profitBeforeTax: 3347, netProfit: 2500, eps: 2.38,
            balanceSheet: { cashAndEquivalents: 1500, accountsReceivable: 3000, inventory: 3500, currentAssets: 8000, netPPE: 21000, intangibleAssets: 1000, totalAssets: 30000, accountsPayable: 2000, shortTermDebt: 1000, currentLiabilities: 5000, longTermDebt: 7000, totalLiabilities: 12000, totalEquity: 18000 },
            cashFlow: { netIncome: 2500, depreciationAndAmortization: 360, changeInWorkingCapital: 140, cfo: 3000, capex: -1000, acquisitions: 0, cfi: -1000, debtIssued: 0, stockIssued: 0, dividendsPaid: -1500, cff: -1500, netChangeInCash: 500 }
        },
        { 
            year: '2020', revenue: 22000, grossProfit: 4900, ebitda: 3900, operatingProfit: 3510, interestExpense: -223, profitBeforeTax: 3733, netProfit: 2800, eps: 2.67,
            balanceSheet: { cashAndEquivalents: 1800, accountsReceivable: 3500, inventory: 3700, currentAssets: 9000, netPPE: 22000, intangibleAssets: 1000, totalAssets: 32000, accountsPayable: 2200, shortTermDebt: 1100, currentLiabilities: 5500, longTermDebt: 7500, totalLiabilities: 13000, totalEquity: 19000 },
            cashFlow: { netIncome: 2800, depreciationAndAmortization: 390, changeInWorkingCapital: 110, cfo: 3300, capex: -1100, acquisitions: 0, cfi: -1100, debtIssued: 200, stockIssued: 0, dividendsPaid: -1800, cff: -1600, netChangeInCash: 600 }
        },
        { 
            year: '2021', revenue: 25000, grossProfit: 5500, ebitda: 4500, operatingProfit: 4050, interestExpense: -350, profitBeforeTax: 4400, netProfit: 3300, eps: 3.14,
            balanceSheet: { cashAndEquivalents: 2200, accountsReceivable: 4000, inventory: 3800, currentAssets: 10000, netPPE: 24000, intangibleAssets: 1000, totalAssets: 35000, accountsPayable: 2500, shortTermDebt: 1200, currentLiabilities: 6000, longTermDebt: 8000, totalLiabilities: 14000, totalEquity: 21000 },
            cashFlow: { netIncome: 3300, depreciationAndAmortization: 450, changeInWorkingCapital: 50, cfo: 3800, capex: -1200, acquisitions: 0, cfi: -1200, debtIssued: 200, stockIssued: 0, dividendsPaid: -2000, cff: -1800, netChangeInCash: 800 }
        },
        { 
            year: '2022', revenue: 28000, grossProfit: 6100, ebitda: 5000, operatingProfit: 4500, interestExpense: -567, profitBeforeTax: 5067, netProfit: 3800, eps: 3.62,
            balanceSheet: { cashAndEquivalents: 2500, accountsReceivable: 4500, inventory: 4000, currentAssets: 11000, netPPE: 26000, intangibleAssets: 1000, totalAssets: 38000, accountsPayable: 2800, shortTermDebt: 1300, currentLiabilities: 6500, longTermDebt: 8500, totalLiabilities: 15000, totalEquity: 23000 },
            cashFlow: { netIncome: 3800, depreciationAndAmortization: 500, changeInWorkingCapital: -100, cfo: 4200, capex: -1300, acquisitions: 0, cfi: -1300, debtIssued: 100, stockIssued: 0, dividendsPaid: -2200, cff: -2000, netChangeInCash: 900 }
        },
    ],
    keyMetrics: { roe: 15, roa: 10, debtToEquity: 0.4, dividendYield: 4, dividendPayout: 60, workingCapitalRatio: 1.69 },
    investmentThesis: {
        positives: ["Strong demand from ongoing government-led mega infrastructure projects.", "Unique integrated logistics with a cross-border conveyor belt ensures a stable supply of high-quality limestone.", "Premium brand positioning allows for better pricing power compared to competitors.", "Expansion into aggregates and concrete provides new revenue streams."],
        concerns: ["High energy and fuel costs are a primary pressure on profit margins.", "The cement industry in Bangladesh suffers from overcapacity, leading to intense price competition.", "Volatility in international clinker prices affects margins for players who need to import it.", "The business is cyclical and dependent on the health of the construction and real estate sectors."]
    },
    comparables: [],
};

export default stock;