export const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-t border-white/5 py-4">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-gray-500 text-xs tracking-widest uppercase">
                    © {new Date().getFullYear()} Dragon Calc. Forged in Fire.
                </p>
            </div>
        </footer>
    );
};
