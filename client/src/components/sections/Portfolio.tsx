import React from 'react';
import { PortfolioItem } from '@shared/types';
import { motion } from 'framer-motion';
import ScrollFloat from '../ui/scroll-float';

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: 'Fluxsyum Launcher',
    description: 'Um launcher para jogar em todos os nossos Projetos.',
    imageUrl: 'https://cdn.discordapp.com/attachments/1284858760669560917/1388321292561678427/fluxsyumlauncherlogobranca.png?ex=68608e75&is=685f3cf5&hm=aa4d0e72b9f5c6ec80e213d72dfdb3edeb9ab4029d55a7190f01ef5555a2635d&',
    tags: ['Launcher', 'Minecraft', 'Jogos']
  },
  {
    id: 2,
    title: 'Fluxsyum SMP',
    description: 'Um SMP cheio de mistérios e magia.',
    imageUrl: 'https://cdn.discordapp.com/attachments/1284858760669560917/1388308683754311680/20250619_233918.jpg?ex=686082b7&is=685f3137&hm=b350beb5ea2024694298766eccc18f7fbfcf5c084218b0bacdc001adaa3f5703&',
    tags: ['SMP', 'Minecraft', 'Jogos']
  },
  {
    id: 3,
    title: 'Minecraft Domínio',
    description: 'Uma série onde o mundo é sem limites.',
    imageUrl: 'https://cdn.discordapp.com/attachments/1284858760669560917/1388325939230019604/minecraft_dominio.png?ex=686092c9&is=685f4149&hm=4b69ff46bf384afee5b9ce78f388d4b0f632dfefd09708a9689b9c8f39a3d569&',
    tags: ['Série', 'Minecraft', 'Jogos']
  }
];

const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      } 
    }
};

const PortfolioCard: React.FC<{ item: PortfolioItem; index: number }> = ({ item, index }) => (
  <motion.div 
    className="group relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-3xl border border-white/10 transition-all duration-700 card-hover gradient-border"
    variants={cardVariants}
    whileHover={{
      y: -20,
      scale: 1.03,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }}
    >
    <div className="relative h-80 overflow-hidden">
      <motion.img 
        src={item.imageUrl} 
        alt={item.title} 
        className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.7 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
      
      {/* Floating overlay effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 1.2, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
    
    <motion.div 
      className="absolute bottom-0 left-0 right-0 p-8 text-white"
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.h3 
        className="text-2xl font-bold mb-3 gradient-text hover:text-white transition-all duration-300"
        whileHover={{ scale: 1.05 }}
      >
        {item.title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-300 mb-4 leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100"
       >
        {item.description}
      </motion.p>
      
      <motion.div 
        className="flex flex-wrap gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200"
      >
        {item.tags.map((tag, tagIndex) => (
          <motion.span 
            key={tag} 
            className="bg-gradient-to-r from-white-500/20 to-black-500/20 backdrop-blur-xl text-white-200 text-sm font-semibold px-4 py-2 rounded-full border border-white-400/30 neon-border"
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              borderColor: "rgba(255, 255, 255, 0.6)"
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
    
    {/* Bottom accent line */}
  </motion.div>
);


const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3 }}
        >
          <ScrollFloat
            animationDuration={0.4}
            ease='power2.out'
            scrollStart='top bottom-=30px'
            scrollEnd='bottom top+=80px'
            stagger={0.02}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Reinos que Forjamos
          </ScrollFloat>
          <p className="max-w-2xl mx-auto text-gray-400 mt-4">Explore a diversidade e a qualidade dos mundos que já trouxemos à vida.</p>
        </motion.div>
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 px-4 md:px-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.1 }}
        >
          {portfolioData.map((item, index) => <PortfolioCard key={item.id} item={item} index={index} />)}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
