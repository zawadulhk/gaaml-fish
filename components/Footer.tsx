import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-transparent mt-12">
            <div className="px-4 sm:px-6 md:px-8 py-6 text-center text-slate-500 dark:text-gray-500">
                <p className="text-lg">&copy; {new Date().getFullYear()} Global Assurance Asset Management Limited. All Rights Reserved.</p>
                <p className="text-sm mt-1">This tool is for illustrative purposes only and does not constitute financial advice.</p>
            </div>
        </footer>
    );
};