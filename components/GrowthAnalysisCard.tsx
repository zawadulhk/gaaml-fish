import React from 'react';
import type { HistoricalData } from '../types';
import { TrendingUpIcon } from './IconComponents';

const calculateCAGR = (beginValue: number, endValue: number, periods: number): number | null => {
    if (beginValue <= 0 || endValue <= 0 || periods <= 0) {
        return null; 
    }
    return (Math.pow(endValue / beginValue, 1 / periods) - 1) * 100;
};

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
    <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg flex items-center space-x-4">
        <div className="text-sky-500 dark:text-sky-400">{icon}</div>
        <div>
            <p className="text-lg text-slate-600 dark:text-slate-400">{label}</p>
            <p className="text-3xl font-semibold text-slate-900 dark:text-white">{value}</p>
        </div>
    </div>
);

export const GrowthAnalysisCard: React.FC<{ data: HistoricalData[] }> = ({ data }) => {
    if (data.length < 2) {
        return null;
    }

    const firstYear = data[0];
    const lastYear = data[data.length - 1];
    const years = data.length - 1;

    const revenueCagr = calculateCAGR(firstYear.revenue, lastYear.revenue, years);
    const ebitdaCagr = calculateCAGR(firstYear.ebitda, lastYear.ebitda, years);
    const netProfitCagr = calculateCAGR(firstYear.netProfit, lastYear.netProfit, years);
    const epsCagr = calculateCAGR(firstYear.eps, lastYear.eps, years);

    const periodText = `${years} Year`;

    return (
        <div>
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Compound Annual Growth Rate</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <StatCard 
                    icon={<TrendingUpIcon className="h-8 w-8"/>} 
                    label={`Revenue CAGR (${periodText})`}
                    value={revenueCagr !== null ? `${revenueCagr.toFixed(2)}%` : 'N/A'} 
                />
                 <StatCard 
                    icon={<TrendingUpIcon className="h-8 w-8"/>} 
                    label={`EBITDA CAGR (${periodText})`}
                    value={ebitdaCagr !== null ? `${ebitdaCagr.toFixed(2)}%` : 'N/A'} 
                />
                <StatCard 
                    icon={<TrendingUpIcon className="h-8 w-8"/>} 
                    label={`Net Profit CAGR (${periodText})`}
                    value={netProfitCagr !== null ? `${netProfitCagr.toFixed(2)}%` : 'N/A'} 
                />
                <StatCard 
                    icon={<TrendingUpIcon className="h-8 w-8"/>} 
                    label={`EPS CAGR (${periodText})`}
                    value={epsCagr !== null ? `${epsCagr.toFixed(2)}%` : 'N/A'} 
                />
            </div>
        </div>
    );
};