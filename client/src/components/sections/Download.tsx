import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, FolderOpen } from 'lucide-react';
import ScrollFloat from '../ui/scroll-float';

const publicFiles = [
  {
    name: 'README.txt',
    url: '/files/README.txt',
    description: 'Arquivo de exemplo hospedado pelo proprio site.',
  },
];

const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-20 md:py-40 bg-transparent relative overflow-hidden">
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
              scale: [0, 1, 0],
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
          className="max-w-6xl mx-auto bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/30 p-6 sm:p-8 md:p-16 lg:p-20 shadow-2xl gradient-border mx-4 sm:mx-6"
          initial={{ opacity: 0, y: 80, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.h2
            className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 gradient-text text-glow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <ScrollFloat
              animationDuration={0.5}
              ease="power2.out"
              scrollStart="top bottom-=50px"
              scrollEnd="bottom top+=50px"
              stagger={0.03}
              className="gradient-text-cyan text-glow-cyan"
            >
              Arquivos publicos
            </ScrollFloat>
          </motion.h2>

          <motion.p
            className="max-w-3xl mx-auto text-center text-gray-200 text-lg md:text-xl mb-10 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Sim: qualquer arquivo colocado em <span className="font-semibold text-white">client/public/files</span> fica
            acessivel por URL direta. Exemplo: <span className="font-semibold text-cyan-300">/files/NOME-DO-ARQUIVO</span>.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.a
              href={publicFiles[0].url}
              download
              className="group relative px-8 sm:px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl text-base sm:text-lg overflow-hidden transition-all duration-200 flex items-center justify-center gap-3"
              whileHover={{
                scale: 1.04,
                boxShadow: '0 20px 40px rgba(34, 211, 238, 0.28)',
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              <Download className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Baixar arquivo teste</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href={publicFiles[0].url}
              target="_blank"
              rel="noreferrer"
              className="px-8 sm:px-10 py-4 border border-white/30 text-white font-bold rounded-2xl text-base sm:text-lg bg-white/5 hover:bg-white/10 transition-all duration-200 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              <ExternalLink className="w-5 h-5" />
              <span>Abrir pela URL</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="rounded-2xl border border-white/20 bg-white/5 p-5 text-white">
              <div className="flex items-center gap-3 mb-3">
                <FolderOpen className="w-5 h-5 text-cyan-300" />
                <span className="font-semibold">Pasta publicada</span>
              </div>
              <p className="text-sm text-gray-300">client/public/files</p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/5 p-5 text-white">
              <div className="flex items-center gap-3 mb-3">
                <ExternalLink className="w-5 h-5 text-cyan-300" />
                <span className="font-semibold">Base de acesso</span>
              </div>
              <p className="text-sm text-gray-300">/files/</p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/5 p-5 text-white">
              <div className="flex items-center gap-3 mb-3">
                <Download className="w-5 h-5 text-cyan-300" />
                <span className="font-semibold">Exemplo pronto</span>
              </div>
              <a
                href={publicFiles[0].url}
                className="text-sm text-cyan-300 break-all hover:text-cyan-200 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                {publicFiles[0].url}
              </a>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-5 text-sm text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            Mude so o final da URL para outro arquivo existente na mesma pasta. Exemplo:
            <span className="block mt-2 font-mono text-cyan-300">/files/README.txt</span>
            <span className="block mt-1 font-mono text-cyan-300">/files/outro-arquivo.zip</span>
          </motion.div>

          <div className="sr-only">
            {publicFiles.map((file) => `${file.name} ${file.description}`).join(' ')}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
