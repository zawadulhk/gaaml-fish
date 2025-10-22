import type { Assumptions } from '../../types';

const stock: Assumptions = {
    name: 'Linde Bangladesh Limited',
    logo: '/logos/LINDEBD.png',
    // FIX: Added currentRevenue based on the latest historical data to satisfy the Assumptions type.
    currentRevenue: 4711,
    revenueGrowthRate: 8,
    ebitdaMargin: 35,
    taxRate: 26,
    capexAsPercentageOfRevenue: 8,
    nwcAsPercentageOfRevenue: 5,
    discountRate: 11,
    perpetualGrowthRate: 4,
    sharesOutstanding: 15.2,
    netDebt: -1145,
    projectionYears: 5,
    summary: 'Linde Bangladesh Limited, part of the global Linde plc, produces and supplies various industrial and medical gases, welding products, and related equipment, serving a wide range of industries in Bangladesh.',
    industry: 'Industrial Gases & Chemicals',
    category: 'A',
    shareholding: { directors: 60.0, government: 0.0, institutions: 31.3, foreign: 0.0, public: 8.7 },
    freeFloatShares: 6.1,
    listingYear: 1976,
    businessModel: {
        revenueStreams: ['Bulk Gases', 'Packaged Gas & Products (PG&P)', 'Healthcare (Medical Gases)'],
        keyClients: ['Healthcare (Hospitals)', 'Shipbuilding & Recycling', 'Steel Industry', 'Food & Beverage'],
        competitiveAdvantages: ['Global Brand & Technology', 'Zero Leverage (No Financial Risk)', 'Strong Cash Position', 'Diverse industrial client base'],
        distributionChannels: ['Direct Supply (Bulk)', 'Distributor Network (Packaged)', 'On-site production plants'],
    },
    marketCap: 22400,
    authorizedCapital: 200,
    paidUpCapital: 152.2,
    historicalData: [
        { 
            year: '2017', revenue: 4942, grossProfit: 1900, ebitda: 1557, operatingProfit: 1401, interestExpense: 112, profitBeforeTax: 1289, netProfit: 953, eps: 62.60,
            balanceSheet: { cashAndEquivalents: 800, accountsReceivable: 1200, inventory: 1500, currentAssets: 3500, netPPE: 2300, intangibleAssets: 200, totalAssets: 6000, accountsPayable: 800, shortTermDebt: 200, currentLiabilities: 1500, longTermDebt: 500, totalLiabilities: 2000, totalEquity: 4000 },
            cashFlow: { netIncome: 953, depreciationAndAmortization: 156, changeInWorkingCapital: 91, cfo: 1200, capex: -400, acquisitions: 0, cfi: -400, debtIssued: 0, stockIssued: 0, dividendsPaid: -700, cff: -700, netChangeInCash: 100 }
        },
        { 
            year: '2018', revenue: 5460, grossProfit: 2100, ebitda: 1638, operatingProfit: 1474, interestExpense: 117, profitBeforeTax: 1357, netProfit: 1004, eps: 65.95,
            balanceSheet: { cashAndEquivalents: 900, accountsReceivable: 1300, inventory: 1600, currentAssets: 3800, netPPE: 2500, intangibleAssets: 200, totalAssets: 6500, accountsPayable: 900, shortTermDebt: 250, currentLiabilities: 1700, longTermDebt: 500, totalLiabilities: 2200, totalEquity: 4300 },
            cashFlow: { netIncome: 1004, depreciationAndAmortization: 164, changeInWorkingCapital: 132, cfo: 1300, capex: -450, acquisitions: 0, cfi: -450, debtIssued: 50, stockIssued: 0, dividendsPaid: -800, cff: -750, netChangeInCash: 100 }
        },
        { 
            year: '2019', revenue: 5683, grossProfit: 2300, ebitda: 1904, operatingProfit: 1714, interestExpense: 49, profitBeforeTax: 1665, netProfit: 1231, eps: 80.92,
            balanceSheet: { cashAndEquivalents: 1100, accountsReceivable: 1400, inventory: 1700, currentAssets: 4200, netPPE: 2800, intangibleAssets: 200, totalAssets: 7200, accountsPayable: 1000, shortTermDebt: 200, currentLiabilities: 1800, longTermDebt: 600, totalLiabilities: 2400, totalEquity: 4800 },
            cashFlow: { netIncome: 1231, depreciationAndAmortization: 190, changeInWorkingCapital: 79, cfo: 1500, capex: -500, acquisitions: 0, cfi: -500, debtIssued: -50, stockIssued: 0, dividendsPaid: -800, cff: -850, netChangeInCash: 150 }
        },
        { 
            year: '2020', revenue: 4711, grossProfit: 1950, ebitda: 1649, operatingProfit: 1484, interestExpense: 31, profitBeforeTax: 1453, netProfit: 1074, eps: 70.54,
            balanceSheet: { cashAndEquivalents: 1300, accountsReceivable: 1500, inventory: 1700, currentAssets: 4500, netPPE: 3100, intangibleAssets: 200, totalAssets: 7800, accountsPayable: 1100, shortTermDebt: 200, currentLiabilities: 2000, longTermDebt: 500, totalLiabilities: 2500, totalEquity: 5300 },
            cashFlow: { netIncome: 1074, depreciationAndAmortization: 165, changeInWorkingCapital: 161, cfo: 1400, capex: -400, acquisitions: 0, cfi: -400, debtIssued: 0, stockIssued: 0, dividendsPaid: -800, cff: -800, netChangeInCash: 200 }
        },
    ],
    keyMetrics: { roe: 20.4, roa: 13.7, debtToEquity: 0.0, dividendYield: 3.0, dividendPayout: 60.0, workingCapitalRatio: 2.25 },
    investmentThesis: {
        positives: [
            "Post-pandemic economic recovery is expected to boost sales in non-healthcare segments.",
            "Planned investments in a debulking station and plant revamp to improve efficiency and distribution.",
            "Zero-leverage company, resulting in no financial risk from debt.",
            "Offers handsome cash dividends and has a strong cash position for future investments.",
        ],
        concerns: [
            "Sales were heavily driven by medical gas demand during the pandemic, which is now normalizing.",
            "Low demand for dissolved acetylene gas is impacting a key product line.",
            "Business growth is inherently tied to the macroeconomic growth of its customers' industries.",
            "Vulnerability to raw material import costs and currency devaluation.",
        ]
    },
    comparables: [
        { ticker: 'BERGERPBL', marketCap: 82933, revenue: 15108, ebitda: 3767, netProfit: 2228 },
    ],
};

export default stock;