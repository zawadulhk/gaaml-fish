import type { Assumptions } from '../../types';

const stock: Assumptions = {
    name: 'Marico Bangladesh Limited',
    logo: '/logos/MARICO.png',
    // FIX: Added currentRevenue based on the latest historical data to satisfy the Assumptions type.
    currentRevenue: 14136,
    revenueGrowthRate: 12,
    ebitdaMargin: 38,
    taxRate: 23,
    capexAsPercentageOfRevenue: 4,
    nwcAsPercentageOfRevenue: 15,
    discountRate: 13,
    perpetualGrowthRate: 5,
    sharesOutstanding: 31.5,
    netDebt: -6316,
    projectionYears: 5,
    summary: 'Marico Bangladesh Limited is a leading FMCG company, primarily known for its flagship "Parachute" brand of coconut oil. It has a growing portfolio in value-added hair oils (VAHO), personal care, and food products.',
    industry: 'FMCG',
    category: 'A',
    shareholding: { directors: 90.0, government: 0.0, institutions: 5.0, foreign: 2.0, public: 3.0 },
    freeFloatShares: 3.15,
    listingYear: 2009,
    businessModel: {
        revenueStreams: ['Parachute Coconut Oil (PCNO)', 'Value Added Hair Oil (VAHO)', 'Baby Care', 'Male Grooming', 'Edible Oils'],
        keyClients: ['General Consumers', 'Retail Stores', 'Wholesalers', 'Supermarkets'],
        competitiveAdvantages: ['Dominant Market Leadership in Coconut Oil', 'Strong Brand Equity', 'Consistent Product Innovation', 'Extensive Distribution Network'],
        distributionChannels: ['Retailer Network', 'Wholesalers', 'Modern Trade (Supermarkets)', 'E-commerce'],
    },
    marketCap: 76277,
    authorizedCapital: 500,
    paidUpCapital: 315,
    historicalData: [
        { 
            year: 'FY20', revenue: 9796, grossProfit: 4500, ebitda: 3691, operatingProfit: 3322, interestExpense: -117, profitBeforeTax: 3439, netProfit: 2646, eps: 84.0,
            balanceSheet: { cashAndEquivalents: 2000, accountsReceivable: 1000, inventory: 1500, currentAssets: 4500, netPPE: 1800, intangibleAssets: 200, totalAssets: 6500, accountsPayable: 2500, shortTermDebt: 100, currentLiabilities: 3500, longTermDebt: 0, totalLiabilities: 3500, totalEquity: 3000 },
            cashFlow: { netIncome: 2646, depreciationAndAmortization: 369, changeInWorkingCapital: -15, cfo: 3000, capex: -300, acquisitions: 0, cfi: -300, debtIssued: 0, stockIssued: 0, dividendsPaid: -2500, cff: -2500, netChangeInCash: 200 }
        },
        { 
            year: 'FY21', revenue: 11307, grossProfit: 5200, ebitda: 4384, operatingProfit: 3946, interestExpense: -94, profitBeforeTax: 4040, netProfit: 3109, eps: 98.7,
            balanceSheet: { cashAndEquivalents: 2500, accountsReceivable: 1200, inventory: 1300, currentAssets: 5000, netPPE: 2300, intangibleAssets: 200, totalAssets: 7500, accountsPayable: 2800, shortTermDebt: 100, currentLiabilities: 3900, longTermDebt: 100, totalLiabilities: 4000, totalEquity: 3500 },
            cashFlow: { netIncome: 3109, depreciationAndAmortization: 438, changeInWorkingCapital: -47, cfo: 3500, capex: -350, acquisitions: 0, cfi: -350, debtIssued: 100, stockIssued: 0, dividendsPaid: -2900, cff: -2800, netChangeInCash: 350 }
        },
        { 
            year: 'FY22', revenue: 13032, grossProfit: 5900, ebitda: 4792, operatingProfit: 4313, interestExpense: -308, profitBeforeTax: 4621, netProfit: 3554, eps: 112.8,
            balanceSheet: { cashAndEquivalents: 3000, accountsReceivable: 1500, inventory: 1500, currentAssets: 6000, netPPE: 2600, intangibleAssets: 200, totalAssets: 8800, accountsPayable: 3500, shortTermDebt: 100, currentLiabilities: 4800, longTermDebt: 200, totalLiabilities: 5000, totalEquity: 3800 },
            cashFlow: { netIncome: 3554, depreciationAndAmortization: 479, changeInWorkingCapital: -33, cfo: 4000, capex: -400, acquisitions: 0, cfi: -400, debtIssued: 100, stockIssued: 0, dividendsPaid: -3300, cff: -3200, netChangeInCash: 400 }
        },
        { 
            year: 'FY23', revenue: 14136, grossProfit: 6500, ebitda: 5375, operatingProfit: 4838, interestExpense: -193, profitBeforeTax: 5031, netProfit: 3872, eps: 122.9,
            balanceSheet: { cashAndEquivalents: 3500, accountsReceivable: 1800, inventory: 1700, currentAssets: 7000, netPPE: 2300, intangibleAssets: 200, totalAssets: 9500, accountsPayable: 4000, shortTermDebt: 100, currentLiabilities: 5400, longTermDebt: 100, totalLiabilities: 5500, totalEquity: 4000 },
            cashFlow: { netIncome: 3872, depreciationAndAmortization: 537, changeInWorkingCapital: 91, cfo: 4500, capex: -450, acquisitions: 0, cfi: -450, debtIssued: 0, stockIssued: 0, dividendsPaid: -3550, cff: -3500, netChangeInCash: 550 }
        },
    ],
    keyMetrics: { roe: 123.4, roa: 41.5, debtToEquity: 0.03, dividendYield: 3.1, dividendPayout: 61.0, workingCapitalRatio: 1.30 },
    investmentThesis: {
        positives: [
            "Consistent product launches ensure double-digit top-line growth.",
            "Earnings set to rise due to gross margin expansion from falling raw material (copra) prices.",
            "Increasing revenue contribution from high-margin VAHO products to boost future gross margin.",
            "Low dividend payout in recent years suggests potential for future dividend yield increase.",
        ],
        concerns: [
            "Prolonged inflation could put pressure on volume sales.",
            "Dividend payout ratio may remain low until repatriation challenges are resolved.",
            "Further currency depreciation and commodity price reversals are inherent risks.",
            "Difficulty in opening LCs for raw materials has led to purchasing on credit, increasing payables.",
        ]
    },
    comparables: [
         { ticker: 'SINGERBD', marketCap: 16690, revenue: 15485, ebitda: 2478, netProfit: 1032 },
    ],
};

export default stock;