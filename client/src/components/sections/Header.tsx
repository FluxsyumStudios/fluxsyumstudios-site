import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Dock from '../ui/dock';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const dockItems = [
    {
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>,
      label: 'Início',
      onClick: () => handleAnchorClick('home')
    },
    {
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>,
      label: 'Filosofia',
      onClick: () => handleAnchorClick('philosophy')
    },
    {
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>,
      label: 'Portfólio',
      onClick: () => handleAnchorClick('portfolio')
    },
    {
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/></svg>,
      label: 'Processo',
      onClick: () => handleAnchorClick('process')
    }
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20, backdropFilter: "blur(0px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      backdropFilter: "blur(20px)",
      transition: { 
        staggerChildren: 0.1,
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      } 
    },
    exit: { 
      opacity: 0, 
      y: -20,
      backdropFilter: "blur(0px)",
      transition: { duration: 0.3 }
    }
  };
  
  const menuItemVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-150 ${
          isScrolled || isMenuOpen 
            ? 'bg-black/40 backdrop-blur-2xl border-b border-white/30 shadow-2xl' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a 
            href="#" 
            className="flex items-center gap-3 text-2xl font-bold tracking-wider text-white hover:text-gray-200 transition-all duration-100"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 600, damping: 35 }}
          >
            <img 
              src="https://i.postimg.cc/SRmLJrp3/fluxsyumlogo.png"
              alt="Fluxsyum Studios"
              className="w-8 h-8 md:w-10 md:h-10"
              onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.png"; }}
            />
            <span className="hidden sm:inline whitespace-nowrap">
              FLUXSYUM<span className="font-light text-gray-300 ml-1">STUDIOS</span>
            </span>
          </motion.a>
          
          <div className="hidden lg:block">
            <Dock 
              items={dockItems}
              panelHeight={60}
              baseItemSize={40}
              magnification={55}
              className="bg-black/40 backdrop-blur-2xl border-white/20 shadow-lg"
            />
          </div>
          
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-white focus:outline-none z-50 p-2 rounded-lg border border-white/30 bg-black/40 backdrop-blur-2xl shadow-lg"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.svg 
                  key="close"
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </motion.svg>
              ) : (
                <motion.svg 
                  key="menu"
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  initial={{ rotate: 180 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-2xl z-40 pt-20 px-4 overflow-y-auto border-b border-white/30 shadow-2xl"
          >
            <nav className="flex flex-col items-center space-y-6 mt-8">
              <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                {dockItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.onClick}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-black/40 backdrop-blur-xl border border-white/20 text-white hover:bg-black/60 hover:text-white transition-all duration-150 shadow"
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
              {/* <motion.div variants={menuItemVariants} className="mt-12">
                <motion.a 
                  href="#download" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl text-lg magnetic-hover neon-border"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 20px 40px rgba(34, 211, 238, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Launcher
                </motion.a>
              </motion.div> */}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
