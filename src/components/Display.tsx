import React from 'react';

interface DisplayProps {
    value: string;
}

export const Display: React.FC<DisplayProps> = ({ value }) => {
    return (
        <div className="w-full h-32 bg-gray-900 rounded-xl mb-6 flex flex-col items-end justify-center p-4 shadow-[inset_0px_4px_10px_rgba(0,0,0,0.9),0_0_0_2px_rgba(255,255,255,0.05)] border-2 border-gray-800 relative overflow-hidden">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none"></div>

            <span className="text-gray-400 text-sm font-mono mb-1 tracking-widest uppercase opacity-60 z-10">Dragon Calc</span>
            <span className="text-4xl sm:text-5xl font-mono text-red-500 truncate tracking-widest drop-shadow-[0_0_8px_rgba(255,0,0,0.6)] z-10" style={{ fontFamily: 'Courier New, monospace' }}>
                {value}
            </span>
        </div>
    );
};
