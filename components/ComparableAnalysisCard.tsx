import React from 'react';
import type { Assumptions } from '../types';
import { ChartPieIcon } from './IconComponents';

interface ComparableAnalysisCardProps {
    assumptions: Assumptions;
}

const formatNumber = (value: number | null, decimals = 2) => {
    if (value === null || !isFinite(value)) return 'N/A';
    return value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
};
const formatCurrency = (value: number | null) => {
    if (value === null || !isFinite(value)) return 'N/A';
    return `৳${formatNumber(value, 0)}M`;
}

const formatBdtPerShare = (value: number | null) => {
    if (value === null || !isFinite(value)) return 'N/A';
    return new Intl.NumberFormat('en-BD', {
        style: 'currency',
        currency: 'BDT',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
};

const calculateMedian = (arr: number[]): number | null => {
    if (arr.length === 0) return null;
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    }
    return sorted[mid];
};

export const ComparableAnalysisCard: React.FC<ComparableAnalysisCardProps> = ({ assumptions }) => {
    const { comparables, marketCap, netDebt, historicalData, sharesOutstanding } = assumptions;

    if (!comparables || comparables.length === 0) {
        return (
            <div>
                 <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <ChartPieIcon className="h-7 w-7 mr-3 text-sky-500 dark:text-sky-400"/>
                    Comparable Company Analysis
                </h2>
                <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-lg text-center text-slate-500 dark:text-slate-400">
                    No comparable company data available for this stock.
                </div>
            </div>
        );
    }
    
    const lastFiscalYear = historicalData[historicalData.length - 1];
    const target = {
        ticker: "Target",
        marketCap: marketCap,
        revenue: lastFiscalYear.revenue,
        ebitda: lastFiscalYear.ebitda,
        netProfit: lastFiscalYear.netProfit,
    };
    
    const allCompanies = [target, ...comparables];
    
    const dataWithMetrics = allCompanies.map(comp => {
        const ev = comp.marketCap + netDebt; // Note: using target's net debt for all for simplicity, can be improved
        const pe = comp.netProfit > 0 ? comp.marketCap / comp.netProfit : null;
        const ps = comp.revenue > 0 ? comp.marketCap / comp.revenue : null;
        const evEbitda = comp.ebitda > 0 ? ev / comp.ebitda : null;
        return { ...comp, ev, pe, ps, evEbitda };
    });

    const validPEs = comparables.map(c => c.netProfit > 0 ? c.marketCap / c.netProfit : null).filter((v): v is number => v !== null);
    const validPSs = comparables.map(c => c.revenue > 0 ? c.marketCap / c.revenue : null).filter((v): v is number => v !== null);
    const validEvEbitdas = comparables.map(c => c.ebitda > 0 ? (c.marketCap + netDebt) / c.ebitda : null).filter((v): v is number => v !== null);

    const medianPE = calculateMedian(validPEs);
    const medianPS = calculateMedian(validPSs);
    const medianEvEbitda = calculateMedian(validEvEbitdas);
    
    const impliedValuePE = medianPE ? target.netProfit * medianPE : null;
    const impliedValuePS = medianPS ? target.revenue * medianPS : null;
    const impliedValueEvEbitda = medianEvEbitda ? (target.ebitda * medianEvEbitda) - netDebt : null;

    const impliedPricePE = impliedValuePE !== null && sharesOutstanding > 0 ? impliedValuePE / sharesOutstanding : null;
    const impliedPricePS = impliedValuePS !== null && sharesOutstanding > 0 ? impliedValuePS / sharesOutstanding : null;
    const impliedPriceEvEbitda = impliedValueEvEbitda !== null && sharesOutstanding > 0 ? impliedValueEvEbitda / sharesOutstanding : null;


    return (
        <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <ChartPieIcon className="h-7 w-7 mr-3 text-sky-500 dark:text-sky-400"/>
                Comparable Company Analysis (Comps)
            </h2>

             <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800 mb-8">
                <table className="w-full text-lg text-left text-slate-700 dark:text-slate-300">
                    <thead className="text-base text-slate-500 dark:text-slate-400 uppercase bg-slate-100 dark:bg-slate-800/70">
                        <tr>
                            <th scope="col" className="px-6 py-4">Company</th>
                            <th scope="col" className="px-6 py-4 text-right">Market Cap (M)</th>
                            <th scope="col" className="px-6 py-4 text-right">EV (M)</th>
                            <th scope="col" className="px-6 py-4 text-right">Revenue (M)</th>
                            <th scope="col" className="px-6 py-4 text-right">EBITDA (M)</th>
                            <th scope="col" className="px-6 py-4 text-right">Net Profit (M)</th>
                            <th scope="col" className="px-6 py-4 text-right">P/E</th>
                            <th scope="col" className="px-6 py-4 text-right">P/S</th>
                            <th scope="col" className="px-6 py-4 text-right">EV/EBITDA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataWithMetrics.map((item, index) => (
                             <tr key={item.ticker} className={`border-t border-slate-200 dark:border-slate-800 transition-colors duration-200 ${index === 0 ? 'bg-sky-50 dark:bg-sky-900/40 font-bold' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
                                <td className="px-6 py-4 text-slate-900 dark:text-white whitespace-nowrap">{item.ticker}</td>
                                <td className="px-6 py-4 text-right">{formatNumber(item.marketCap, 0)}</td>
                                <td className="px-6 py-4 text-right">{formatNumber(item.ev, 0)}</td>
                                <td className="px-6 py-4 text-right">{formatNumber(item.revenue, 0)}</td>
                                <td className="px-6 py-4 text-right">{formatNumber(item.ebitda, 0)}</td>
                                <td className="px-6 py-4 text-right">{formatNumber(item.netProfit, 0)}</td>
                                <td className="px-6 py-4 text-right font-mono">{formatNumber(item.pe)}</td>
                                <td className="px-6 py-4 text-right font-mono">{formatNumber(item.ps)}</td>
                                <td className="px-6 py-4 text-right font-mono">{formatNumber(item.evEbitda)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="bg-slate-100 dark:bg-slate-800/50 p-5 rounded-lg text-center">
                    <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-300">Implied Share Price (P/E)</h4>
                    <p className="text-base text-slate-600 dark:text-slate-400 mb-2">(Peer Median: {formatNumber(medianPE)}x)</p>
                    <p className="text-5xl font-extrabold text-sky-600 dark:text-sky-400 tracking-tight my-2">{formatBdtPerShare(impliedPricePE)}</p>
                    <p className="text-base text-slate-500 dark:text-slate-500 mt-2">
                        Total Implied Equity: {formatCurrency(impliedValuePE)}
                    </p>
                 </div>
                 <div className="bg-slate-100 dark:bg-slate-800/50 p-5 rounded-lg text-center">
                    <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-300">Implied Share Price (P/S)</h4>
                    <p className="text-base text-slate-600 dark:text-slate-400 mb-2">(Peer Median: {formatNumber(medianPS)}x)</p>
                    <p className="text-5xl font-extrabold text-sky-600 dark:text-sky-400 tracking-tight my-2">{formatBdtPerShare(impliedPricePS)}</p>
                    <p className="text-base text-slate-500 dark:text-slate-500 mt-2">
                        Total Implied Equity: {formatCurrency(impliedValuePS)}
                    </p>
                 </div>
                 <div className="bg-slate-100 dark:bg-slate-800/50 p-5 rounded-lg text-center">
                    <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-300">Implied Share Price (EV/EBITDA)</h4>
                    <p className="text-base text-slate-600 dark:text-slate-400 mb-2">(Peer Median: {formatNumber(medianEvEbitda)}x)</p>
                    <p className="text-5xl font-extrabold text-sky-600 dark:text-sky-400 tracking-tight my-2">{formatBdtPerShare(impliedPriceEvEbitda)}</p>
                    <p className="text-base text-slate-500 dark:text-slate-500 mt-2">
                        Total Implied Equity: {formatCurrency(impliedValueEvEbitda)}
                    </p>
                 </div>
            </div>

        </div>
    );
};