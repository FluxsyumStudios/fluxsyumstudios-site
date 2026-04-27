import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Client', href: '#client' },
  ];

  return (
    <>
      <div className="fixed top-6 left-0 w-full z-50 px-4 flex justify-center pointer-events-none">
        <motion.nav 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`
            pointer-events-auto flex items-center gap-8 pl-6 pr-2 py-2 rounded-full transition-all duration-500
            ${isScrolled 
              ? 'bg-[#0A0A0A]/90 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.6)] border border-white/10' 
              : 'bg-[#0A0A0A]/40 backdrop-blur-md border border-white/[0.05]'
            }
          `}
        >
          <motion.a 
            href="#inicio" 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 pr-6 border-r border-white/10"
          >
            <img src="/imgs/fluxsyumlogo.png" alt="Logo" className="w-5 h-5 object-contain" />
            <span className="text-sm font-black tracking-tight text-white uppercase">FLUXSYUM</span>
          </motion.a>
          
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((item) => (
              <motion.a 
                key={item.name}
                href={item.href}
                whileHover={{ y: -1, color: "#fff" }}
                className="text-[12px] font-bold text-white/40 transition-colors tracking-widest uppercase"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
              whileTap={{ scale: 0.95 }}
              href="#contato" 
              className="px-6 py-2.5 text-[12px] font-black bg-white/5 text-white border border-white/10 rounded-full transition-all uppercase tracking-wider"
            >
              Contato
            </motion.a>

            <button className="md:hidden text-white/60 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((item, i) => (
              <motion.a 
                key={item.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1, type: "spring" }}
                href={item.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-black text-white/40 hover:text-white transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
