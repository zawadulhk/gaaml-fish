import React, { useState, useEffect } from 'react';
import type { Assumptions, ValuationResult, Stock } from './types';
import { stockData } from './data/stocks';
import { calculateDCFValuation } from './services/valuationService';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TabbedDisplay } from './components/TabbedDisplay';
import { StockSelectorModal } from './components/StockSelectorModal';

const stockList: Stock[] = Object.keys(stockData).map(ticker => ({
    ticker,
    name: stockData[ticker].name,
    logo: stockData[ticker].logo,
}));

const App: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const [selectedStockTicker, setSelectedStockTicker] = useState<string>(stockList[0].ticker);
    const [assumptions, setAssumptions] = useState<Assumptions | null>(null);
    const [valuationResults, setValuationResults] = useState<ValuationResult | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    useEffect(() => {
        const stockDefinition = stockData[selectedStockTicker];
        if (stockDefinition) {
            // Find the latest historical data entry to set the current revenue dynamically
            const latestYearData = stockDefinition.historicalData.length > 0
                ? stockDefinition.historicalData[stockDefinition.historicalData.length - 1]
                : null;
            
            const initialAssumptions: Assumptions = {
                ...stockDefinition,
                // Override or set currentRevenue based on the latest historical data
                currentRevenue: latestYearData ? latestYearData.revenue : 0,
            };
            setAssumptions(initialAssumptions);
        }
        setValuationResults(null);
        setError(null);
    }, [selectedStockTicker]);
    
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    const handleSelectStock = (ticker: string) => {
        if (stockData[ticker]) {
            setSelectedStockTicker(ticker);
        }
        setIsModalOpen(false);
    };
    
    const handleCalculate = () => {
        if (!assumptions) return;
        setIsLoading(true);
        setError(null);
        setValuationResults(null);
        
        setTimeout(() => {
            try {
                const results = calculateDCFValuation(assumptions);
                setValuationResults(results);
            } catch (e: any) {
                setError(e.message || 'An unexpected error occurred.');
            } finally {
                setIsLoading(false);
            }
        }, 500);
    };

    return (
        <div className="bg-slate-100 dark:bg-slate-950 min-h-screen text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300 flex flex-col">
            <Header theme={theme} toggleTheme={toggleTheme} />
            <main className="px-4 sm:px-6 md:px-8 py-8 flex-grow">
                {assumptions && (
                    <div className="text-center mb-8">
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="mt-6 w-full max-w-lg mx-auto flex items-center justify-between bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 py-4 px-6 rounded-lg transition-colors duration-200"
                        >
                            <div className="flex items-center">
                                <img src={assumptions.logo} alt={assumptions.name} className="h-12 w-12 mr-4 rounded-full"/>
                                <div className="text-left">
                                    <p className="font-bold text-2xl block text-slate-800 dark:text-slate-200">{assumptions.name}</p>
                                    <p className="font-normal text-lg text-slate-500 dark:text-slate-400">{selectedStockTicker}</p>
                                </div>
                            </div>
                            <svg className="w-6 h-6 ml-4 text-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                )}
                
                {assumptions && (
                    <TabbedDisplay
                        stock={assumptions}
                        ticker={selectedStockTicker}
                        results={valuationResults}
                        isLoading={isLoading}
                        error={error}
                        setAssumptions={setAssumptions}
                        onCalculate={handleCalculate}
                        theme={theme}
                    />
                )}
            </main>
            <Footer />
            <StockSelectorModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                stocks={stockList}
                onSelectStock={handleSelectStock}
                theme={theme}
            />
        </div>
    );
};

export default App;