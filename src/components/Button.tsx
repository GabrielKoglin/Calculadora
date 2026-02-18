import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
    variant?: 'default' | 'operator' | 'action' | 'equals';
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, className = '', variant = 'default' }) => {
    const baseStyles = "h-16 w-16 rounded-lg flex items-center justify-center text-xl font-bold transition-all duration-200 active:scale-95 shadow-lg select-none border-2 relative overflow-hidden group";

    // Dragon Theme Variants
    const variants = {
        default: "bg-gray-800 text-gray-200 border-gray-700 shadow-[4px_4px_8px_rgba(0,0,0,0.6),-1px_-1px_4px_rgba(255,255,255,0.1)] hover:bg-gray-700 hover:border-gray-500 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]",

        operator: "bg-gradient-to-br from-orange-600 to-red-800 text-white border-orange-500/50 shadow-[4px_4px_8px_rgba(0,0,0,0.6),inset_0_0_10px_rgba(255,100,0,0.3)] hover:from-orange-500 hover:to-red-700 hover:shadow-[0_0_20px_rgba(255,69,0,0.6)] text-2xl",

        action: "bg-gray-700 text-red-400 border-red-900/50 shadow-[4px_4px_8px_rgba(0,0,0,0.6)] hover:bg-gray-600 hover:text-red-300 hover:border-red-500/50",

        equals: "bg-gradient-to-r from-yellow-600 via-orange-600 to-red-700 text-white border-yellow-500/50 w-full col-span-2 rounded-lg shadow-[4px_4px_12px_rgba(0,0,0,0.8),inset_0_0_10px_rgba(255,215,0,0.3)] hover:brightness-110 hover:shadow-[0_0_25px_rgba(255,140,0,0.6)]"
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            <span className="relative z-10 drop-shadow-md">{label}</span>
            {/* Scale texture effect overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/fish-scale.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
            {/* Glossy shine */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>
        </button>
    );
};
