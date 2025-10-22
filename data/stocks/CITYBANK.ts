import type { Assumptions } from '../../types';

const stock: Assumptions = {
    name: 'The City Bank Limited',
    logo: '/logos/CITYBANK.png',
    // FIX: Added currentRevenue based on the latest historical data to satisfy the Assumptions type.
    currentRevenue: 55000,
    revenueGrowthRate: 10,
    ebitdaMargin: 22,
    taxRate: 23,
    capexAsPercentageOfRevenue: 2,
    nwcAsPercentageOfRevenue: 4,
    discountRate: 12,
    perpetualGrowthRate: 3.5,
    sharesOutstanding: 1100,
    netDebt: 35000,
    projectionYears: 5,
    summary: 'The City Bank Limited is one of the oldest private Commercial Banks in Bangladesh. It is a top bank in the country and is known for its digital banking services and credit card operations.',
    industry: 'Financial Services',
    category: 'A',
    shareholding: { directors: 30.0, government: 0.0, institutions: 25.0, foreign: 10.0, public: 35.0 },
    freeFloatShares: 770,
    listingYear: 1986,
    businessModel: {
        revenueStreams: ['Interest Income', 'Credit Card Fees', 'Retail Banking Services', 'Corporate Banking'],
        keyClients: ['Retail Customers', 'High Net Worth Individuals', 'Corporate Clients', 'SMEs'],
        competitiveAdvantages: ['Market Leader in Credit Cards', 'Strong Digital Platform (CityTouch)', 'American Express Partnership', 'Diverse Loan Portfolio'],
        distributionChannels: ['Branches', 'Digital Banking App', 'Call Centers', 'Corporate Relationship Managers'],
    },
    marketCap: 60000,
    authorizedCapital: 15000,
    paidUpCapital: 11000,
    historicalData: [
        { 
            year: '2019', revenue: 45000, grossProfit: 12000, ebitda: 10000, operatingProfit: 9000, interestExpense: 4052, profitBeforeTax: 4948, netProfit: 3800, eps: 3.45,
            balanceSheet: { cashAndEquivalents: 25000, accountsReceivable: 230000, inventory: 0, currentAssets: 130000, netPPE: 8000, intangibleAssets: 1500, totalAssets: 350000, accountsPayable: 18000, shortTermDebt: 280000, currentLiabilities: 110000, longTermDebt: 30000, totalLiabilities: 310000, totalEquity: 40000 },
            cashFlow: { netIncome: 3800, depreciationAndAmortization: 1000, changeInWorkingCapital: 1200, cfo: 6000, capex: -1500, acquisitions: 0, cfi: -15000, debtIssued: 9500, stockIssued: 0, dividendsPaid: -1500, cff: 8000, netChangeInCash: -1000 }
        },
        { 
            year: '2020', revenue: 48000, grossProfit: 12800, ebitda: 10500, operatingProfit: 9450, interestExpense: 5169, profitBeforeTax: 4281, netProfit: 3300, eps: 3.00,
            balanceSheet: { cashAndEquivalents: 28000, accountsReceivable: 250000, inventory: 0, currentAssets: 140000, netPPE: 8500, intangibleAssets: 1700, totalAssets: 380000, accountsPayable: 20000, shortTermDebt: 300000, currentLiabilities: 120000, longTermDebt: 35000, totalLiabilities: 335000, totalEquity: 45000 },
            cashFlow: { netIncome: 3300, depreciationAndAmortization: 1050, changeInWorkingCapital: 1150, cfo: 5500, capex: -1600, acquisitions: 0, cfi: -16000, debtIssued: 10500, stockIssued: 0, dividendsPaid: -1500, cff: 9000, netChangeInCash: -1500 }
        },
        { 
            year: '2021', revenue: 51000, grossProfit: 13500, ebitda: 11000, operatingProfit: 9900, interestExpense: 4442, profitBeforeTax: 5458, netProfit: 4200, eps: 3.82,
            balanceSheet: { cashAndEquivalents: 32000, accountsReceivable: 280000, inventory: 0, currentAssets: 155000, netPPE: 9000, intangibleAssets: 2000, totalAssets: 420000, accountsPayable: 22000, shortTermDebt: 330000, currentLiabilities: 130000, longTermDebt: 40000, totalLiabilities: 370000, totalEquity: 50000 },
            cashFlow: { netIncome: 4200, depreciationAndAmortization: 1100, changeInWorkingCapital: 1700, cfo: 7000, capex: -1800, acquisitions: 0, cfi: -18000, debtIssued: 12000, stockIssued: 0, dividendsPaid: -2000, cff: 10000, netChangeInCash: -1000 }
        },
        { 
            year: '2022', revenue: 55000, grossProfit: 14500, ebitda: 12100, operatingProfit: 10890, interestExpense: 4913, profitBeforeTax: 5977, netProfit: 4600, eps: 4.18,
            balanceSheet: { cashAndEquivalents: 35000, accountsReceivable: 310000, inventory: 0, currentAssets: 170000, netPPE: 10000, intangibleAssets: 2200, totalAssets: 460000, accountsPayable: 25000, shortTermDebt: 360000, currentLiabilities: 140000, longTermDebt: 45000, totalLiabilities: 405000, totalEquity: 55000 },
            cashFlow: { netIncome: 4600, depreciationAndAmortization: 1210, changeInWorkingCapital: 1690, cfo: 7500, capex: -2000, acquisitions: 0, cfi: -20000, debtIssued: 13000, stockIssued: 0, dividendsPaid: -2000, cff: 11000, netChangeInCash: -1500 }
        },
    ],
    keyMetrics: { roe: 14, roa: 1.2, debtToEquity: 8.5, dividendYield: 5, dividendPayout: 35, workingCapitalRatio: 1.21 },
    investmentThesis: {
        positives: ["Dominant market leadership in the high-margin credit card business, in partnership with American Express.", "Strong growth and adoption of its digital banking platform 'Citytouch', reducing operational costs.", "Diversified revenue stream from retail, corporate, and SME banking, enhancing stability.", "Focus on agent banking to expand reach into rural and semi-urban areas."],
        concerns: ["Risks to asset quality with potential for rising Non-Performing Loans (NPLs) in a challenging economy.", "Intense competition in the saturated banking sector from both local and foreign banks.", "Profitability is sensitive to fluctuations in interest rates, which can compress net interest margins.", "Increasing regulatory scrutiny and capital adequacy requirements."]
    },
    comparables: [
        { ticker: 'BRACBANK', marketCap: 105000, revenue: 75000, ebitda: 18750, netProfit: 6300 },
    ],
};

export default stock;