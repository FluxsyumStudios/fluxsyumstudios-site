import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 px-6 relative">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="max-w-4xl mx-auto glass-panel p-10 md:p-16 text-center border-white/5"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Pronto para iniciar?</h2>
        <p className="text-white/40 text-lg mb-10 font-light">
          Traga sua ideia. Nós cuidamos do código, do design e da infraestrutura.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <motion.a 
            whileHover={{ scale: 1.02, backgroundColor: '#fff', color: '#000' }}
            whileTap={{ scale: 0.98 }}
            href="https://discord.gg/k8XWww5xP4" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto px-10 py-4 bg-white/10 border border-white/10 text-white rounded-full font-bold transition-all"
          >
            Falar no Discord
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
