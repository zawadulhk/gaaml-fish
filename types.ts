
export interface Shareholding {
    directors: number;
    government: number;
    institutions: number;
    foreign: number;
    public: number;
}

export interface HistoricalData {
    year: string;
    revenue: number;
    grossProfit: number;
    ebitda: number;
    operatingProfit: number;
    interestExpense: number;
    profitBeforeTax: number;
    netProfit: number;
    eps: number;
    balanceSheet: {
        cashAndEquivalents: number;
        accountsReceivable: number;
        inventory: number;
        currentAssets: number;
        netPPE: number;
        intangibleAssets: number;
        totalAssets: number;
        accountsPayable: number;
        shortTermDebt: number;
        currentLiabilities: number;
        longTermDebt: number;
        totalLiabilities: number;
        totalEquity: number;
    };
    cashFlow: {
        netIncome: number;
        depreciationAndAmortization: number;
        changeInWorkingCapital: number;
        cfo: number;
        capex: number;
        acquisitions: number;
        cfi: number;
        debtIssued: number;
        stockIssued: number;
        dividendsPaid: number;
        cff: number;
        netChangeInCash: number;
    };
}

export interface KeyMetrics {
    roe: number;
    roa: number;
    debtToEquity: number;
    dividendYield: number;
    dividendPayout: number;
    workingCapitalRatio: number;
}

export interface InvestmentThesis {
    positives: string[];
    concerns: string[];
}

export interface Comparable {
    ticker: string;
    marketCap: number;
    revenue: number;
    ebitda: number;
    netProfit: number;
}

export interface Assumptions {
    name: string;
    currentRevenue: number;
    revenueGrowthRate: number;
    ebitdaMargin: number;
    taxRate: number;
    capexAsPercentageOfRevenue: number;
    nwcAsPercentageOfRevenue: number;
    discountRate: number;
    perpetualGrowthRate: number;
    sharesOutstanding: number;
    netDebt: number;
    projectionYears: number;
    summary: string;
    industry: string;
    category: string;
    logo: string;
    shareholding: Shareholding;
    freeFloatShares: number;
    listingYear: number;
    businessModel: {
        revenueStreams: string[];
        keyClients: string[];
        competitiveAdvantages: string[];
        distributionChannels: string[];
    };
    marketCap: number;
    authorizedCapital: number;
    paidUpCapital: number;
    historicalData: HistoricalData[];
    keyMetrics: KeyMetrics;
    investmentThesis: InvestmentThesis;
    comparables: Comparable[];
}

export interface SensitivityAnalysis {
    discountRates: number[];
    growthRates: number[];
    results: (number | null)[][];
}

export interface ValuationResult {
    estimatedStockPrice: number;
    enterpriseValue: number;
    equityValue: number;
    ratios: {
        peRatio: number | null;
        psRatio: number;
        debtToEquity: number;
    };
    projections: ProjectedYear[];
    sensitivityAnalysis: SensitivityAnalysis;
}

export interface ProjectedYear {
    year: number;
    revenue: number;
    fcff: number;
}

export type Stock = {
    ticker: string;
    name: string;
    logo: string;
};
