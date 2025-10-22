import type { Assumptions } from '../../types';

const stock: Assumptions = {
    name: 'Singer Bangladesh Limited',
    logo: '/logos/SINGERBD.png',
    // FIX: Added currentRevenue based on the latest historical data to satisfy the Assumptions type.
    currentRevenue: 15485,
    revenueGrowthRate: 10,
    ebitdaMargin: 16,
    taxRate: 30,
    capexAsPercentageOfRevenue: 5,
    nwcAsPercentageOfRevenue: 10,
    discountRate: 12,
    perpetualGrowthRate: 4,
    sharesOutstanding: 99.7,
    netDebt: 1817,
    projectionYears: 5,
    summary: 'Singer Bangladesh Limited (SINGERBD) manufactures and markets a wide range of home appliances, consumer electronics, sewing machines, and furniture, holding a significant position in the country\'s consumer durables market.',
    industry: 'Consumer Durables',
    category: 'A',
    shareholding: { directors: 57.0, government: 0.0, institutions: 19.5, foreign: 6.69, public: 16.81 },
    freeFloatShares: 42.9,
    listingYear: 1983,
    businessModel: {
        revenueStreams: ['Home Appliances', 'Consumer Electronics', 'Sewing Machines', 'Furniture'],
        keyClients: ['Retail Customers', 'Wholesale Dealers', 'Corporate Clients'],
        competitiveAdvantages: ['Strong Brand Recognition', 'Extensive Distribution Network', 'Acquisition by Arçelik providing global expertise', 'Local Manufacturing Capabilities'],
        distributionChannels: ['Company-owned Stores', 'Wholesale Dealers', 'E-commerce Platform', 'Corporate Sales Channel'],
    },
    marketCap: 16690,
    authorizedCapital: 2500,
    paidUpCapital: 997,
    historicalData: [
        { 
            year: '2016', revenue: 9007, grossProfit: 2500, ebitda: 1171, operatingProfit: 995, interestExpense: 215, profitBeforeTax: 780, netProfit: 546, eps: 7.12,
            balanceSheet: { cashAndEquivalents: 500, accountsReceivable: 2500, inventory: 3000, currentAssets: 6000, netPPE: 1800, intangibleAssets: 200, totalAssets: 8000, accountsPayable: 3000, shortTermDebt: 1500, currentLiabilities: 5000, longTermDebt: 500, totalLiabilities: 5500, totalEquity: 2500 },
            cashFlow: { netIncome: 546, depreciationAndAmortization: 176, changeInWorkingCapital: 78, cfo: 800, capex: -400, acquisitions: 0, cfi: -400, debtIssued: 200, stockIssued: 0, dividendsPaid: -500, cff: -300, netChangeInCash: 100 }
        },
        { 
            year: '2017', revenue: 11059, grossProfit: 3100, ebitda: 1548, operatingProfit: 1316, interestExpense: 249, profitBeforeTax: 1067, netProfit: 746, eps: 9.79,
            balanceSheet: { cashAndEquivalents: 600, accountsReceivable: 3000, inventory: 3400, currentAssets: 7000, netPPE: 2300, intangibleAssets: 200, totalAssets: 9500, accountsPayable: 3500, shortTermDebt: 2000, currentLiabilities: 6000, longTermDebt: 500, totalLiabilities: 6500, totalEquity: 3000 },
            cashFlow: { netIncome: 746, depreciationAndAmortization: 232, changeInWorkingCapital: 22, cfo: 1000, capex: -500, acquisitions: 0, cfi: -500, debtIssued: 300, stockIssued: 0, dividendsPaid: -700, cff: -400, netChangeInCash: 100 }
        },
        { 
            year: '2018', revenue: 13559, grossProfit: 3800, ebitda: 2034, operatingProfit: 1729, interestExpense: 415, profitBeforeTax: 1314, netProfit: 921, eps: 9.24,
            balanceSheet: { cashAndEquivalents: 700, accountsReceivable: 3800, inventory: 4000, currentAssets: 8500, netPPE: 2300, intangibleAssets: 200, totalAssets: 11000, accountsPayable: 4000, shortTermDebt: 2500, currentLiabilities: 7000, longTermDebt: 500, totalLiabilities: 7500, totalEquity: 3500 },
            cashFlow: { netIncome: 921, depreciationAndAmortization: 305, changeInWorkingCapital: -26, cfo: 1200, capex: -600, acquisitions: 0, cfi: -600, debtIssued: 400, stockIssued: 0, dividendsPaid: -900, cff: -500, netChangeInCash: 100 }
        },
        { 
            year: '2019', revenue: 15485, grossProfit: 4300, ebitda: 2478, operatingProfit: 2106, interestExpense: 632, profitBeforeTax: 1474, netProfit: 1032, eps: 10.35,
            balanceSheet: { cashAndEquivalents: 800, accountsReceivable: 4500, inventory: 4700, currentAssets: 10000, netPPE: 2800, intangibleAssets: 200, totalAssets: 13000, accountsPayable: 4500, shortTermDebt: 3000, currentLiabilities: 8000, longTermDebt: 1000, totalLiabilities: 9000, totalEquity: 4000 },
            cashFlow: { netIncome: 1032, depreciationAndAmortization: 372, changeInWorkingCapital: 96, cfo: 1500, capex: -700, acquisitions: 0, cfi: -700, debtIssued: 500, stockIssued: 0, dividendsPaid: -1100, cff: -600, netChangeInCash: 200 }
        },
    ],
    keyMetrics: { roe: 37.1, roa: 11.0, debtToEquity: 0.84, dividendYield: 4.0, dividendPayout: 60.0, workingCapitalRatio: 1.25 },
    investmentThesis: {
        positives: [
            "Acquisition by Arçelik provides access to global expertise in manufacturing and supply chain.",
            "Proposed merger with subsidiary IAL is expected to reduce the tax rate and improve bottom line.",
            "Strong historical top-line and bottom-line growth (CAGR > 20% in the last 4 years).",
            "Reasonably healthy dividend yield history.",
        ],
        concerns: [
            "Impact of COVID-19 has caused EPS de-growth.",
            "Declining gross profit, operating profit, and net profit margins.",
            "Increasing debt and finance costs are adversely affecting the bottom line.",
            "Working capital cycle is worsening, indicating lower operational efficiency.",
        ]
    },
    comparables: [
         { ticker: 'MARICO', marketCap: 76277, revenue: 14136, ebitda: 5375, netProfit: 3872 },
    ],
};

export default stock;