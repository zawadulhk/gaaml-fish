import React from 'react';
import type { ValuationResult, SensitivityAnalysis, Assumptions } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PresentationChartLineIcon, ExclamationTriangleIcon } from './IconComponents';

interface ResultsCardProps {
    results: ValuationResult | null;
    isLoading: boolean;
    error: string | null;
    assumptions: Assumptions;
    theme: 'light' | 'dark';
}

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-BD', {
        style: 'currency',
        currency: 'BDT',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
};

const formatNumber = (value: number) => {
    return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

const CustomTooltip = ({ active, payload, label, theme }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg">
                <p className="font-bold text-lg mb-1">{`Year: ${label}`}</p>
                <p className="text-sky-500 dark:text-sky-400">{`Revenue: ${formatCurrency(payload[0].value)}M`}</p>
                <p className="text-indigo-500 dark:text-indigo-400">{`FCFF: ${formatCurrency(payload[1].value)}M`}</p>
            </div>
        );
    }
    return null;
};

const SensitivityAnalysisTable: React.FC<{ analysis: SensitivityAnalysis; baseDr: number; basePgr: number; }> = ({ analysis, baseDr, basePgr }) => {
    const validPrices = analysis.results.flat().filter((p): p is number => p !== null && isFinite(p));
    const minPrice = validPrices.length > 0 ? Math.min(...validPrices) : 0;
    const maxPrice = validPrices.length > 0 ? Math.max(...validPrices) : 0;

    const getColor = (price: number | null) => {
        if (price === null || !isFinite(price)) {
            return 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-500';
        }
        if (maxPrice === minPrice) {
            return 'bg-green-100 dark:bg-green-800/50';
        }
        const ratio = (price - minPrice) / (maxPrice - minPrice);
        const hue = ratio * 120; // 0 (red) to 120 (green)
        // Adjust saturation and lightness for both light and dark modes
        const lightHsl = `hsl(${hue}, 70%, 85%)`;
        const darkHsl = `hsl(${hue}, 50%, 30%)`;
        
        // This is a trick to return CSS variables that can be used in the style attribute
        return { '--light-bg': lightHsl, '--dark-bg': darkHsl };
    };

    return (
        <div className="mt-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 border-t border-slate-200 dark:border-slate-700 pt-8">Sensitivity Analysis</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 text-center">Estimated Stock Price (BDT) at different Discount Rates and Perpetual Growth Rates.</p>
            <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
                <table className="w-full text-center text-lg border-collapse">
                    <thead className="bg-slate-100 dark:bg-slate-800">
                        <tr>
                            <th scope="col" className="p-4 font-semibold sticky left-0 bg-slate-100 dark:bg-slate-800 z-20 border-r border-b border-slate-200 dark:border-slate-700">
                                <div className="flex flex-col text-left text-sm text-slate-500 dark:text-slate-400">
                                    <span>Discount Rate ↓</span>
                                    <span className="text-right -mt-1">Perp. Growth →</span>
                                </div>
                            </th>
                            {analysis.growthRates.map(pgr => (
                                <th key={pgr} scope="col" className="p-4 font-semibold whitespace-nowrap border-b border-slate-200 dark:border-slate-700">
                                    {pgr.toFixed(2)}%
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {analysis.discountRates.map((dr, rowIndex) => (
                            <tr key={dr} className="odd:bg-white/50 dark:odd:bg-slate-900/50 even:bg-slate-50/30 dark:even:bg-slate-800/30">
                                <th scope="row" className="p-4 font-semibold whitespace-nowrap sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-slate-200 dark:border-slate-700">
                                    {dr.toFixed(2)}%
                                </th>
                                {analysis.growthRates.map((pgr, colIndex) => {
                                    const price = analysis.results[rowIndex][colIndex];
                                    const isCenter = dr.toFixed(2) === baseDr.toFixed(2) && pgr.toFixed(2) === basePgr.toFixed(2);
                                    const bgColor = getColor(price);
                                    
                                    return (
                                        <td
                                            key={pgr}
                                            className={`p-4 font-mono transition-colors duration-200 relative text-slate-800 dark:text-white ${isCenter ? 'ring-2 ring-sky-500 dark:ring-sky-400 z-10' : ''}`}
                                            style={{ 
                                                backgroundColor: typeof bgColor === 'string' ? bgColor : 'var(--light-bg)',
                                            }}
                                        >
                                          <div className="dark:hidden" style={{backgroundColor: typeof bgColor === 'string' ? bgColor : 'var(--light-bg)'}} />
                                          <div className="hidden dark:block" style={{backgroundColor: typeof bgColor === 'string' ? bgColor : 'var(--dark-bg)'}}/>
                                          <span className={`${(price === null || !isFinite(price)) ? 'text-slate-500 dark:text-slate-500' : ''}`}>
                                            {price !== null ? formatNumber(price) : 'N/A'}
                                          </span>
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export const ResultsCard: React.FC<ResultsCardProps> = ({ results, isLoading, error, assumptions, theme }) => {
    
    const renderContent = () => {
        if (isLoading) {
            return <div className="text-center py-20 text-slate-500 dark:text-slate-400 animate-pulse text-xl">Calculating valuation...</div>;
        }

        if (error) {
            return (
                <div className="text-center py-20 text-red-600 dark:text-red-400 flex flex-col items-center">
                    <ExclamationTriangleIcon className="h-12 w-12 mb-4" />
                    <h3 className="text-3xl font-semibold">Calculation Error</h3>
                    <p className="mt-2 text-xl">{error}</p>
                </div>
            );
        }
        
        if (!results) {
            return (
                <div className="text-center py-20 text-slate-500 dark:text-slate-400 flex flex-col items-center">
                    <PresentationChartLineIcon className="h-12 w-12 mb-4 text-slate-400 dark:text-slate-600"/>
                    <h3 className="text-3xl font-semibold text-slate-700 dark:text-slate-300">Valuation Results</h3>
                    <p className="mt-2 text-xl">Adjust assumptions and click "Calculate Valuation" to see results.</p>
                </div>
            );
        }

        const tickColor = theme === 'dark' ? '#94a3b8' : '#475569';
        const gridColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
        const legendColor = theme === 'dark' ? '#cbd5e1' : '#334155';
        
        return (
            <>
                <div className="text-center mb-8 border-b border-slate-200 dark:border-slate-800 pb-8">
                    <h3 className="text-xl font-medium text-slate-600 dark:text-slate-400">Estimated Fair Value per Share</h3>
                    <p className="text-7xl font-extrabold text-sky-600 dark:text-sky-400 my-2 tracking-tight">
                        {formatCurrency(results.estimatedStockPrice)}
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10 text-center">
                    <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg">
                        <h4 className="text-lg text-slate-600 dark:text-slate-400">P/E Ratio</h4>
                        <p className="text-3xl font-semibold text-slate-900 dark:text-white">{results.ratios.peRatio !== null ? formatNumber(results.ratios.peRatio) : 'N/A'}</p>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg">
                        <h4 className="text-lg text-slate-600 dark:text-slate-400">P/S Ratio</h4>
                        <p className="text-3xl font-semibold text-slate-900 dark:text-white">{formatNumber(results.ratios.psRatio)}</p>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg">
                        <h4 className="text-lg text-slate-600 dark:text-slate-400">Debt/Equity</h4>
                        <p className="text-3xl font-semibold text-slate-900 dark:text-white">{formatNumber(results.ratios.debtToEquity)}</p>
                    </div>
                     <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg">
                        <h4 className="text-lg text-slate-600 dark:text-slate-400">Enterprise Value</h4>
                        <p className="text-3xl font-semibold text-slate-900 dark:text-white">{formatCurrency(results.enterpriseValue)}M</p>
                    </div>
                     <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg col-span-2 sm:col-span-1">
                        <h4 className="text-lg text-slate-600 dark:text-slate-400">Equity Value</h4>
                        <p className="text-3xl font-semibold text-slate-900 dark:text-white">{formatCurrency(results.equityValue)}M</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Financial Projections (in Millions, BDT)</h3>
                    <div className="h-80 w-full">
                        <ResponsiveContainer>
                            <BarChart data={results.projections} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                                <XAxis dataKey="year" stroke={tickColor} />
                                <YAxis stroke={tickColor} tickFormatter={(value) => `৳${value}`} />
                                <Tooltip content={<CustomTooltip theme={theme} />} cursor={{ fill: 'rgba(14, 165, 233, 0.1)' }}/>
                                <Legend wrapperStyle={{color: legendColor}}/>
                                <Bar dataKey="revenue" fill={theme === 'dark' ? '#0ea5e9' : '#0284c7'} name="Revenue"/>
                                <Bar dataKey="fcff" fill={theme === 'dark' ? '#6366f1' : '#4f46e5'} name="Free Cash Flow"/>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                {results.sensitivityAnalysis && (
                    <SensitivityAnalysisTable 
                        analysis={results.sensitivityAnalysis} 
                        baseDr={assumptions.discountRate}
                        basePgr={assumptions.perpetualGrowthRate}
                    />
                )}
            </>
        );
    };

    return (
        <div className="bg-transparent min-h-[500px]">
            {renderContent()}
        </div>
    );
};