import React from 'react';
import type { Assumptions } from '../types';
import { BriefcaseIcon, TagIcon, CalendarDaysIcon, ChartPieIcon, UserGroupIcon, ShieldCheckIcon, TruckIcon, UsersIcon } from './IconComponents';

interface StockDetailsCardProps {
    stock: Assumptions;
    ticker: string;
}

const InfoItem: React.FC<{ icon: React.ReactNode; label: string; value: string | number }> = ({ icon, label, value }) => (
    <div className="flex items-center space-x-3 bg-slate-100 dark:bg-slate-800/50 p-3 rounded-lg">
        <div className="text-sky-500 dark:text-sky-400">{icon}</div>
        <div>
            <p className="text-base text-slate-600 dark:text-slate-400">{label}</p>
            <p className="font-semibold text-slate-900 dark:text-white text-lg">{value}</p>
        </div>
    </div>
);

const BusinessModelSection: React.FC<{icon: React.ReactNode, title: string, items: string[]}> = ({icon, title, items}) => (
    <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg">
        <h4 className="font-semibold text-slate-800 dark:text-slate-100 text-xl mb-3 flex items-center">
           {icon}
           <span className="ml-2">{title}</span>
        </h4>
        <ul className="space-y-2 pl-2">
            {items.map(item => (
              <li key={item} className="flex items-start text-slate-700 dark:text-slate-300 text-lg">
                <span className="text-sky-500 dark:text-sky-400 mr-2 mt-1">&#8226;</span>
                <span>{item}</span>
              </li>
            ))}
        </ul>
    </div>
);

const formatNumber = (value: number) => {
    return value.toLocaleString('en-US');
};

const ShareholderItem: React.FC<{ label: string; value: number }> = ({ label, value }) => (
    <li className="space-y-1.5">
        <div className="flex justify-between text-lg">
            <span className="text-slate-700 dark:text-slate-300">{label}</span>
            <span className="font-medium text-slate-900 dark:text-white">{value.toFixed(2)}%</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-2 rounded-full" style={{ width: `${value}%` }}></div>
        </div>
    </li>
);


export const StockDetailsCard: React.FC<StockDetailsCardProps> = ({ stock, ticker }) => {
    return (
        <div className="space-y-12">
            <div>
                <h2 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-2">{stock.name} ({ticker})</h2>
                <p className="text-slate-600 dark:text-slate-400 text-xl mb-6 border-b border-slate-200 dark:border-slate-800 pb-6">{stock.summary}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    <InfoItem icon={<BriefcaseIcon className="h-6 w-6" />} label="Industry" value={stock.industry} />
                    <InfoItem icon={<TagIcon className="h-6 w-6" />} label="Category" value={stock.category} />
                    <InfoItem icon={<CalendarDaysIcon className="h-6 w-6" />} label="Listing Year" value={stock.listingYear} />
                </div>
            </div>

            <div>
                <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    Business Model
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <BusinessModelSection icon={<ChartPieIcon className="h-5 w-5 text-sky-500 dark:text-sky-400"/>} title="Revenue Streams" items={stock.businessModel.revenueStreams} />
                    <BusinessModelSection icon={<UserGroupIcon className="h-5 w-5 text-sky-500 dark:text-sky-400"/>} title="Key Clients" items={stock.businessModel.keyClients} />
                    <BusinessModelSection icon={<ShieldCheckIcon className="h-5 w-5 text-sky-500 dark:text-sky-400"/>} title="Competitive Advantages" items={stock.businessModel.competitiveAdvantages} />
                    <BusinessModelSection icon={<TruckIcon className="h-5 w-5 text-sky-500 dark:text-sky-400"/>} title="Distribution Channels" items={stock.businessModel.distributionChannels} />
                </div>
            </div>

            <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
                <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                    Shareholding & Capital Structure
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div>
                        <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                            <UsersIcon className="h-6 w-6 mr-3 text-sky-500 dark:text-sky-400"/>
                            Shareholding Structure
                        </h4>
                        <ul className="space-y-4 mt-6">
                            <ShareholderItem label="Directors" value={stock.shareholding.directors} />
                            <ShareholderItem label="Institutions" value={stock.shareholding.institutions} />
                            <ShareholderItem label="Foreign" value={stock.shareholding.foreign} />
                            <ShareholderItem label="Government" value={stock.shareholding.government} />
                            <ShareholderItem label="Public" value={stock.shareholding.public} />
                        </ul>
                    </div>
                    <div>
                         <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Share Details</h4>
                        <div className="space-y-2 text-lg mt-6">
                            <div className="flex justify-between bg-slate-100 dark:bg-slate-800/50 p-3 rounded-md">
                                <span className="text-slate-600 dark:text-slate-400">Market Cap (M BDT)</span>
                                <span className="font-semibold text-slate-900 dark:text-white">{formatNumber(stock.marketCap)}</span>
                            </div>
                            <div className="flex justify-between bg-slate-100 dark:bg-slate-800/50 p-3 rounded-md">
                                <span className="text-slate-600 dark:text-slate-400">Authorized Capital (M BDT)</span>
                                <span className="font-semibold text-slate-900 dark:text-white">{formatNumber(stock.authorizedCapital)}</span>
                            </div>
                            <div className="flex justify-between bg-slate-100 dark:bg-slate-800/50 p-3 rounded-md">
                                <span className="text-slate-600 dark:text-slate-400">Paid-up Capital (M BDT)</span>
                                <span className="font-semibold text-slate-900 dark:text-white">{formatNumber(stock.paidUpCapital)}</span>
                            </div>
                            <div className="flex justify-between bg-slate-100 dark:bg-slate-800/50 p-3 rounded-md">
                                <span className="text-slate-600 dark:text-slate-400">Total Shares (M)</span>
                                <span className="font-semibold text-slate-900 dark:text-white">{formatNumber(stock.sharesOutstanding)}</span>
                            </div>
                            <div className="flex justify-between bg-slate-100 dark:bg-slate-800/50 p-3 rounded-md">
                                <span className="text-slate-600 dark:text-slate-400">Free-Float Shares (M)</span>
                                <span className="font-semibold text-slate-900 dark:text-white">{formatNumber(stock.freeFloatShares)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};