import type { Assumptions } from '../../types';

const stock: Assumptions = {
    name: 'BRAC Bank Limited',
    logo: '/logos/BRACBANK.png',
    // FIX: Added currentRevenue based on the latest historical data to satisfy the Assumptions type.
    currentRevenue: 75000,
    revenueGrowthRate: 12,
    ebitdaMargin: 25,
    taxRate: 22,
    capexAsPercentageOfRevenue: 4,
    nwcAsPercentageOfRevenue: 6,
    discountRate: 11.5,
    perpetualGrowthRate: 4,
    sharesOutstanding: 1400,
    netDebt: 25000,
    projectionYears: 5,
    summary: 'BRAC Bank Limited is a leading private commercial bank in Bangladesh, offering a full range of banking services to retail and corporate customers. It is known for its focus on Small and Medium Enterprises (SME).',
    industry: 'Financial Services',
    category: 'A',
    shareholding: { directors: 45.9, government: 0.1, institutions: 18.5, foreign: 20.3, public: 15.2 },
    freeFloatShares: 750,
    listingYear: 2007,
    businessModel: {
        revenueStreams: ['Interest Income', 'Investment Income', 'Fees & Commissions', 'FX Gains'],
        keyClients: ['Retail Customers', 'SMEs', 'Corporate Clients', 'Government Agencies'],
        competitiveAdvantages: ['Strong SME Focus', 'Large Distribution Network', 'Renowned Brand', 'Digital Banking Platform'],
        distributionChannels: ['Branch Network', 'ATMs & CDMs', 'Mobile Banking App (Astha)', 'Agent Banking'],
    },
    marketCap: 105000,
    authorizedCapital: 20000,
    paidUpCapital: 14000,
    historicalData: [
        { 
            year: '2019', revenue: 65000, grossProfit: 19000, ebitda: 16250, operatingProfit: 14625, interestExpense: 7577, profitBeforeTax: 7048, netProfit: 5500, eps: 3.93,
            balanceSheet: { cashAndEquivalents: 30000, accountsReceivable: 250000, inventory: 0, currentAssets: 150000, netPPE: 10000, intangibleAssets: 2000, totalAssets: 400000, accountsPayable: 20000, shortTermDebt: 300000, currentLiabilities: 120000, longTermDebt: 50000, totalLiabilities: 350000, totalEquity: 50000 },
            cashFlow: { netIncome: 5500, depreciationAndAmortization: 1625, changeInWorkingCapital: 875, cfo: 8000, capex: -2000, acquisitions: 0, cfi: -20000, debtIssued: 12000, stockIssued: 0, dividendsPaid: -2000, cff: 10000, netChangeInCash: -2000 }
        },
        { 
            year: '2020', revenue: 68000, grossProfit: 20000, ebitda: 17000, operatingProfit: 15300, interestExpense: 8634, profitBeforeTax: 6666, netProfit: 5200, eps: 3.71,
            balanceSheet: { cashAndEquivalents: 35000, accountsReceivable: 280000, inventory: 0, currentAssets: 170000, netPPE: 11000, intangibleAssets: 2200, totalAssets: 450000, accountsPayable: 22000, shortTermDebt: 330000, currentLiabilities: 140000, longTermDebt: 65000, totalLiabilities: 395000, totalEquity: 55000 },
            cashFlow: { netIncome: 5200, depreciationAndAmortization: 1700, changeInWorkingCapital: 2100, cfo: 9000, capex: -2500, acquisitions: 0, cfi: -22000, debtIssued: 13000, stockIssued: 0, dividendsPaid: -2000, cff: 11000, netChangeInCash: -2000 }
        },
        { 
            year: '2021', revenue: 72000, grossProfit: 21000, ebitda: 18000, operatingProfit: 16200, interestExpense: 8508, profitBeforeTax: 7692, netProfit: 6000, eps: 4.29,
            balanceSheet: { cashAndEquivalents: 40000, accountsReceivable: 310000, inventory: 0, currentAssets: 190000, netPPE: 12000, intangibleAssets: 2500, totalAssets: 500000, accountsPayable: 25000, shortTermDebt: 360000, currentLiabilities: 160000, longTermDebt: 80000, totalLiabilities: 440000, totalEquity: 60000 },
            cashFlow: { netIncome: 6000, depreciationAndAmortization: 1800, changeInWorkingCapital: 2200, cfo: 10000, capex: -2800, acquisitions: 0, cfi: -25000, debtIssued: 15500, stockIssued: 0, dividendsPaid: -2500, cff: 13000, netChangeInCash: -2000 }
        },
        { 
            year: '2022', revenue: 75000, grossProfit: 22000, ebitda: 18750, operatingProfit: 16875, interestExpense: 8798, profitBeforeTax: 8077, netProfit: 6300, eps: 4.50,
            balanceSheet: { cashAndEquivalents: 45000, accountsReceivable: 340000, inventory: 0, currentAssets: 210000, netPPE: 13000, intangibleAssets: 2800, totalAssets: 550000, accountsPayable: 28000, shortTermDebt: 390000, currentLiabilities: 180000, longTermDebt: 95000, totalLiabilities: 485000, totalEquity: 65000 },
            cashFlow: { netIncome: 6300, depreciationAndAmortization: 1875, changeInWorkingCapital: 2825, cfo: 11000, capex: -3000, acquisitions: 0, cfi: -28000, debtIssued: 18000, stockIssued: 0, dividendsPaid: -3000, cff: 15000, netChangeInCash: -2000 }
        },
    ],
    keyMetrics:  { roe: 13.5, roa: 1.5, debtToEquity: 7.2, dividendYield: 4.5, dividendPayout: 40, workingCapitalRatio: 1.17 },
    investmentThesis: {
        positives: ["Dominant position in the SME lending space, a key growth driver for the economy.", "Strong digital transformation with the 'Astha' app enhancing customer engagement.", "Diversified loan book reducing concentration risk."],
        concerns: ["Potential increase in non-performing loans (NPLs) due to macroeconomic headwinds.", "Intense competition from other private commercial banks and MFIs.", "Net interest margin pressure from rising deposit costs."]
    },
    comparables: [
        { ticker: 'CITYBANK', marketCap: 60000, revenue: 55000, ebitda: 12100, netProfit: 4600 },
    ],
};

export default stock;