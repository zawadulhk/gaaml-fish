import React from 'react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
    return (
        <header className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg shadow-sm sticky top-0 z-40 border-b border-slate-200 dark:border-slate-800">
            <div className="px-4 sm:px-6 md:px-8">
                <div className="flex items-center justify-between py-2 sm:py-3">
                    <div className="flex items-center space-x-4">
                        <Logo />
                        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200 hidden sm:block">
                            Fundamental Investments Screening Hub
                        </h1>
                    </div>
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>
            </div>
        </header>
    );
};