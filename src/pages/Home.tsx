import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 relative z-10">
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-6 drop-shadow-2xl">
                DRAGON CALC
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
                Experimente o poder do cálculo forjado nas profundezas do covil de obsidiana. Precisão encontra estética mítica.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
                <Link
                    to="/calculator"
                    className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg text-white font-bold tracking-widest uppercase hover:brightness-110 transition-all shadow-[0_0_20px_rgba(255,69,0,0.5)] active:scale-95"
                >
                    Entrar no Covil
                </Link>
                <Link
                    to="/about"
                    className="px-8 py-4 bg-transparent border border-gray-600 rounded-lg text-gray-300 font-bold tracking-widest uppercase hover:bg-white/5 transition-all active:scale-95"
                >
                    História do Projeto
                </Link>
            </div>
        </div>
    );
};
