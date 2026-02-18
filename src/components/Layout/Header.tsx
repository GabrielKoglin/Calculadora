import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
                            Dragon Calc 🐉
                        </Link>
                    </div>
                    <nav>
                        <ul className="flex space-x-8">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white hover:text-shadow-red transition-colors text-sm font-medium tracking-wider uppercase">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/calculator" className="text-gray-300 hover:text-white hover:text-shadow-red transition-colors text-sm font-medium tracking-wider uppercase">
                                    Calculator
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-white hover:text-shadow-red transition-colors text-sm font-medium tracking-wider uppercase">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};
