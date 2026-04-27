import React, { useEffect } from 'react';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Portfolio from '@/components/sections/Portfolio';
import Download from '@/components/sections/Download';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import Dither from '@/components/ui/Dither';

const Home: React.FC = () => {
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        const targetId = target.getAttribute('href')?.substring(1);
        if (targetId) {
          e.preventDefault();
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => link.addEventListener('click', handleAnchorClick));
    return () => anchorLinks.forEach(link => link.removeEventListener('click', handleAnchorClick));
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white antialiased relative">
      {/* Fundo Preto e Branco com Dither */}
      <Dither 
        waveColor={[0.2, 0.2, 0.2]} // Tons de cinza puro
        colorNum={3} 
        pixelSize={2} 
        waveSpeed={0.02} 
        waveAmplitude={0.5} 
        waveFrequency={2.0}
        enableMouseInteraction={true}
        mouseRadius={0.4}
      />

      <Header />
      <main className="relative z-10">
        <Hero />
        <Portfolio />
        <Download />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
