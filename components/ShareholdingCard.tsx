import React from 'react';
import type { Assumptions } from '../types';
import { UsersIcon } from './IconComponents';

interface ShareholdingCardProps {
    stock: Assumptions;
}

const formatNumber = (value: number) => {
    return value.toLocaleString('en-US');
};

const ShareholderItem: React.FC<{ label: string; value: number }> = ({ label, value }) => (
    <li className="space-y-1.5">
        <div className="flex justify-between text-base">
            <span className="text-slate-300">{label}</span>
            <span className="font-medium text-white">{value.toFixed(2)}%</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-2 rounded-full" style={{ width: `${value}%` }}></div>
        </div>
    </li>
);

export const ShareholdingCard: React.FC<ShareholdingCardProps> = ({ stock }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <UsersIcon className="h-6 w-6 mr-3 text-sky-400"/>
                    Shareholding Structure
                </h3>
                <ul className="space-y-4 mt-6">
                    <ShareholderItem label="Directors" value={stock.shareholding.directors} />
                    <ShareholderItem label="Institutions" value={stock.shareholding.institutions} />
                    <ShareholderItem label="Foreign" value={stock.shareholding.foreign} />
                    <ShareholderItem label="Government" value={stock.shareholding.government} />
                    <ShareholderItem label="Public" value={stock.shareholding.public} />
                </ul>
            </div>
            <div>
                 <h3 className="text-2xl font-bold text-white mb-4">Share Details</h3>
                <div className="space-y-2 text-base mt-6">
                    <div className="flex justify-between bg-slate-800/50 p-3 rounded-md">
                        <span className="text-slate-400">Market Cap (M BDT)</span>
                        <span className="font-semibold text-white">{formatNumber(stock.marketCap)}</span>
                    </div>
                    <div className="flex justify-between bg-slate-800/50 p-3 rounded-md">
                        <span className="text-slate-400">Authorized Capital (M BDT)</span>
                        <span className="font-semibold text-white">{formatNumber(stock.authorizedCapital)}</span>
                    </div>
                    <div className="flex justify-between bg-slate-800/50 p-3 rounded-md">
                        <span className="text-slate-400">Paid-up Capital (M BDT)</span>
                        <span className="font-semibold text-white">{formatNumber(stock.paidUpCapital)}</span>
                    </div>
                    <div className="flex justify-between bg-slate-800/50 p-3 rounded-md">
                        <span className="text-slate-400">Total Shares (M)</span>
                        <span className="font-semibold text-white">{formatNumber(stock.sharesOutstanding)}</span>
                    </div>
                    <div className="flex justify-between bg-slate-800/50 p-3 rounded-md">
                        <span className="text-slate-400">Free-Float Shares (M)</span>
                        <span className="font-semibold text-white">{formatNumber(stock.freeFloatShares)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};