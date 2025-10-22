import type { Assumptions } from '../../types';

const stock: Assumptions = {
    name: 'Summit Power Company Ltd.',
    logo: '/logos/SPCL.png',
    // FIX: Added currentRevenue based on the latest historical data to satisfy the Assumptions type.
    currentRevenue: 45000,
    revenueGrowthRate: 7,
    ebitdaMargin: 40,
    taxRate: 27,
    capexAsPercentageOfRevenue: 8,
    nwcAsPercentageOfRevenue: 3,
    discountRate: 9.5,
    perpetualGrowthRate: 2.5,
    sharesOutstanding: 600,
    netDebt: 50000,
    projectionYears: 5,
    summary: 'Summit Power Company Ltd. is the leading independent power producer (IPP) of Bangladesh. It generates and supplies electricity to the national grid under long-term contracts.',
    industry: 'Power',
    category: 'A',
    shareholding: { directors: 63.0, government: 0.0, institutions: 17.0, foreign: 5.0, public: 15.0 },
    freeFloatShares: 222,
    listingYear: 2005,
    businessModel: {
        revenueStreams: ['Electricity Sales to BPDB', 'Capacity Payments', 'Energy Sales'],
        keyClients: ['Bangladesh Power Development Board (BPDB)'],
        competitiveAdvantages: ['Largest IPP in Bangladesh', 'Long-term Power Purchase Agreements (PPAs)', 'Operational Efficiency', 'Strategic Locations of Plants'],
        distributionChannels: ['National Power Grid'],
    },
    marketCap: 90000,
    authorizedCapital: 10000,
    paidUpCapital: 6000,
    historicalData: [
        { 
            year: '2019', revenue: 38000, grossProfit: 18000, ebitda: 15000, operatingProfit: 13500, interestExpense: 3226, profitBeforeTax: 10274, netProfit: 7500, eps: 12.5,
            balanceSheet: { cashAndEquivalents: 2000, accountsReceivable: 5000, inventory: 3000, currentAssets: 10000, netPPE: 105000, intangibleAssets: 5000, totalAssets: 120000, accountsPayable: 5000, shortTermDebt: 8000, currentLiabilities: 15000, longTermDebt: 55000, totalLiabilities: 70000, totalEquity: 50000 },
            cashFlow: { netIncome: 7500, depreciationAndAmortization: 1500, changeInWorkingCapital: 3000, cfo: 12000, capex: -10000, acquisitions: 0, cfi: -10000, debtIssued: 4000, stockIssued: 0, dividendsPaid: -5000, cff: -1000, netChangeInCash: 1000 }
        },
        { 
            year: '2020', revenue: 40000, grossProfit: 19000, ebitda: 16000, operatingProfit: 14400, interestExpense: 3438, profitBeforeTax: 10962, netProfit: 8000, eps: 13.3,
            balanceSheet: { cashAndEquivalents: 2500, accountsReceivable: 5500, inventory: 3000, currentAssets: 11000, netPPE: 114000, intangibleAssets: 5000, totalAssets: 130000, accountsPayable: 6000, shortTermDebt: 8000, currentLiabilities: 16000, longTermDebt: 59000, totalLiabilities: 75000, totalEquity: 55000 },
            cashFlow: { netIncome: 8000, depreciationAndAmortization: 1600, changeInWorkingCapital: 3400, cfo: 13000, capex: -11000, acquisitions: 0, cfi: -11000, debtIssued: 5000, stockIssued: 0, dividendsPaid: -6500, cff: -1500, netChangeInCash: 500 }
        },
        { 
            year: '2021', revenue: 42000, grossProfit: 20000, ebitda: 17000, operatingProfit: 15300, interestExpense: 3658, profitBeforeTax: 11642, netProfit: 8500, eps: 14.2,
            balanceSheet: { cashAndEquivalents: 3000, accountsReceivable: 6000, inventory: 3000, currentAssets: 12000, netPPE: 122000, intangibleAssets: 6000, totalAssets: 140000, accountsPayable: 7000, shortTermDebt: 8000, currentLiabilities: 17000, longTermDebt: 63000, totalLiabilities: 80000, totalEquity: 60000 },
            cashFlow: { netIncome: 8500, depreciationAndAmortization: 1700, changeInWorkingCapital: 3800, cfo: 14000, capex: -12000, acquisitions: 0, cfi: -12000, debtIssued: 5500, stockIssued: 0, dividendsPaid: -7300, cff: -1800, netChangeInCash: 200 }
        },
        { 
            year: '2022', revenue: 45000, grossProfit: 21500, ebitda: 18000, operatingProfit: 16200, interestExpense: 3877, profitBeforeTax: 12323, netProfit: 9000, eps: 15.0,
            balanceSheet: { cashAndEquivalents: 3500, accountsReceivable: 6500, inventory: 3000, currentAssets: 13000, netPPE: 130000, intangibleAssets: 7000, totalAssets: 150000, accountsPayable: 8000, shortTermDebt: 8000, currentLiabilities: 18000, longTermDebt: 67000, totalLiabilities: 85000, totalEquity: 65000 },
            cashFlow: { netIncome: 9000, depreciationAndAmortization: 1800, changeInWorkingCapital: 4200, cfo: 15000, capex: -13000, acquisitions: 0, cfi: -13000, debtIssued: 6000, stockIssued: 0, dividendsPaid: -8000, cff: -2000, netChangeInCash: 0 }
        },
    ],
    keyMetrics: { roe: 18, roa: 8, debtToEquity: 1.2, dividendYield: 6, dividendPayout: 70, workingCapitalRatio: 0.72 },
    investmentThesis: {
        positives: ["Guaranteed, stable revenue streams through long-term Power Purchase Agreements (PPAs) with the government.", "As the largest IPP, the company benefits from economies of scale and superior operational expertise.", "History of stable and high dividend payouts, making it attractive for income investors.", "Government's focus on increasing power generation capacity provides a favorable long-term outlook."],
        concerns: ["High dependency on a single buyer (Bangladesh Power Development Board), posing counterparty risk.", "Exposure to global fuel price volatility (e.g., furnace oil, natural gas) which can impact margins if not passed through.", "Regulatory risks, including potential changes in government power policy or tariff structures.", "Aging of some power plants may lead to higher maintenance costs and lower efficiency."]
    },
    comparables: [
        { ticker: 'DOREENPWR', marketCap: 45000, revenue: 18000, ebitda: 9000, netProfit: 3600 },
    ],
};

export default stock;