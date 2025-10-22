import type { Assumptions } from '../../types';

const stock: Assumptions = {
    name: 'Robi Axiata Limited',
    logo: '/logos/ROBI.png',
    // FIX: Added currentRevenue based on the latest historical data to satisfy the Assumptions type.
    currentRevenue: 81425,
    revenueGrowthRate: 7,
    ebitdaMargin: 40.7,
    taxRate: 45,
    capexAsPercentageOfRevenue: 20,
    nwcAsPercentageOfRevenue: -20,
    discountRate: 10.5,
    perpetualGrowthRate: 3,
    sharesOutstanding: 5238,
    netDebt: 20082,
    projectionYears: 5,
    summary: 'Robi Axiata Limited is the second-largest mobile network operator in Bangladesh, with 55 million subscribers. It is a joint venture between Axiata Group Berhad of Malaysia and Bharti Airtel of India.',
    industry: 'Telecommunication',
    category: 'A',
    shareholding: { directors: 90.0, government: 0.0, institutions: 2.0, foreign: 1.0, public: 7.0 },
    freeFloatShares: 523.8,
    listingYear: 2020,
    businessModel: {
        revenueStreams: ['Voice & Data Bundles', 'Digital Services', 'Enterprise Solutions', 'Roaming Services'],
        keyClients: ['Youth Segment', 'Digital Natives', 'Corporate Accounts', 'Rural Subscribers'],
        competitiveAdvantages: ['Strong 4.5G Network', 'Innovative Digital Services', 'Backing from Axiata & Airtel', 'Strong position in data segment'],
        distributionChannels: ['Robi Sheba Centers', 'Retailer Network', 'My Robi App', 'Affiliate Partners'],
    },
    marketCap: 157138,
    authorizedCapital: 60000,
    paidUpCapital: 52300,
    historicalData: [
        { 
            year: '2018', revenue: 68900, grossProfit: 18000, ebitda: 14000, operatingProfit: 11900, interestExpense: 8009, profitBeforeTax: 3891, netProfit: 2140, eps: 0.46,
            balanceSheet: { cashAndEquivalents: 4000, accountsReceivable: 5000, inventory: 800, currentAssets: 20000, netPPE: 140000, intangibleAssets: 20000, totalAssets: 180000, accountsPayable: 20000, shortTermDebt: 15000, currentLiabilities: 50000, longTermDebt: 70000, totalLiabilities: 120000, totalEquity: 60000 },
            cashFlow: { netIncome: 2140, depreciationAndAmortization: 2100, changeInWorkingCapital: 5760, cfo: 10000, capex: -15000, acquisitions: 0, cfi: -15000, debtIssued: 6000, stockIssued: 0, dividendsPaid: -1000, cff: 5000, netChangeInCash: 0 }
        },
        { 
            year: '2019', revenue: 74900, grossProfit: 35000, ebitda: 28600, operatingProfit: 24310, interestExpense: 23999, profitBeforeTax: 311, netProfit: 170, eps: 0.04,
            balanceSheet: { cashAndEquivalents: 4500, accountsReceivable: 6000, inventory: 1000, currentAssets: 22000, netPPE: 145000, intangibleAssets: 23000, totalAssets: 190000, accountsPayable: 22000, shortTermDebt: 17000, currentLiabilities: 55000, longTermDebt: 70000, totalLiabilities: 125000, totalEquity: 65000 },
            cashFlow: { netIncome: 170, depreciationAndAmortization: 4290, changeInWorkingCapital: 15540, cfo: 20000, capex: -18000, acquisitions: 0, cfi: -18000, debtIssued: 0, stockIssued: 0, dividendsPaid: -1000, cff: -1000, netChangeInCash: 1000 }
        },
        { 
            year: '2020', revenue: 75643, grossProfit: 38000, ebitda: 32045, operatingProfit: 27238, interestExpense: 24410, profitBeforeTax: 2828, netProfit: 1553, eps: 0.30,
            balanceSheet: { cashAndEquivalents: 5000, accountsReceivable: 7000, inventory: 1200, currentAssets: 25000, netPPE: 150000, intangibleAssets: 25000, totalAssets: 200000, accountsPayable: 25000, shortTermDebt: 18000, currentLiabilities: 60000, longTermDebt: 70000, totalLiabilities: 130000, totalEquity: 70000 },
            cashFlow: { netIncome: 1553, depreciationAndAmortization: 4807, changeInWorkingCapital: 18640, cfo: 25000, capex: -20000, acquisitions: 0, cfi: -20000, debtIssued: -1500, stockIssued: 0, dividendsPaid: -1500, cff: -3000, netChangeInCash: 2000 }
        },
        { 
            year: '2021', revenue: 81425, grossProfit: 40000, ebitda: 33172, operatingProfit: 28196, interestExpense: 24916, profitBeforeTax: 3280, netProfit: 1803, eps: 0.34,
            balanceSheet: { cashAndEquivalents: 6000, accountsReceivable: 8000, inventory: 1500, currentAssets: 28000, netPPE: 155000, intangibleAssets: 27000, totalAssets: 210000, accountsPayable: 28000, shortTermDebt: 20000, currentLiabilities: 65000, longTermDebt: 70000, totalLiabilities: 135000, totalEquity: 75000 },
            cashFlow: { netIncome: 1803, depreciationAndAmortization: 4976, changeInWorkingCapital: 21221, cfo: 28000, capex: -22000, acquisitions: 0, cfi: -22000, debtIssued: -2000, stockIssued: 0, dividendsPaid: -2000, cff: -4000, netChangeInCash: 2000 }
        },
    ],
    keyMetrics: { roe: 2.7, roa: 0.9, debtToEquity: 0.38, dividendYield: 1.7, dividendPayout: 145.2, workingCapitalRatio: 0.43 },
    investmentThesis: {
        positives: [
            "Higher smartphone penetration and greater internet demand will continue to fuel the data boom.",
            "Strong foothold and growing market share in the data segment, supported by newly acquired spectrum.",
            "Bottom line expected to improve as the effective tax rate normalizes.",
            "Strategies for data, voice, and bundle packages have worked well to acquire and monetize customers.",
        ],
        concerns: [
            "Falling data tariffs due to intense competition is the major concern and pressures margins.",
            "Aggressive data tariff reductions by the market leader (Grameenphone) will force a response.",
            "Service quality has been questioned despite deploying newly acquired spectrum.",
            "Standoff with Nationwide Telecommunication Transmission Network (NTTN) operators could hinder 5G rollout.",
        ]
    },
    comparables: [
         { ticker: 'GP', marketCap: 463288, revenue: 139606, ebitda: 87090, netProfit: 37187 },
    ],
};

export default stock;