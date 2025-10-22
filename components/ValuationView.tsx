import React from 'react';
import type { Assumptions, ValuationResult } from '../types';
import { ResultsCard } from './ResultsCard';
import { SliderInput } from './SliderInput';
import { CalculatorIcon } from './IconComponents';
import { ComparableAnalysisCard } from './ComparableAnalysisCard';

interface ValuationViewProps {
    stock: Assumptions;
    results: ValuationResult | null;
    isLoading: boolean;
    error: string | null;
    setAssumptions: React.Dispatch<React.SetStateAction<Assumptions>>;
    onCalculate: () => void;
    theme: 'light' | 'dark';
}

const calculateCAGR = (beginValue: number, endValue: number, periods: number): number | null => {
    if (beginValue <= 0 || endValue <= 0 || periods <= 0) {
        return null; 
    }
    return (Math.pow(endValue / beginValue, 1 / periods) - 1) * 100;
};


export const ValuationView: React.FC<ValuationViewProps> = (props) => {
    const { stock, results, isLoading, error, setAssumptions, onCalculate, theme } = props;

    const handleAssumptionChange = <K extends keyof Assumptions,>(key: K, value: Assumptions[K]) => {
        setAssumptions(prev => ({ ...prev, [key]: value }));
    };
    
    const { historicalData } = stock;
    let revenueCagr: number | null = null;
    let cagrPeriod = 0;
    if (historicalData.length >= 2) {
        const firstYear = historicalData[0];
        const lastYear = historicalData[historicalData.length - 1];
        cagrPeriod = historicalData.length - 1;
        revenueCagr = calculateCAGR(firstYear.revenue, lastYear.revenue, cagrPeriod);
    }
    
    const handleUseCagr = () => {
        if (revenueCagr !== null) {
            setAssumptions(prev => ({ ...prev, revenueGrowthRate: parseFloat(revenueCagr.toFixed(2)) }));
        }
    };

    return (
        <div className="space-y-12">
            <ComparableAnalysisCard assumptions={stock} />
            
            <div>
                 <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">
                    Discounted Cash Flow (DCF) Analysis
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6 items-start">
                    <div className="lg:col-span-1 bg-white dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">DCF Inputs</h3>
                        <div className="space-y-4">
                             <div>
                                <h4 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Primary Assumptions</h4>
                                <SliderInput label="Current Revenue (M BDT)" value={stock.currentRevenue} onChange={(val) => handleAssumptionChange('currentRevenue', val)} step={100} />
                                
                                <div className="mb-4">
                                    <div className="flex justify-between items-center mb-1.5">
                                        <label htmlFor="revenueGrowthRate" className="block text-lg font-medium text-slate-600 dark:text-slate-400">Revenue Growth Rate (%)</label>
                                        {revenueCagr !== null && (
                                            <button 
                                                onClick={handleUseCagr}
                                                className="text-sm font-semibold text-sky-600 dark:text-sky-400 hover:underline focus:outline-none focus:ring-2 focus:ring-sky-500 rounded px-1 py-0.5"
                                                title={`Based on revenue growth from ${historicalData[0].year} to ${historicalData[historicalData.length - 1].year}`}
                                            >
                                                Use {cagrPeriod}-Yr CAGR: {revenueCagr.toFixed(2)}%
                                            </button>
                                        )}
                                    </div>
                                    <input
                                        id="revenueGrowthRate"
                                        type="number"
                                        step={0.5}
                                        value={stock.revenueGrowthRate}
                                        onChange={(e) => handleAssumptionChange('revenueGrowthRate', parseFloat(e.target.value) || 0)}
                                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-md p-3 text-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
                                    />
                                </div>
                                
                                <SliderInput label="EBITDA Margin (%)" value={stock.ebitdaMargin} onChange={(val) => handleAssumptionChange('ebitdaMargin', val)} step={0.5} />
                                <SliderInput label="Discount Rate / WACC (%)" value={stock.discountRate} onChange={(val) => handleAssumptionChange('discountRate', val)} step={0.1} />
                                <SliderInput label="Perpetual Growth Rate (%)" value={stock.perpetualGrowthRate} onChange={(val) => handleAssumptionChange('perpetualGrowthRate', val)} step={0.1} />
                            </div>
                            
                            <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-700">
                                <h4 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Other Key Assumptions</h4>
                                <SliderInput label="Tax Rate (%)" value={stock.taxRate} onChange={(val) => handleAssumptionChange('taxRate', val)} step={0.5} />
                                <SliderInput label="CapEx as % of Revenue" value={stock.capexAsPercentageOfRevenue} onChange={(val) => handleAssumptionChange('capexAsPercentageOfRevenue', val)} step={0.5} />
                                <SliderInput label="NWC as % of Revenue" value={stock.nwcAsPercentageOfRevenue} onChange={(val) => handleAssumptionChange('nwcAsPercentageOfRevenue', val)} step={0.5} />
                                <SliderInput label="Projection Years" value={stock.projectionYears} onChange={(val) => handleAssumptionChange('projectionYears', val)} step={1} />
                                <SliderInput label="Shares Outstanding (M)" value={stock.sharesOutstanding} onChange={(val) => handleAssumptionChange('sharesOutstanding', val)} step={10} />
                                <SliderInput label="Net Debt (M BDT)" value={stock.netDebt} onChange={(val) => handleAssumptionChange('netDebt', val)} step={100} />
                            </div>
                        </div>

                        <button
                            onClick={onCalculate}
                            disabled={isLoading}
                            className="mt-8 w-full flex items-center justify-center bg-sky-600 hover:bg-sky-700 dark:bg-sky-600 dark:hover:bg-sky-500 text-white font-bold text-xl py-3.5 px-4 rounded-lg transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 disabled:bg-slate-400 dark:disabled:bg-slate-700 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Calculating...
                                </>
                            ) : (
                                <>
                                <CalculatorIcon className="h-6 w-6 mr-2" />
                                Calculate Valuation
                                </>
                            )}
                        </button>
                    </div>
                    <div className="lg:col-span-2">
                         <ResultsCard results={results} isLoading={isLoading} error={error} assumptions={stock} theme={theme} />
                    </div>
                </div>
            </div>
        </div>
    );
};