import React from 'react';
import { motion } from 'framer-motion';
import BlurText from '../ui/BlurText';
import ShinyText from '../ui/ShinyText';

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { 
        duration: 0.8, 
        delay: i * 0.15,
        ease: [0.21, 1, 0.36, 1] 
    }
  })
};

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-28 pb-12 px-6 overflow-hidden relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div 
          custom={0}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="inline-flex items-center space-x-2 glass-panel px-4 py-1.5 rounded-full mb-8 text-[10px] sm:text-xs font-medium text-white/60 tracking-wider uppercase border border-white/5"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          <span>Refazendo o futuro dos SMP's</span>
        </motion.div>
        
        {/* Título unificado */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-white flex flex-wrap justify-center items-baseline">
          <BlurText
            text="Design. Sistemas."
            delay={80}
            animateBy="words"
            immediate={true}
            className="mr-2 sm:mr-4"
          />
          <motion.span 
            custom={4}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="inline-block"
          >
            <ShinyText 
              text="Experiência." 
              disabled={false} 
              speed={3} 
              className="opacity-100" 
              color="#555555" 
              shineColor="#ffffff" 
            />
          </motion.span>
        </h1>
        
        {/* Parágrafo */}
        <motion.p 
          custom={5}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="text-white/40 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed px-4"
        >
          Elevamos o padrão de servidores de Minecraft. <br className="hidden md:block" />
          Ecossistemas complexos e plugins otimizados com estética impecável.
        </motion.p>
        
        {/* Botões */}
        <motion.div 
          custom={6}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 sm:px-0"
        >
          <motion.a 
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#client" 
            className="w-full sm:w-auto px-10 py-4 bg-white text-black rounded-full font-bold transition-all text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Baixar Client
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            whileTap={{ scale: 0.98 }}
            href="#projetos" 
            className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold flex items-center justify-center gap-2 text-sm"
          >
            Ver Projetos
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.03] blur-[120px] rounded-full -z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
