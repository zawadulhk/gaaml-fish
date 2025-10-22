import React, { useState } from 'react';
import type { Assumptions, ValuationResult } from '../types';
import { StockDetailsCard } from './StockDetailsCard';
import { FinancialReport } from './FinancialReport';
import { ValuationView } from './ValuationView';

interface TabbedDisplayProps {
    stock: Assumptions;
    ticker: string;
    results: ValuationResult | null;
    isLoading: boolean;
    error: string | null;
    setAssumptions: React.Dispatch<React.SetStateAction<Assumptions>>;
    onCalculate: () => void;
    theme: 'light' | 'dark';
}

type Tab = 'profile' | 'analysis' | 'valuation';

export const TabbedDisplay: React.FC<TabbedDisplayProps> = (props) => {
    const { stock, ticker, theme } = props;
    const [activeTab, setActiveTab] = useState<Tab>('profile');
    
    const tabs: { id: Tab; label: string }[] = [
        { id: 'profile', label: 'Company Profile' },
        { id: 'analysis', label: 'Financial Analysis' },
        { id: 'valuation', label: 'Valuation' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return <StockDetailsCard stock={stock} ticker={ticker} />;
            case 'analysis':
                return <FinancialReport stock={stock} theme={theme} />;
            case 'valuation':
                return <ValuationView {...props} />;
            default:
                return null;
        }
    }

    return (
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800">
            <div className="border-b border-slate-200 dark:border-slate-800">
                <nav className="flex space-x-1 sm:space-x-2 p-2 overflow-x-auto">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-shrink-0 px-3 sm:px-4 py-3 text-lg font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 ${
                                activeTab === tab.id
                                    ? 'bg-sky-600 text-white shadow-sm'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>
            <div className="p-4 sm:p-6 md:p-8">
                {renderContent()}
            </div>
        </div>
    );
};