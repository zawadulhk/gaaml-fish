

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { Assumptions, HistoricalData, InvestmentThesis, KeyMetrics } from '../types';
import { CheckCircleIcon, XCircleIcon, TrendingUpIcon, ScaleIcon, ReceiptPercentIcon } from './IconComponents';
import { GrowthAnalysisCard } from './GrowthAnalysisCard';

interface FinancialReportProps {
    stock: Assumptions;
    theme: 'light' | 'dark';
}

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg">
                <p className="font-semibold text-lg mb-1">{`Year: ${label}`}</p>
                {payload.map((pld: any) => (
                     <p key={pld.dataKey} style={{ color: pld.color || pld.stroke }}>
                        {`${pld.name}: ${(pld.value).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}${pld.dataKey !== 'eps' ? 'M' : ''}`}
                     </p>
                ))}
            </div>
        );
    }
    return null;
};

const InvestmentThesisCard: React.FC<{ thesis: InvestmentThesis }> = ({ thesis }) => (
    <div>
        <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Investment Thesis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-slate-100 dark:bg-slate-800/50 p-5 rounded-lg">
                <h4 className="font-semibold text-green-600 dark:text-green-400 text-2xl mb-3 flex items-center">
                   <CheckCircleIcon className="h-6 w-6 mr-2 flex-shrink-0" />
                   <span>Positives / Catalysts</span>
                </h4>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300 text-lg">
                    {thesis.positives.map((item, i) => (
                        <li key={i} className="flex items-start">
                           <span className="text-green-500 dark:text-green-400 mr-2 mt-1">&#8226;</span> 
                           <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800/50 p-5 rounded-lg">
                <h4 className="font-semibold text-red-600 dark:text-red-400 text-2xl mb-3 flex items-center">
                   <XCircleIcon className="h-6 w-6 mr-2 flex-shrink-0" />
                   <span>Concerns / Risks</span>
                </h4>
                 <ul className="space-y-3 text-slate-700 dark:text-slate-300 text-lg">
                    {thesis.concerns.map((item, i) => (
                        <li key={i} className="flex items-start">
                           <span className="text-red-500 dark:text-red-400 mr-2 mt-1">&#8226;</span>
                           <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

const FinancialsTable: React.FC<{ title: string; data: HistoricalData[]; rows: { key: string; label: string; formatter: (val: number) => string; dataKey: (item: HistoricalData) => number, isSubItem?: boolean, isBold?: boolean }[] }> = ({ title, data, rows }) => (
    <div className="mb-10">
        <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{title}</h4>
        <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
            <table className="w-full text-lg text-left text-slate-700 dark:text-slate-300">
                <thead className="text-base text-slate-500 dark:text-slate-400 uppercase bg-slate-100 dark:bg-slate-800/70">
                    <tr>
                        <th scope="col" className="px-6 py-4">Particulars</th>
                        {data.map(item => (
                            <th key={item.year} scope="col" className="px-6 py-4 text-right">{item.year}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map(row => (
                        <tr key={row.key} className="border-t border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-200">
                            <td className={`px-6 py-4 font-medium text-slate-800 dark:text-slate-200 whitespace-nowrap ${row.isSubItem ? 'pl-10' : ''} ${row.isBold ? 'dark:text-white' : ''}`}>{row.label}</td>
                            {data.map(item => (
                                <td key={item.year} className={`px-6 py-4 text-right font-mono ${row.isBold ? 'text-slate-900 dark:text-white font-semibold' : ''}`}>{row.formatter(row.dataKey(item))}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);


const HistoricalFinancialsCard: React.FC<{ data: HistoricalData[]; theme: 'light' | 'dark' }> = ({ data, theme }) => {
    const formatM = (val: number) => `${val.toLocaleString()}`;
    const formatEps = (val: number) => val.toFixed(2);
    
    const incomeStatementRows = [
        { key: 'revenue', label: 'Revenue', formatter: formatM, dataKey: (item: HistoricalData) => item.revenue },
        { key: 'grossProfit', label: 'Gross Profit', formatter: formatM, dataKey: (item: HistoricalData) => item.grossProfit, isBold: true },
        { key: 'ebitda', label: 'EBITDA', formatter: formatM, dataKey: (item: HistoricalData) => item.ebitda },
        { key: 'operatingProfit', label: 'Operating Profit (EBIT)', formatter: formatM, dataKey: (item: HistoricalData) => item.operatingProfit, isBold: true },
        { key: 'interestExpense', label: 'Interest Expense', formatter: formatM, dataKey: (item: HistoricalData) => item.interestExpense, isSubItem: true },
        { key: 'profitBeforeTax', label: 'Profit Before Tax', formatter: formatM, dataKey: (item: HistoricalData) => item.profitBeforeTax, isBold: true },
        { key: 'netProfit', label: 'Net Profit', formatter: formatM, dataKey: (item: HistoricalData) => item.netProfit, isBold: true },
        { key: 'eps', label: 'EPS (BDT)', formatter: formatEps, dataKey: (item: HistoricalData) => item.eps },
    ];

    const balanceSheetRows = [
        { key: 'cashAndEquivalents', label: 'Cash & Cash Equivalents', formatter: formatM, dataKey: (item: HistoricalData) => item.balanceSheet.cashAndEquivalents, isSubItem: true },
        { key: 'accountsReceivable', label: 'Accounts Receivable', formatter: formatM, dataKey: (item: HistoricalData) => item.balanceSheet.accountsReceivable, isSubItem: true },
        { key: 'inventory', label: 'Inventory', formatter: formatM, dataKey: (item: HistoricalData) => item.balanceSheet.inventory, isSubItem: true },
        { key: 'currentAssets', label: 'Total Current Assets', formatter: formatM, dataKey: (item: HistoricalData) => item.balanceSheet.currentAssets, isBold: true },
        { key: 'netPPE', label: 'Net Property, Plant & Equipment', formatter: formatM, dataKey: (item: HistoricalData) => item.balanceSheet.netPPE, isSubItem: true },
        { key: 'intangibleAssets', label: 'Intangible Assets & Goodwill', formatter: formatM, dataKey: (item: HistoricalData) => item.balanceSheet.intangibleAssets, isSubItem: true },
        { key: 'totalAssets', label: 'Total Assets', formatter: formatM, dataKey: (item: HistoricalData) => item.balanceSheet.totalAssets, isBold: true },
        { key: 'accountsPayable', label: 'Accounts Payable', formatter: formatM, dataKey: (item: HistoricalData) => item.balanceSheet.accountsPayable, isSubItem: true },
        { key: 'shortTermDebt', label: 'Short-term Debt', formatter: formatM, dataKey: (item: HistoricalData) => item.balanceSheet.shortTermDebt, isSubItem: true },
        { key: 'currentLiabilities', label: 'Total Current Liabilities', formatter: formatM, dataKey: (item: HistoricalData) => item.balanceSheet.currentLiabilities, isBold: true },
        { key: 'longTermDebt', label: 'Long-term Debt', formatter: formatM, dataKey: (item: HistoricalData) => item.balanceSheet.longTermDebt, isSubItem: true },
        { key: 'totalLiabilities', label: 'Total Liabilities', formatter: formatM, dataKey: (item: HistoricalData) => item.balanceSheet.totalLiabilities, isBold: true },
        { key: 'totalEquity', label: "Shareholders' Equity", formatter: formatM, dataKey: (item: HistoricalData) => item.balanceSheet.totalEquity, isBold: true },
        { key: 'totalLiabilitiesAndEquity', label: "Total Liabilities & Equity", formatter: formatM, dataKey: (item: HistoricalData) => item.balanceSheet.totalLiabilities + item.balanceSheet.totalEquity, isBold: true },
    ];
    
    const cashFlowRows = [
        { key: 'netIncome', label: 'Net Income', formatter: formatM, dataKey: (item: HistoricalData) => item.cashFlow.netIncome },
        { key: 'depreciationAndAmortization', label: 'Depreciation & Amortization', formatter: formatM, dataKey: (item: HistoricalData) => item.cashFlow.depreciationAndAmortization, isSubItem: true },
        { key: 'changeInWorkingCapital', label: 'Change in Working Capital', formatter: formatM, dataKey: (item: HistoricalData) => item.cashFlow.changeInWorkingCapital, isSubItem: true },
        { key: 'cfo', label: 'Cash Flow from Operations', formatter: formatM, dataKey: (item: HistoricalData) => item.cashFlow.cfo, isBold: true },
        { key: 'capex', label: 'Capital Expenditures', formatter: formatM, dataKey: (item: HistoricalData) => item.cashFlow.capex },
        { key: 'acquisitions', label: 'Acquisitions', formatter: formatM, dataKey: (item: HistoricalData) => item.cashFlow.acquisitions },
        { key: 'cfi', label: 'Cash Flow from Investing', formatter: formatM, dataKey: (item: HistoricalData) => item.cashFlow.cfi, isBold: true },
        { key: 'debtIssued', label: 'Issuance (Repayment) of Debt', formatter: formatM, dataKey: (item: HistoricalData) => item.cashFlow.debtIssued },
        { key: 'stockIssued', label: 'Issuance (Repurchase) of Stock', formatter: formatM, dataKey: (item: HistoricalData) => item.cashFlow.stockIssued },
        { key: 'dividendsPaid', label: 'Dividends Paid', formatter: formatM, dataKey: (item: HistoricalData) => item.cashFlow.dividendsPaid },
        { key: 'cff', label: 'Cash Flow from Financing', formatter: formatM, dataKey: (item: HistoricalData) => item.cashFlow.cff, isBold: true },
        { key: 'netChangeInCash', label: 'Net Change in Cash', formatter: formatM, dataKey: (item: HistoricalData) => item.cashFlow.netChangeInCash, isBold: true },
    ];

    const tickColor = theme === 'dark' ? '#94a3b8' : '#475569';
    const gridColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
    const legendColor = theme === 'dark' ? '#cbd5e1' : '#334155';
    const revenueColor = theme === 'dark' ? '#0ea5e9' : '#0284c7';
    const profitColor = theme === 'dark' ? '#6366f1' : '#4f46e5';

    return (
        <div>
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Historical Financials</h3>
            <div className="h-80 w-full mb-8">
                <ResponsiveContainer>
                    <AreaChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                        <defs>
                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={revenueColor} stopOpacity={0.7}/>
                                <stop offset="95%" stopColor={revenueColor} stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={profitColor} stopOpacity={0.7}/>
                                <stop offset="95%" stopColor={profitColor} stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                        <XAxis dataKey="year" stroke={tickColor} />
                        <YAxis stroke={tickColor} />
                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(14, 165, 233, 0.5)', strokeWidth: 1.5, fill: 'rgba(14, 165, 233, 0.1)' }}/>
                        <Legend wrapperStyle={{color: legendColor}}/>
                        <Area type="monotone" dataKey="revenue" name="Revenue" stroke={revenueColor} strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" />
                        <Area type="monotone" dataKey="netProfit" name="Net Profit" stroke={profitColor} strokeWidth={2} fillOpacity={1} fill="url(#colorProfit)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            
            <FinancialsTable title="Income Statement" data={data} rows={incomeStatementRows} />
            <FinancialsTable title="Balance Sheet" data={data} rows={balanceSheetRows} />
            <FinancialsTable title="Cash Flow Statement" data={data} rows={cashFlowRows} />

            <p className="text-base text-slate-500 dark:text-slate-500 mt-[-20px] text-center italic">
                All figures in million BDT, unless otherwise stated.
            </p>
            
        </div>
    );
}

const MetricItem: React.FC<{icon: React.ReactNode, label: string, value: string}> = ({icon, label, value}) => (
    <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg flex items-center space-x-4">
        <div className="text-sky-500 dark:text-sky-400">{icon}</div>
        <div>
            <p className="text-lg text-slate-600 dark:text-slate-400">{label}</p>
            <p className="text-3xl font-semibold text-slate-900 dark:text-white">{value}</p>
        </div>
    </div>
);

const KeyMetricsCard: React.FC<{ metrics: KeyMetrics }> = ({ metrics }) => (
    <div>
        <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Key Ratios & Metrics</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <MetricItem icon={<TrendingUpIcon className="h-8 w-8"/>} label="Return on Equity (ROE)" value={`${metrics.roe.toFixed(2)}%`} />
            <MetricItem icon={<TrendingUpIcon className="h-8 w-8"/>} label="Return on Assets (ROA)" value={`${metrics.roa.toFixed(2)}%`} />
            <MetricItem icon={<ScaleIcon className="h-8 w-8"/>} label="Debt to Equity" value={metrics.debtToEquity.toFixed(2)} />
            <MetricItem icon={<ReceiptPercentIcon className="h-8 w-8"/>} label="Dividend Yield" value={`${metrics.dividendYield.toFixed(2)}%`} />
            <MetricItem icon={<ReceiptPercentIcon className="h-8 w-8"/>} label="Dividend Payout Ratio" value={`${metrics.dividendPayout.toFixed(2)}%`} />
            <MetricItem icon={<ScaleIcon className="h-8 w-8"/>} label="Working Capital Ratio" value={metrics.workingCapitalRatio.toFixed(2)} />
        </div>
    </div>
);


export const FinancialReport: React.FC<FinancialReportProps> = ({ stock, theme }) => {
    return (
        <div className="space-y-12">
            <InvestmentThesisCard thesis={stock.investmentThesis} />
            <HistoricalFinancialsCard data={stock.historicalData} theme={theme} />
            <GrowthAnalysisCard data={stock.historicalData} />
            <KeyMetricsCard metrics={stock.keyMetrics} />
        </div>
    );
};