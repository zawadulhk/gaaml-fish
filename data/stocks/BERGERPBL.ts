import type { Assumptions } from '../../types';

const stock: Assumptions = {
    name: 'Berger Paints Bangladesh Ltd.',
    logo: '/logos/BERGERPBL.png',
    // FIX: Added currentRevenue based on the latest historical data to satisfy the Assumptions type.
    currentRevenue: 15108,
    revenueGrowthRate: 8.5,
    ebitdaMargin: 24.9,
    taxRate: 25.6,
    capexAsPercentageOfRevenue: 5,
    nwcAsPercentageOfRevenue: 10.5,
    discountRate: 12,
    perpetualGrowthRate: 4,
    sharesOutstanding: 46.4,
    netDebt: -2631,
    projectionYears: 5,
    summary: 'Berger Paints Bangladesh Ltd. (BERGERPBL) is the market leader in the paint industry of Bangladesh, engaged in the manufacturing and marketing of liquid and non-liquid paints, varnishes, and coatings for various applications.',
    industry: 'Paints & Chemicals',
    category: 'A',
    shareholding: { directors: 95.0, government: 0.0, institutions: 3.4, foreign: 0.1, public: 1.5 },
    freeFloatShares: 2.3,
    listingYear: 2005,
    businessModel: {
        revenueStreams: ['Decorative Coatings', 'Industrial Coatings', 'Marine Coatings', 'Wood Coatings', 'Construction Chemicals'],
        keyClients: ['Retail Consumers', 'Real Estate Developers', 'Industrial Manufacturers', 'Construction Firms'],
        competitiveAdvantages: ['Market Leadership in Bangladesh', 'Strong Brand Recognition', 'Wide Distribution Network', 'Diverse Product Portfolio'],
        distributionChannels: ['Dealer Network', 'Direct Sales to Projects', 'Retail Outlets', 'Corporate Sales Team'],
    },
    marketCap: 82933,
    authorizedCapital: 2000,
    paidUpCapital: 464,
    historicalData: [
        { 
            year: '2017-18', revenue: 16533, grossProfit: 6613, ebitda: 2817, operatingProfit: 2535, interestExpense: 132, profitBeforeTax: 2403, netProfit: 1788, eps: 44.27,
            balanceSheet: { cashAndEquivalents: 1000, accountsReceivable: 3000, inventory: 2500, currentAssets: 7000, netPPE: 4500, intangibleAssets: 500, totalAssets: 12000, accountsPayable: 2000, shortTermDebt: 500, currentLiabilities: 3000, longTermDebt: 1000, totalLiabilities: 4000, totalEquity: 8000 },
            cashFlow: { netIncome: 1788, depreciationAndAmortization: 282, changeInWorkingCapital: 130, cfo: 2200, capex: -800, acquisitions: 0, cfi: -800, debtIssued: -200, stockIssued: 0, dividendsPaid: -1000, cff: -1200, netChangeInCash: 200 }
        },
        { 
            year: '2018-19', revenue: 17800, grossProfit: 7120, ebitda: 3288, operatingProfit: 2959, interestExpense: 195, profitBeforeTax: 2764, netProfit: 2053, eps: 52.22,
            balanceSheet: { cashAndEquivalents: 1200, accountsReceivable: 3500, inventory: 2800, currentAssets: 8000, netPPE: 5000, intangibleAssets: 500, totalAssets: 13500, accountsPayable: 2200, shortTermDebt: 600, currentLiabilities: 3500, longTermDebt: 1000, totalLiabilities: 4500, totalEquity: 9000 },
            cashFlow: { netIncome: 2053, depreciationAndAmortization: 329, changeInWorkingCapital: 118, cfo: 2500, capex: -900, acquisitions: 0, cfi: -900, debtIssued: -200, stockIssued: 0, dividendsPaid: -1200, cff: -1400, netChangeInCash: 200 }
        },
        { 
            year: '2019-20', revenue: 18930, grossProfit: 7572, ebitda: 3791, operatingProfit: 3412, interestExpense: 147, profitBeforeTax: 3265, netProfit: 2422, eps: 48.04,
            balanceSheet: { cashAndEquivalents: 1500, accountsReceivable: 4000, inventory: 3000, currentAssets: 9000, netPPE: 5500, intangibleAssets: 500, totalAssets: 15000, accountsPayable: 2500, shortTermDebt: 700, currentLiabilities: 4000, longTermDebt: 1000, totalLiabilities: 5000, totalEquity: 10000 },
            cashFlow: { netIncome: 2422, depreciationAndAmortization: 379, changeInWorkingCapital: 0, cfo: 2800, capex: -1000, acquisitions: 0, cfi: -1000, debtIssued: -300, stockIssued: 0, dividendsPaid: -1300, cff: -1600, netChangeInCash: 200 }
        },
        { 
            year: '2020-21*', revenue: 15108, grossProfit: 6043, ebitda: 3767, operatingProfit: 3390, interestExpense: 390, profitBeforeTax: 3000, netProfit: 2228, eps: 36.03,
            balanceSheet: { cashAndEquivalents: 1300, accountsReceivable: 3800, inventory: 2900, currentAssets: 8500, netPPE: 5200, intangibleAssets: 500, totalAssets: 14200, accountsPayable: 2400, shortTermDebt: 600, currentLiabilities: 3800, longTermDebt: 800, totalLiabilities: 4600, totalEquity: 9600 },
            cashFlow: { netIncome: 2228, depreciationAndAmortization: 377, changeInWorkingCapital: -5, cfo: 2600, capex: -750, acquisitions: 0, cfi: -750, debtIssued: -200, stockIssued: 0, dividendsPaid: -1300, cff: -1500, netChangeInCash: 350 }
        },
    ],
    keyMetrics: {
        roe: 23.2,
        roa: 15.7,
        debtToEquity: 5.5,
        dividendYield: 2.25,
        dividendPayout: 56.5,
        workingCapitalRatio: 2.24,
    },
    investmentThesis: {
        positives: [
            "Consistent topline (10.6% CAGR) and net profit (11.5% CAGR) growth from FY14-FY20.",
            "Expansion of distribution to semi-urban and rural markets to drive future growth.",
            "New Savar unit expected to reduce transport and packaging costs, improving margins.",
            "Collaboration with Chugoku Marine Paints of Japan to enter the growing marine paints segment.",
            "Healthy liquidity with minimal leverage (Debt-Equity ratio of 5.5%).",
        ],
        concerns: [
            "Rising raw material prices (Resin, Pigments) are increasing COGS and reducing Gross Profit margins.",
            "COVID-19 lockdowns have lowered demand, with the company utilizing only ~75% of its capacity.",
            "Exposed to high seasonality risk, with poor sales during the monsoon season (June to November).",
            "Extended rainy seasons can adversely affect sales and profitability."
        ]
    },
    comparables: [
        { ticker: 'LINDEBD', marketCap: 22400, revenue: 4711, ebitda: 1649, netProfit: 1074 },
    ],
};

export default stock;