import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Calculator } from './components/Calculator';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-[#050505] flex flex-col relative overflow-hidden">

        {/* Background decoration - Dragon Lair Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/40 via-black to-black fixed"></div>

        {/* Dragon Scales Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20 mix-blend-overlay pointer-events-none fixed"></div>

        {/* Breathing Fire Effects */}
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-orange-600/20 rounded-full blur-[120px] dragon-breath mix-blend-screen pointer-events-none fixed" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-red-600/20 rounded-full blur-[120px] dragon-breath pointer-events-none fixed" style={{ animationDelay: '2s' }} />

        {/* Dragon Eye / Core Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none fixed">
          <div className="w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px] fire-flicker"></div>
        </div>

        <Header />

        <main className="flex-grow flex items-center justify-center pt-16 pb-16 z-10 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={
              <div className="relative z-10 md:scale-110 transform transition-transform">
                <Calculator />
              </div>
            } />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
