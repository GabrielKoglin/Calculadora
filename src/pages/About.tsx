export const About = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] max-w-3xl mx-auto px-8 relative z-10 text-left">
            <h2 className="text-4xl font-bold text-white mb-8 border-b border-red-900/50 pb-4 w-full">História do Projeto</h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                    <span className="text-red-500 font-bold">Dragon Calc</span> não é apenas uma ferramenta; é um artefato.
                    Projetado com a estética de antigas escamas de dragão e o brilho do magma, traz um toque de fantasia para seus cálculos diários.
                </p>

                <div className="bg-black/40 p-6 rounded-lg border border-white/5 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-orange-500 mb-4">Especificações Técnicas</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-400">
                        <li>React 19 + TypeScript</li>
                        <li>Sistema de Build Vite</li>
                        <li>Tailwind CSS v4 (Glassmorphism & Gradients)</li>
                        <li>React Router DOM para Navegação</li>
                    </ul>
                </div>

                <p className="text-sm text-gray-500 italic mt-8">
                    "Apenas os bravos ousam calcular a soma do tesouro de um dragão."
                </p>
            </div>
        </div>
    );
};
