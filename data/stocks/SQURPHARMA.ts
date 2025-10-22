import type { Assumptions } from '../../types';

const stock: Assumptions = {
    name: 'Square Pharmaceuticals Limited',
    logo: '/logos/SQURPHARMA.png',
    // FIX: Added currentRevenue based on the latest historical data to satisfy the Assumptions type.
    currentRevenue: 60000,
    revenueGrowthRate: 9,
    ebitdaMargin: 30,
    taxRate: 20,
    capexAsPercentageOfRevenue: 5,
    nwcAsPercentageOfRevenue: 8,
    discountRate: 10,
    perpetualGrowthRate: 3.5,
    sharesOutstanding: 890,
    netDebt: 8000,
    projectionYears: 5,
    summary: 'Square Pharmaceuticals Limited is the largest pharmaceutical company in Bangladesh. It manufactures and markets a wide range of generic pharmaceutical products, both locally and internationally.',
    industry: 'Pharmaceuticals',
    category: 'A',
    shareholding: { directors: 34.57, government: 0.5, institutions: 10.2, foreign: 15.1, public: 39.63 },
    freeFloatShares: 580,
    listingYear: 1995,
    businessModel: {
        revenueStreams: ['Generic Drug Sales', 'API Sales', 'Contract Manufacturing', 'Export Sales'],
        keyClients: ['Hospitals', 'Pharmacies', 'International Distributors', 'Healthcare Providers'],
        competitiveAdvantages: ['Market Leadership', 'Strong R&D capabilities', 'Economies of Scale', 'Wide Export Reach'],
        distributionChannels: ['Direct Sales Force', 'Distributor Networks', 'Retail Pharmacies', 'Export Partners'],
    },
    marketCap: 185000,
    authorizedCapital: 10000,
    paidUpCapital: 8900,
    historicalData: [
        { 
            year: '2019', revenue: 52000, grossProfit: 25000, ebitda: 15600, operatingProfit: 14040, interestExpense: -385, profitBeforeTax: 18125, netProfit: 14500, eps: 16.3,
            balanceSheet: { cashAndEquivalents: 10000, accountsReceivable: 15000, inventory: 15000, currentAssets: 40000, netPPE: 38000, intangibleAssets: 2000, totalAssets: 80000, accountsPayable: 10000, shortTermDebt: 5000, currentLiabilities: 20000, longTermDebt: 5000, totalLiabilities: 25000, totalEquity: 55000 },
            cashFlow: { netIncome: 14500, depreciationAndAmortization: 1560, changeInWorkingCapital: -1060, cfo: 15000, capex: -4000, acquisitions: 0, cfi: -4000, debtIssued: 1000, stockIssued: 0, dividendsPaid: -7000, cff: -10000, netChangeInCash: 1000 }
        },
        { 
            year: '2020', revenue: 55000, grossProfit: 26500, ebitda: 16500, operatingProfit: 14850, interestExpense: -425, profitBeforeTax: 19375, netProfit: 15500, eps: 17.4,
            balanceSheet: { cashAndEquivalents: 11000, accountsReceivable: 18000, inventory: 16000, currentAssets: 45000, netPPE: 41000, intangibleAssets: 2000, totalAssets: 88000, accountsPayable: 11000, shortTermDebt: 6000, currentLiabilities: 22000, longTermDebt: 6000, totalLiabilities: 28000, totalEquity: 60000 },
            cashFlow: { netIncome: 15500, depreciationAndAmortization: 1650, changeInWorkingCapital: -150, cfo: 17000, capex: -4500, acquisitions: 0, cfi: -4500, debtIssued: 1000, stockIssued: 0, dividendsPaid: -7500, cff: -11000, netChangeInCash: 1500 }
        },
        { 
            year: '2021', revenue: 58000, grossProfit: 28000, ebitda: 17400, operatingProfit: 15660, interestExpense: -465, profitBeforeTax: 20625, netProfit: 16500, eps: 18.5,
            balanceSheet: { cashAndEquivalents: 12000, accountsReceivable: 20000, inventory: 18000, currentAssets: 50000, netPPE: 45000, intangibleAssets: 2000, totalAssets: 97000, accountsPayable: 12000, shortTermDebt: 7000, currentLiabilities: 24000, longTermDebt: 6000, totalLiabilities: 30000, totalEquity: 67000 },
            cashFlow: { netIncome: 16500, depreciationAndAmortization: 1740, changeInWorkingCapital: -240, cfo: 18000, capex: -5000, acquisitions: 0, cfi: -5000, debtIssued: 0, stockIssued: 0, dividendsPaid: -8000, cff: -12000, netChangeInCash: 1000 }
        },
        { 
            year: '2022', revenue: 60000, grossProfit: 29000, ebitda: 18000, operatingProfit: 16200, interestExpense: -550, profitBeforeTax: 21250, netProfit: 17000, eps: 19.1,
            balanceSheet: { cashAndEquivalents: 14000, accountsReceivable: 22000, inventory: 19000, currentAssets: 55000, netPPE: 48000, intangibleAssets: 2000, totalAssets: 105000, accountsPayable: 13000, shortTermDebt: 8000, currentLiabilities: 26000, longTermDebt: 6000, totalLiabilities: 32000, totalEquity: 73000 },
            cashFlow: { netIncome: 17000, depreciationAndAmortization: 1800, changeInWorkingCapital: 200, cfo: 19000, capex: -5500, acquisitions: 0, cfi: -5500, debtIssued: 1000, stockIssued: 0, dividendsPaid: -8500, cff: -12500, netChangeInCash: 1000 }
        },
    ],
    keyMetrics: { roe: 22, roa: 17, debtToEquity: 0.1, dividendYield: 3.5, dividendPayout: 55, workingCapitalRatio: 2.12 },
    investmentThesis: {
        positives: ["Market leader with a diverse portfolio of high-demand medicines.", "Strong export growth potential to regulated and emerging markets.", "Continuous investment in R&D and new facilities to maintain a competitive edge."],
        concerns: ["Regulatory risks related to drug pricing policies in Bangladesh and export markets.", "Dependency on imported raw materials, subject to price and currency volatility.", "Intense competition from local and international generic manufacturers."]
    },
    comparables: [
        { ticker: 'RENATA', marketCap: 150000, revenue: 35000, ebitda: 9800, netProfit: 5500 },
    ],
};

export default stock;