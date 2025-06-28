import React from 'react';
import { motion } from 'framer-motion';
import { Moon, ArrowDown, Play, Download } from 'lucide-react';
import ScrollFloat from '../ui/scroll-float';
import SplitText from '../ui/split-text';

const Hero: React.FC = () => {
  const handleAnimationComplete = () => {
    console.log('Hero text animation completed');
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden bg-black/40 backdrop-blur-2xl shadow-2xl">
      {/* Luna Theme Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-cyan-900/10"></div>
      
      {/* Moon Elements */}
      <div className="absolute top-20 right-20 opacity-20">
        <Moon className="w-32 h-32 md:w-48 md:h-48 text-white floating-animation" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-10">
        <Moon className="w-24 h-24 md:w-32 md:h-32 text-white" style={{ transform: 'rotate(45deg)' }} />
      </div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -80],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative z-10 max-w-6xl mx-auto flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.div
          className="floating-animation"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-tight tracking-wide gradient-text text-glow">
            Sua história começa aqui!
          </h1>
        </motion.div>
        
        <motion.p 
          className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl font-light leading-relaxed px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          A Fluxsyum Studios é um estúdio especializado na criação de SMPs e séries originais para Minecraft. Nosso objetivo é oferecer servidores de alta qualidade, com roleplay imersivo e modpacks otimizados, prontos para rodar bem em qualquer máquina.
          <br className="hidden md:block" />
        </motion.p>
        
        <motion.div 
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
            <motion.a
            href="http://node.fluxsyumstudios.site:25565/Installer/Fluxsyum-Launcher-installer-1.0.0.exe"
            download
            className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-white text-black font-bold rounded-2xl text-base sm:text-lg overflow-hidden transition-all duration-200 hover:bg-gray-100 flex items-center justify-center gap-2"
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)"
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
            <Download className="w-5 h-5" />
            <span>Baixar Launcher</span>
            </motion.a>
          
          <motion.a
            href="#portfolio" 
            className="group px-8 sm:px-12 py-4 sm:py-5 bg-transparent border-2 border-white text-white font-bold rounded-2xl text-base sm:text-lg transition-all duration-200 hover:bg-white hover:text-black flex items-center justify-center gap-2"
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)"
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Play className="w-5 h-5" />
            <span>Ver Projetos</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
