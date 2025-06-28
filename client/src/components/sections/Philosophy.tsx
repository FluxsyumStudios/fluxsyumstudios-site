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
    className="bg-black/40 backdrop-blur-2xl rounded-2xl border border-white/30 p-6 shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:bg-black/60 hover:shadow-2xl"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <div className="mb-4 text-3xl text-white/90">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-200 font-light">{description}</p>
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
