import React from 'react';
import { motion } from 'framer-motion';
import { Download as DownloadIcon, Moon } from 'lucide-react';
import ScrollFloat from '../ui/scroll-float';
import SplitText from '../ui/split-text';

const Download: React.FC = () => {
  return (
    <section id="download" className="py-20 md:py-40 bg-transparent relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, -150],
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
            className="max-w-5xl mx-auto bg-gradient-to-br from-white/5 via-white/5 to-transparent backdrop-blur-3xl rounded-3xl border border-white/10 p-6 sm:p-8 md:p-16 lg:p-20 text-center shadow-2xl shadow-black/40 gradient-border floating-animation mx-4 sm:mx-6"
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 gradient-text text-glow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <ScrollFloat
              animationDuration={0.5}
              ease='power2.out'
              scrollStart='top bottom-=50px'
              scrollEnd='bottom top+=50px'
              stagger={0.03}
              className="gradient-text-cyan text-glow-cyan"
            >
              Fluxsyum Launcher
            </ScrollFloat>
          </motion.h2>
          
          <motion.p 
            className="max-w-3xl mx-auto text-gray-200 text-xl mb-12 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            A porta de entrada para todos os nossos universos. Acesse projetos exclusivos, atualizações automáticas e junte-se à nossa comunidade com um único clique.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.a
              href="#"
              className="group relative px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl text-xl overflow-hidden magnetic-hover neon-border pulse-glow"
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 25px 50px rgba(34, 211, 238, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
                </svg>
                Download para Windows
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            >
              <p className="text-sm text-gray-400 mb-2">
                Em breve para macOS e Linux
              </p>
              <div className="flex gap-4 justify-center opacity-40">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.69 5.55l-4.63 13.82a.5.5 0 01-.49.32.52.52 0 01-.45-.26L12 12.76 6.88 19.43a.52.52 0 01-.45.26.5.5 0 01-.49-.32L1.31 5.55a.5.5 0 01.61-.61L12 8.92l10.08-3.98a.5.5 0 01.61.61z"/>
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;
