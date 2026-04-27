import React from 'react';
import { motion } from 'framer-motion';
import BorderGlow from '../ui/BorderGlow';

const portfolioData = [
  {
    id: 1,
    title: 'Fluxsyum SMP',
    description: 'Survival Multiplayer imersivo focado em roleplay e economia real.',
    label: 'SURVIVAL',
    image: '/imgs/fssmp.jpg'
  },
  {
    id: 2,
    title: 'Fluxsyum Optimizer',
    description: 'Modpack open source focado em performance máxima e estabilidade.',
    label: 'UTILITY',
    image: '/imgs/fsoptimizer.png'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
        duration: 1.2, 
        delay: i * 0.2,
        ease: [0.16, 1, 0.3, 1] 
    }
  })
};

const Portfolio: React.FC = () => {
  return (
    <section id="projetos" className="py-40 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase mb-6">Projetos Ativos</h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
            className="h-1 w-20 bg-white/20 mx-auto origin-left"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {portfolioData.map((project, i) => (
            <motion.div 
              key={project.id} 
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
            >
              <BorderGlow 
                backgroundColor="#050505"
                glowColor="0 0 100"
                glowIntensity={0.5}
                borderRadius={32}
              >
                <motion.div 
                  className="group relative p-5 flex flex-col h-full cursor-pointer"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden rounded-[24px] bg-white/[0.02]">
                    <motion.img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90 transition-opacity group-hover:opacity-40"></div>
                  </div>

                  <div className="mt-10 px-4 flex flex-col flex-grow">
                    <span className="text-[12px] font-black text-white/10 tracking-[0.4em] mb-4 uppercase transition-colors group-hover:text-white/40">
                      {project.label}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-5 tracking-tight">{project.title}</h3>
                    <p className="text-white/30 text-lg font-light leading-relaxed group-hover:text-white/60 transition-colors">
                      {project.description}
                    </p>
                    
                    <div className="mt-10 flex items-center gap-4 text-[12px] font-black text-white/10 uppercase tracking-[0.3em] group-hover:text-white/80 transition-all">
                      <span>Explorar Detalhes</span>
                      <div className="h-px w-8 bg-white/10 group-hover:w-24 group-hover:bg-white/40 transition-all duration-700"></div>
                    </div>
                  </div>
                </motion.div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
