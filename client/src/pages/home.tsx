import React, { useEffect } from 'react';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Philosophy from '@/components/sections/Philosophy';
import Portfolio from '@/components/sections/Portfolio';
import Process from '@/components/sections/Process';
import Download from '@/components/sections/Download';
import Footer from '@/components/sections/Footer';

const Home: React.FC = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          const headerHeight = 80; // Account for fixed header
          const targetPosition = targetElement.offsetTop - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    // Cleanup event listeners
    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to -gray-900">
      <Header />
      <Hero />
      <Philosophy />
      <Portfolio />
      <Process />
      <Footer />
    </div>
  );
};

export default Home;
