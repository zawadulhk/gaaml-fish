import React, { useState, useEffect } from 'react';
import type { Stock } from '../types';

interface StockSelectorModalProps {
    isOpen: boolean;
    onClose: () => void;
    stocks: Stock[];
    onSelectStock: (ticker: string) => void;
    theme: 'light' | 'dark';
}

export const StockSelectorModal: React.FC<StockSelectorModalProps> = ({ isOpen, onClose, stocks, onSelectStock, theme }) => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (!isOpen) {
            // Reset search term when modal is closed
            setTimeout(() => setSearchTerm(''), 300);
        }
    }, [isOpen]);

    const filteredStocks = stocks.filter(stock =>
        stock.ticker.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stock.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <div className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
            
            <div 
                className={`relative w-full max-w-3xl transform rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl transition-all ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                onClick={e => e.stopPropagation()}
            >
                <div className="p-4 border-b border-slate-200 dark:border-slate-800">
                    <input
                        type="text"
                        placeholder="Search for a company..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-100 dark:bg-slate-800 border-transparent focus:ring-2 focus:ring-sky-500 focus:border-sky-500 rounded-md py-3 px-4 text-xl transition"
                        autoFocus
                    />
                </div>

                <div className="max-h-[60vh] overflow-y-auto">
                    {filteredStocks.length > 0 ? (
                        <ul className="divide-y divide-slate-200 dark:divide-slate-800">
                            {filteredStocks.map(stock => (
                                <li key={stock.ticker}>
                                    <button
                                        onClick={() => onSelectStock(stock.ticker)}
                                        className="w-full flex items-center p-5 text-left hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-150 focus:outline-none focus:bg-sky-100 dark:focus:bg-sky-900/50"
                                    >
                                        <img src={stock.logo} alt={`${stock.name} logo`} className="h-12 w-12 mr-5 rounded-full bg-white p-0.5" />
                                        <div>
                                            <p className="font-bold text-slate-800 dark:text-slate-200 text-2xl">{stock.name}</p>
                                            <p className="text-lg text-slate-500 dark:text-slate-400">{stock.ticker}</p>
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="p-8 text-center text-slate-500 dark:text-slate-400 text-lg">
                            No companies found.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};