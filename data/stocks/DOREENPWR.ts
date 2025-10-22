import type { Assumptions } from '../../types';

const stock: Assumptions = {
    name: 'Doreen Power Generations and Systems Ltd.',
    logo: '/logos/DOREENPWR.png',
    // FIX: Added currentRevenue based on the latest historical data to satisfy the Assumptions type.
    currentRevenue: 18000,
    revenueGrowthRate: 18,
    ebitdaMargin: 50,
    taxRate: 15,
    capexAsPercentageOfRevenue: 10,
    nwcAsPercentageOfRevenue: 2,
    discountRate: 13,
    perpetualGrowthRate: 4.5,
    sharesOutstanding: 150,
    netDebt: 22000,
    projectionYears: 5,
    summary: 'Doreen Power Generations and Systems Limited operates as an independent power producer. The company owns and operates multiple power plants, contributing significantly to the national grid.',
    industry: 'Power',
    category: 'A',
    shareholding: { directors: 67.0, government: 0.0, institutions: 15.0, foreign: 2.0, public: 16.0 },
    freeFloatShares: 49.5,
    listingYear: 2016,
    businessModel: {
        revenueStreams: ['Electricity Sales', 'By-product Sales'],
        keyClients: ['Bangladesh Power Development Board (BPDB)', 'Rural Electrification Board (REB)'],
        competitiveAdvantages: ['High EBITDA Margins', 'Tax Exemptions for Power Plants', 'Fast Project Implementation', 'Diversified Fuel Sources'],
        distributionChannels: ['National Power Grid', 'Direct connection to REB grids'],
    },
    marketCap: 45000,
    authorizedCapital: 2000,
    paidUpCapital: 1500,
    historicalData: [
        { 
            year: '2019', revenue: 10000, grossProfit: 6000, ebitda: 5000, operatingProfit: 4500, interestExpense: 2147, profitBeforeTax: 2353, netProfit: 2000, eps: 13.3,
            balanceSheet: { cashAndEquivalents: 500, accountsReceivable: 2000, inventory: 500, currentAssets: 3000, netPPE: 21000, intangibleAssets: 1000, totalAssets: 25000, accountsPayable: 1500, shortTermDebt: 3000, currentLiabilities: 5000, longTermDebt: 10000, totalLiabilities: 15000, totalEquity: 10000 },
            cashFlow: { netIncome: 2000, depreciationAndAmortization: 500, changeInWorkingCapital: 1000, cfo: 3500, capex: -2500, acquisitions: 0, cfi: -2500, debtIssued: 500, stockIssued: 0, dividendsPaid: -1000, cff: -500, netChangeInCash: 500 }
        },
        { 
            year: '2020', revenue: 12500, grossProfit: 7500, ebitda: 6200, operatingProfit: 5580, interestExpense: 2638, profitBeforeTax: 2942, netProfit: 2500, eps: 16.7,
            balanceSheet: { cashAndEquivalents: 700, accountsReceivable: 2500, inventory: 800, currentAssets: 4000, netPPE: 25000, intangibleAssets: 1000, totalAssets: 30000, accountsPayable: 1800, shortTermDebt: 3500, currentLiabilities: 6000, longTermDebt: 11000, totalLiabilities: 17000, totalEquity: 13000 },
            cashFlow: { netIncome: 2500, depreciationAndAmortization: 620, changeInWorkingCapital: 1080, cfo: 4200, capex: -3000, acquisitions: 0, cfi: -3000, debtIssued: 1000, stockIssued: 0, dividendsPaid: -1700, cff: -700, netChangeInCash: 500 }
        },
        { 
            year: '2021', revenue: 15000, grossProfit: 9000, ebitda: 7500, operatingProfit: 6750, interestExpense: 3224, profitBeforeTax: 3526, netProfit: 3000, eps: 20.0,
            balanceSheet: { cashAndEquivalents: 1000, accountsReceivable: 3000, inventory: 1000, currentAssets: 5000, netPPE: 30000, intangibleAssets: 1000, totalAssets: 36000, accountsPayable: 2000, shortTermDebt: 4000, currentLiabilities: 7000, longTermDebt: 13000, totalLiabilities: 20000, totalEquity: 16000 },
            cashFlow: { netIncome: 3000, depreciationAndAmortization: 750, changeInWorkingCapital: 1250, cfo: 5000, capex: -3500, acquisitions: 0, cfi: -3500, debtIssued: 2000, stockIssued: 0, dividendsPaid: -3000, cff: -1000, netChangeInCash: 500 }
        },
        { 
            year: '2022', revenue: 18000, grossProfit: 10800, ebitda: 9000, operatingProfit: 8100, interestExpense: 3876, profitBeforeTax: 4224, netProfit: 3600, eps: 24.0,
            balanceSheet: { cashAndEquivalents: 1200, accountsReceivable: 3500, inventory: 1300, currentAssets: 6000, netPPE: 35000, intangibleAssets: 1000, totalAssets: 42000, accountsPayable: 2500, shortTermDebt: 4500, currentLiabilities: 8000, longTermDebt: 16000, totalLiabilities: 24000, totalEquity: 18000 },
            cashFlow: { netIncome: 3600, depreciationAndAmortization: 900, changeInWorkingCapital: 1500, cfo: 6000, capex: -4000, acquisitions: 0, cfi: -4000, debtIssued: 3000, stockIssued: 0, dividendsPaid: -4200, cff: -1200, netChangeInCash: 800 }
        },
    ],
    keyMetrics: { roe: 22, roa: 12, debtToEquity: 1.5, dividendYield: 4.5, dividendPayout: 50, workingCapitalRatio: 0.75 },
    investmentThesis: {
        positives: ["Aggressive capacity expansion has led to a high historical and projected revenue growth rate.", "Benefitting from generous tax exemptions available to new power plants, boosting net profit margins.", "High operational efficiency and favorable PPAs contribute to industry-leading EBITDA margins.", "Diversification into renewable energy projects could be a future growth catalyst."],
        concerns: ["Higher leverage taken on to fund aggressive expansion increases financial risk.", "Significant execution risk associated with bringing new, large-scale projects online on time and within budget.", "Heavy reliance on timely payments from government entities like BPDB and REB.", "Potential for increased regulatory oversight as the company's scale grows."]
    },
    comparables: [
        { ticker: 'SPCL', marketCap: 90000, revenue: 45000, ebitda: 18000, netProfit: 9000 },
    ],
};

export default stock;