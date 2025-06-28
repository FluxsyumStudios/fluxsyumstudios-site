import React from 'react';
import { motion } from 'framer-motion';

const ProcessStep: React.FC<{ number: string, title: string, description: string, isLast?: boolean }> = ({ number, title, description, isLast }) => (
  <motion.div 
    className="flex"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    <div className="flex flex-col items-center mr-6">
      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-cyan-600 to-white/30 text-white font-bold text-xl rounded-full border-2 border-white/50 shadow-lg shadow-white/20">
        {number}
      </div>
      {!isLast && <div className="w-px h-full bg-gradient-to-b from-white/40 via-cyan-700/30 to-transparent"></div>}
    </div>
    <div className="pb-16">
      <h3 className="font-bold text-white text-xl mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </motion.div>
);

const Process: React.FC = () => {
  const steps = [
    { number: '1', title: 'Conceito e Ideação', description: 'Tudo começa com uma faísca. Exploramos temas, narrativas e ideias ousadas para definir a alma do novo mundo.' },
    { number: '2', title: 'Prototipagem e Arquitetura', description: 'Esboçamos mapas e sistemas. Nesta fase, erguemos a estrutura do mundo e testamos suas mecânicas essenciais.' },
    { number: '3', title: 'Desenvolvimento e Arte', description: 'Codificamos sistemas, erguemos paisagens e damos vida à arte do projeto, sempre atentos aos detalhes.' },
    { number: '4', title: 'Polimento e Lançamento', description: 'Realizamos testes exaustivos para garantir qualidade e estabilidade. Depois, otimizamos tudo e lançamos via nosso launcher.' }
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">A Jornada da Criação</h2>
          <p className="max-w-2xl mx-auto text-gray-400 mt-4">Da ideia à imersão, nosso processo é uma busca pela excelência.</p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
            <motion.div 
                className="p-8 md:p-12 bg-gradient-to-br from-black/20 via-black/10 to-transparent backdrop-blur-2xl rounded-2xl border border-white/25 shadow-2xl shadow-black/40"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {steps.map((step, index) => (
                <ProcessStep 
                  key={step.number} 
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  isLast={index === steps.length - 1}
                />
              ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
