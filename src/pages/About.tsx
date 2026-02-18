export const About = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] max-w-3xl mx-auto px-8 relative z-10 text-left">
            <h2 className="text-4xl font-bold text-white mb-8 border-b border-red-900/50 pb-4 w-full">Project Lore</h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                    <span className="text-red-500 font-bold">Dragon Calc</span> is not just a tool; it is an artifact.
                    Designed with the aesthetic of ancient dragon scales and the glow of magma, it brings a touch of fantasy to your daily computations.
                </p>

                <div className="bg-black/40 p-6 rounded-lg border border-white/5 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-orange-500 mb-4">Tech Specs</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-400">
                        <li>React 19 + TypeScript</li>
                        <li>Vite Build System</li>
                        <li>Tailwind CSS v4 (Glassmorphism & Gradients)</li>
                        <li>React Router DOM for Navigation</li>
                    </ul>
                </div>

                <p className="text-sm text-gray-500 italic mt-8">
                    "Only the brave dare to calculate the sum of a dragon's hoard."
                </p>
            </div>
        </div>
    );
};
