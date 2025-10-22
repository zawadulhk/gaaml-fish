import React from 'react';
import type { Assumptions } from '../types';
import { SliderInput } from './SliderInput';
import { CalculatorIcon } from './IconComponents';

interface InputCardProps {
    assumptions: Assumptions;
    setAssumptions: React.Dispatch<React.SetStateAction<Assumptions>>;
    onCalculate: () => void;
    isLoading: boolean;
    selectedStock: string;
    onStockChange: (ticker: string) => void;
    stockList: string[];
}

export const InputCard: React.FC<InputCardProps> = ({ assumptions, setAssumptions, onCalculate, isLoading, selectedStock, onStockChange, stockList }) => {
    const handleAssumptionChange = <K extends keyof Assumptions,>(key: K, value: Assumptions[K]) => {
        setAssumptions(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="bg-slate-900 rounded-xl shadow-lg p-6 border border-slate-800 sticky top-24">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-4">Valuation Inputs</h2>
            
            <div className="space-y-4">
                <div>
                    <label htmlFor="stock-picker" className="block text-base font-medium text-slate-400 mb-1.5">Select Stock</label>
                    <select
                        id="stock-picker"
                        value={selectedStock}
                        onChange={(e) => onStockChange(e.target.value)}
                        className="w-full bg-slate-800 border border-slate-700 text-white rounded-md p-3 text-base focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
                    >
                        {stockList.map(ticker => (
                            <option key={ticker} value={ticker}>{ticker}</option>
                        ))}
                    </select>
                </div>

                <div className="pt-4">
                     <h3 className="text-xl font-semibold text-white mb-3">Primary Assumptions</h3>
                    <SliderInput label="Current Revenue (M BDT)" value={assumptions.currentRevenue} onChange={(val) => handleAssumptionChange('currentRevenue', val)} step={100} />
                    <SliderInput label="Revenue Growth Rate (%)" value={assumptions.revenueGrowthRate} onChange={(val) => handleAssumptionChange('revenueGrowthRate', val)} step={0.5} />
                    <SliderInput label="EBITDA Margin (%)" value={assumptions.ebitdaMargin} onChange={(val) => handleAssumptionChange('ebitdaMargin', val)} step={0.5} />
                    <SliderInput label="Discount Rate / WACC (%)" value={assumptions.discountRate} onChange={(val) => handleAssumptionChange('discountRate', val)} step={0.1} />
                    <SliderInput label="Perpetual Growth Rate (%)" value={assumptions.perpetualGrowthRate} onChange={(val) => handleAssumptionChange('perpetualGrowthRate', val)} step={0.1} />
                </div>
                
                 <div className="pt-4 mt-4 border-t border-slate-700">
                    <h3 className="text-xl font-semibold text-white mb-3">Other Key Assumptions</h3>
                    <SliderInput label="Tax Rate (%)" value={assumptions.taxRate} onChange={(val) => handleAssumptionChange('taxRate', val)} step={0.5} />
                    <SliderInput label="CapEx as % of Revenue" value={assumptions.capexAsPercentageOfRevenue} onChange={(val) => handleAssumptionChange('capexAsPercentageOfRevenue', val)} step={0.5} />
                    <SliderInput label="NWC as % of Revenue" value={assumptions.nwcAsPercentageOfRevenue} onChange={(val) => handleAssumptionChange('nwcAsPercentageOfRevenue', val)} step={0.5} />
                    <SliderInput label="Projection Years" value={assumptions.projectionYears} onChange={(val) => handleAssumptionChange('projectionYears', val)} step={1} />
                    <SliderInput label="Shares Outstanding (M)" value={assumptions.sharesOutstanding} onChange={(val) => handleAssumptionChange('sharesOutstanding', val)} step={10} />
                    <SliderInput label="Net Debt (M BDT)" value={assumptions.netDebt} onChange={(val) => handleAssumptionChange('netDebt', val)} step={100} />
                </div>
            </div>

            <button
                onClick={onCalculate}
                disabled={isLoading}
                className="mt-8 w-full flex items-center justify-center bg-sky-600 hover:bg-sky-500 text-white font-bold text-lg py-3.5 px-4 rounded-lg transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:bg-slate-700 disabled:cursor-not-allowed"
            >
                {isLoading ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
    );
};