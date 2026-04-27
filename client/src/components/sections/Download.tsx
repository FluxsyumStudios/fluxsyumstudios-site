import React from 'react';
import { motion } from 'framer-motion';

const Download: React.FC = () => {
  return (
    <section id="client" className="py-32 px-6 relative">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.21, 1, 0.36, 1] }}
        className="max-w-5xl mx-auto glass-panel p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 border-white/5 relative overflow-hidden group"
      >
        {/* Subtle background glow that follows the group hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

        <div className="text-left md:w-1/2 z-10">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight"
          >
            Fluxsyum <br />
            <span className="text-white/20">Client.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/40 text-lg mb-10 font-light leading-relaxed"
          >
            Acesse todos os projetos do estúdio com um clique. Performance otimizada e conexão instantânea.
          </motion.p>

          <motion.a 
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="http://node.fluxsyumstudios.site:25565/Installer/Fluxsyum-Launcher-installer-1.0.0.exe" 
            target="_blank" 
            className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-black text-xs uppercase tracking-widest shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Baixar Agora
          </motion.a>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="md:w-1/2 flex justify-center z-10"
        >
          <div className="w-full max-w-sm aspect-[4/3] bg-white/[0.03] border border-white/10 rounded-2xl relative overflow-hidden flex items-center justify-center shadow-2xl backdrop-blur-sm">
            <div className="absolute top-0 w-full h-8 bg-white/5 flex items-center px-4 gap-2 border-b border-white/10">
              <div className="w-2 h-2 rounded-full bg-white/10"></div>
              <div className="w-2 h-2 rounded-full bg-white/10"></div>
              <div className="w-2 h-2 rounded-full bg-white/10"></div>
            </div>
            
            <motion.div 
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-white/10 font-black text-7xl tracking-tighter"
            >
              FLUX
            </motion.div>
            
            {/* Animated progress bar mock */}
            <div className="absolute bottom-10 left-10 right-10 h-1 bg-white/5 rounded-full overflow-hidden">
               <motion.div 
                initial={{ x: "-100%" }}
                whileInView={{ x: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1, ease: "circOut" }}
                className="h-full w-full bg-white/20"
               />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Download;
