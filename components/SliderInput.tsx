import React from 'react';

interface NumberInputProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
    step?: number;
}

export const SliderInput: React.FC<NumberInputProps> = ({ label, value, onChange, step }) => {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let num = parseFloat(e.target.value);
        if (isNaN(num)) {
            num = 0; // Default to 0 if input is not a valid number (e.g., empty)
        }
        onChange(num);
    };

    return (
        <div className="mb-4">
            <label htmlFor={label} className="block text-lg font-medium text-slate-600 dark:text-slate-400 mb-1.5">{label}</label>
            <input
                id={label}
                type="number"
                step={step}
                value={value}
                onChange={handleOnChange}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-md p-3 text-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
            />
        </div>
    );
};