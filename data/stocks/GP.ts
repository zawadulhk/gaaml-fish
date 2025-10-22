import type { Assumptions } from '../../types';

const stock: Assumptions = {
    name: 'Grameenphone Ltd.',
    logo: '/logos/GP.png',
    // FIX: Added currentRevenue based on the latest historical data to satisfy the Assumptions type.
    currentRevenue: 139606,
    revenueGrowthRate: 5,
    ebitdaMargin: 62.4,
    taxRate: 41,
    capexAsPercentageOfRevenue: 10,
    nwcAsPercentageOfRevenue: 3,
    discountRate: 11.1,
    perpetualGrowthRate: 3.5,
    sharesOutstanding: 1350,
    netDebt: 19117,
    projectionYears: 5,
    summary: 'Grameenphone Ltd. is the leading telecommunications service provider in Bangladesh. With over 83 million subscribers, it is the largest mobile network operator in the country and part of the Telenor Group.',
    industry: 'Telecommunication',
    category: 'A',
    shareholding: { directors: 90.0, government: 0.0, institutions: 4.6, foreign: 3.2, public: 2.2 },
    freeFloatShares: 135,
    listingYear: 2009,
    businessModel: {
        revenueStreams: ['Voice Services', 'Data Services', 'Value-Added Services (VAS)', 'Enterprise Solutions'],
        keyClients: ['Prepaid Customers', 'Postpaid Customers', 'Corporate Clients', 'SMEs'],
        competitiveAdvantages: ['Largest Subscriber Base', 'Superior Network Coverage', 'Strong Brand Recognition', 'Economies of Scale'],
        distributionChannels: ['Retail Outlets', 'Grameenphone Centers', 'Digital Channels (MyGP App)', 'Distributors'],
    },
    marketCap: 463288,
    authorizedCapital: 20000,
    paidUpCapital: 13503,
    historicalData: [
        { 
            year: '2017', revenue: 128436, grossProfit: 80000, ebitda: 73291, operatingProfit: 62297, interestExpense: 15858, profitBeforeTax: 46439, netProfit: 27423, eps: 20.3,
            balanceSheet: { cashAndEquivalents: 5000, accountsReceivable: 10000, inventory: 1000, currentAssets: 30000, netPPE: 80000, intangibleAssets: 20000, totalAssets: 130000, accountsPayable: 25000, shortTermDebt: 20000, currentLiabilities: 60000, longTermDebt: 30000, totalLiabilities: 90000, totalEquity: 40000 },
            cashFlow: { netIncome: 27423, depreciationAndAmortization: 10994, changeInWorkingCapital: 26583, cfo: 65000, capex: -12000, acquisitions: 0, cfi: -12000, debtIssued: -23000, stockIssued: 0, dividendsPaid: -27000, cff: -50000, netChangeInCash: 3000 }
        },
        { 
            year: '2018', revenue: 132832, grossProfit: 85000, ebitda: 79316, operatingProfit: 67419, interestExpense: 10925, profitBeforeTax: 56494, netProfit: 33363, eps: 24.7,
            balanceSheet: { cashAndEquivalents: 6000, accountsReceivable: 11000, inventory: 1200, currentAssets: 32000, netPPE: 85000, intangibleAssets: 23000, totalAssets: 140000, accountsPayable: 27000, shortTermDebt: 22000, currentLiabilities: 65000, longTermDebt: 30000, totalLiabilities: 95000, totalEquity: 45000 },
            cashFlow: { netIncome: 33363, depreciationAndAmortization: 11897, changeInWorkingCapital: 24740, cfo: 70000, capex: -13000, acquisitions: 0, cfi: -13000, debtIssued: -20000, stockIssued: 0, dividendsPaid: -32000, cff: -52000, netChangeInCash: 5000 }
        },
        { 
            year: '2019', revenue: 143656, grossProfit: 95000, ebitda: 90103, operatingProfit: 76588, interestExpense: 18131, profitBeforeTax: 58457, netProfit: 34517, eps: 25.6,
            balanceSheet: { cashAndEquivalents: 7000, accountsReceivable: 12000, inventory: 1300, currentAssets: 35000, netPPE: 90000, intangibleAssets: 25000, totalAssets: 150000, accountsPayable: 30000, shortTermDebt: 25000, currentLiabilities: 70000, longTermDebt: 30000, totalLiabilities: 100000, totalEquity: 50000 },
            cashFlow: { netIncome: 34517, depreciationAndAmortization: 13515, changeInWorkingCapital: 26968, cfo: 75000, capex: -14000, acquisitions: 0, cfi: -14000, debtIssued: -20000, stockIssued: 0, dividendsPaid: -35000, cff: -55000, netChangeInCash: 6000 }
        },
        { 
            year: '2020', revenue: 139606, grossProfit: 92000, ebitda: 87090, operatingProfit: 74027, interestExpense: 11029, profitBeforeTax: 63000, netProfit: 37187, eps: 27.5,
            balanceSheet: { cashAndEquivalents: 8000, accountsReceivable: 13000, inventory: 1500, currentAssets: 38000, netPPE: 95000, intangibleAssets: 27000, totalAssets: 160000, accountsPayable: 32000, shortTermDebt: 27000, currentLiabilities: 75000, longTermDebt: 30000, totalLiabilities: 105000, totalEquity: 55000 },
            cashFlow: { netIncome: 37187, depreciationAndAmortization: 13063, changeInWorkingCapital: 29750, cfo: 80000, capex: -15000, acquisitions: 0, cfi: -15000, debtIssued: -23000, stockIssued: 0, dividendsPaid: -37000, cff: -60000, netChangeInCash: 5000 }
        },
    ],
    keyMetrics: { roe: 82.2, roa: 25.0, debtToEquity: 0.42, dividendYield: 7.0, dividendPayout: 99.9, workingCapitalRatio: 0.51 },
    investmentThesis: {
        positives: [
            "Efficiency in managing solid growth in subscribers, revenue, and net profit with controlled OPEX.",
            "Strong brand image and largest active subscriber base positions it ahead of rivals.",
            "Recently acquired new spectrum, holding the highest total spectrum in the industry.",
            "Growing contribution from data revenue indicates strong future growth potential.",
            "Handsome dividend payout policy (nearly 100% each year).",
        ],
        concerns: [
            "Higher use of OTT platforms (e.g., WhatsApp) is causing a decline in traditional voice call revenue.",
            "Regulatory pressures and ongoing disputes (e.g., system audit claims) pose financial risks.",
            "Designated as a Significant Market Power (SMP) operator, which could lead to business restrictions.",
            "Growing competition from ISP/PSTN broadband services may affect long-term cellular data growth.",
        ]
    },
    comparables: [
        { ticker: 'ROBI', marketCap: 157138, revenue: 81425, ebitda: 33172, netProfit: 1803 },
    ],
};

export default stock;