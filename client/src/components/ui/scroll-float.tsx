import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: React.ReactNode;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  className?: string;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  animationDuration = 0.4,
  ease = 'power2.out',
  scrollStart = 'center bottom+=30%',
  scrollEnd = 'bottom bottom-=20%',
  stagger = 0.015,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const text = container.textContent || '';
    
    // Check if device is mobile for performance optimization
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      // Simple fade-in for mobile devices
      gsap.set(container, { opacity: 0, y: 20 });
      gsap.to(container, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        scrollTrigger: {
          trigger: container,
          start: 'top bottom-=50px',
          end: 'bottom top+=50px',
          toggleActions: 'play none none reverse'
        }
      });
    } else {
      // Full character animation for desktop
      const chars = text.split('').map((char, index) => {
        if (char === ' ') {
          return `<span style="display: inline-block; width: 0.3em;"></span>`;
        }
        return `<span style="display: inline-block;">${char}</span>`;
      });
      
      container.innerHTML = chars.join('');
      
      const charElements = container.querySelectorAll('span');
      
      gsap.set(charElements, {
        y: 50,
        opacity: 0,
        transformOrigin: 'center bottom'
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
          markers: false
        }
      });

      tl.to(charElements, {
        y: 0,
        opacity: 1,
        duration: animationDuration,
        ease: ease,
        stagger: stagger
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollFloat;