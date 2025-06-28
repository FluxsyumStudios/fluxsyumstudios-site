import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Star, Compass, Sparkles } from 'lucide-react';
import ScrollFloat from '../ui/scroll-float';
import SplitText from '../ui/split-text';

interface PhilosophyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.1
    }
  }
};

const PhilosophyCard: React.FC<PhilosophyCardProps> = ({ icon, title, description, index }) => (
  <motion.div 
    className="group relative bg-gradient-to-br from-white/5 via-white/5 to-transparent backdrop-blur-3xl p-8 rounded-3xl border border-white/10 shadow-2xl shadow-black/40 transition-all duration-500 card-hover gradient-border"
    variants={cardVariants}
    whileHover={{
      y: -15,
      scale: 1.05,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <motion.div 
      className="relative z-10 text-cyan-400 mb-6 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl group-hover:from-cyan-400/30 group-hover:to-blue-400/30 transition-all duration-500 border border-cyan-400/20 group-hover:border-cyan-400/40 neon-border"
      whileHover={{ 
        scale: 1.1,
        rotate: 5,
        transition: { duration: 0.3 }
      }}
    >
      {icon}
    </motion.div>
    
    <h3 className="text-2xl font-bold mb-4 text-white gradient-text group-hover:gradient-text-cyan transition-all duration-500">{title}</h3>
    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed">{description}</p>
  </motion.div>
);

const Philosophy: React.FC = () => {
  const philosophies = [
    {
      icon: <Moon className="h-8 w-8" />,
      title: 'Realidades Lunares',
      description: 'Cada bloco conta uma história. Damos vida a narrativas ricas que transformam mapas em mundos cheios de propósito.'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Inovação Estelar',
      description: 'Rompemos os limites do Minecraft criando sistemas e mecânicas que elevam o roleplay a novas dimensões.'
    },
    {
      icon: <Compass className="h-8 w-8" />,
      title: 'Navegação Criativa',
      description: 'Arquitetura é arte: cada construção é projetada para ser deslumbrante e totalmente imersiva.'
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Comunidade Cósmica',
      description: 'Criamos mundos para serem vividos em comunidade. Nossos servidores incentivam a interação, o roleplay colaborativo e histórias forjadas pelos jogadores.'
    }
  ];

  return (
    <section id="philosophy" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 gradient-text">
            Nossa Filosofia de Criação
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 mb-16">
            Não criamos apenas servidores, damos forma a universos vivos, prontos para suas maiores aventuras.
          </p>
        </motion.div>
        <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 md:px-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
        >
          {philosophies.map((p, index) => <PhilosophyCard key={p.title} {...p} index={index} />)}
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
