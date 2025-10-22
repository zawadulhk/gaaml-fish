import type { Assumptions } from '../../types';

const stock: Assumptions = {
    name: 'Renata Limited',
    logo: '/logos/RENATA.png',
    // FIX: Added currentRevenue based on the latest historical data to satisfy the Assumptions type.
    currentRevenue: 35000,
    revenueGrowthRate: 15,
    ebitdaMargin: 28,
    taxRate: 21,
    capexAsPercentageOfRevenue: 6,
    nwcAsPercentageOfRevenue: 7,
    discountRate: 12,
    perpetualGrowthRate: 4.5,
    sharesOutstanding: 120,
    netDebt: 4500,
    projectionYears: 5,
    summary: 'Renata Limited is a major pharmaceutical and animal health products company in Bangladesh. The company has a strong presence in both local and international markets with a diverse product portfolio.',
    industry: 'Pharmaceuticals',
    category: 'A',
    shareholding: { directors: 51.1, government: 0.0, institutions: 20.4, foreign: 8.2, public: 20.3 },
    freeFloatShares: 58,
    listingYear: 1979,
    businessModel: {
        revenueStreams: ['Human Pharmaceuticals', 'Animal Health Products', 'Nutritionals', 'Contract Manufacturing'],
        keyClients: ['Veterinarians', 'Pharmacies', 'Livestock Farms', 'International NGOs'],
        competitiveAdvantages: ['Dominant in Animal Health', 'Diverse Product Portfolio', 'Strong Brand Equity', 'International Certifications'],
        distributionChannels: ['Nationwide Distribution Depots', 'Sales Representatives', 'Third-party Logistics', 'Export Channels'],
    },
    marketCap: 150000,
    authorizedCapital: 1500,
    paidUpCapital: 1190,
    historicalData: [
        { 
            year: '2019', revenue: 24000, grossProfit: 8000, ebitda: 6700, operatingProfit: 6030, interestExpense: 1599, profitBeforeTax: 4431, netProfit: 3500, eps: 29.2,
            balanceSheet: { cashAndEquivalents: 1500, accountsReceivable: 4000, inventory: 4500, currentAssets: 10000, netPPE: 9000, intangibleAssets: 1000, totalAssets: 20000, accountsPayable: 3000, shortTermDebt: 1000, currentLiabilities: 6000, longTermDebt: 2000, totalLiabilities: 8000, totalEquity: 12000 },
            cashFlow: { netIncome: 3500, depreciationAndAmortization: 670, changeInWorkingCapital: 330, cfo: 4500, capex: -1500, acquisitions: 0, cfi: -1500, debtIssued: 500, stockIssued: 0, dividendsPaid: -3000, cff: -2500, netChangeInCash: 500 }
        },
        { 
            year: '2020', revenue: 27500, grossProfit: 9200, ebitda: 7700, operatingProfit: 6930, interestExpense: 1743, profitBeforeTax: 5187, netProfit: 4100, eps: 34.2,
            balanceSheet: { cashAndEquivalents: 1800, accountsReceivable: 5000, inventory: 5200, currentAssets: 12000, netPPE: 10000, intangibleAssets: 1000, totalAssets: 23000, accountsPayable: 3500, shortTermDebt: 1200, currentLiabilities: 7000, longTermDebt: 2000, totalLiabilities: 9000, totalEquity: 14000 },
            cashFlow: { netIncome: 4100, depreciationAndAmortization: 770, changeInWorkingCapital: 330, cfo: 5200, capex: -1700, acquisitions: 0, cfi: -1700, debtIssued: 200, stockIssued: 0, dividendsPaid: -3200, cff: -3000, netChangeInCash: 500 }
        },
        { 
            year: '2021', revenue: 31000, grossProfit: 10500, ebitda: 8600, operatingProfit: 7740, interestExpense: 1663, profitBeforeTax: 6077, netProfit: 4800, eps: 40.0,
            balanceSheet: { cashAndEquivalents: 2200, accountsReceivable: 6000, inventory: 5800, currentAssets: 14000, netPPE: 12000, intangibleAssets: 1000, totalAssets: 27000, accountsPayable: 4000, shortTermDebt: 1500, currentLiabilities: 8000, longTermDebt: 2000, totalLiabilities: 10000, totalEquity: 17000 },
            cashFlow: { netIncome: 4800, depreciationAndAmortization: 860, changeInWorkingCapital: 340, cfo: 6000, capex: -2000, acquisitions: 0, cfi: -2000, debtIssued: 500, stockIssued: 0, dividendsPaid: -4000, cff: -3500, netChangeInCash: 500 }
        },
        { 
            year: '2022', revenue: 35000, grossProfit: 11800, ebitda: 9800, operatingProfit: 8820, interestExpense: 1858, profitBeforeTax: 6962, netProfit: 5500, eps: 45.8,
            balanceSheet: { cashAndEquivalents: 2800, accountsReceivable: 7000, inventory: 6200, currentAssets: 16000, netPPE: 14000, intangibleAssets: 1000, totalAssets: 31000, accountsPayable: 4500, shortTermDebt: 2000, currentLiabilities: 9000, longTermDebt: 2000, totalLiabilities: 11000, totalEquity: 20000 },
            cashFlow: { netIncome: 5500, depreciationAndAmortization: 980, changeInWorkingCapital: 520, cfo: 7000, capex: -2200, acquisitions: 0, cfi: -2200, debtIssued: 200, stockIssued: 0, dividendsPaid: -4400, cff: -4000, netChangeInCash: 800 }
        },
    ],
    keyMetrics: { roe: 25, roa: 18, debtToEquity: 0.2, dividendYield: 2.5, dividendPayout: 50, workingCapitalRatio: 1.78 },
    investmentThesis: {
        positives: ["Strong market position in the high-margin animal health sector.", "Growing export market for human pharmaceuticals to Asia and Africa.", "Consistent R&D investment leading to new and innovative product launches.", "Low leverage provides financial flexibility for expansion."],
        concerns: ["High dependency on imported raw materials for production.", "Intense competition from numerous players in the generic drug market.", "Potential for stricter government price controls on essential medicines.", "Currency fluctuation risk affecting import costs and export earnings."]
    },
    comparables: [
        { ticker: 'SQURPHARMA', marketCap: 185000, revenue: 60000, ebitda: 18000, netProfit: 17000 },
    ],
};

export default stock;