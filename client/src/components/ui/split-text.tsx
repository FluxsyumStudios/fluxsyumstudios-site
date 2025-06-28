import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines';
  from?: { [key: string]: any };
  to?: { [key: string]: any };
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right';
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const isMobile = window.innerWidth < 768;
    
    // Simple animation for mobile
    if (isMobile) {
      gsap.set(container, from);
      gsap.to(container, {
        ...to,
        duration: duration * 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom-=50px',
          toggleActions: 'play none none reverse'
        },
        onComplete: onLetterAnimationComplete
      });
      return;
    }

    // Clear any existing content first
    container.innerHTML = '';
    
    // Full split animation for desktop
    let elements: Element[] = [];
    
    if (splitType === 'chars') {
      const chars = text.split('').map((char, index) => {
        if (char === ' ') {
          return `<span style="display: inline-block; width: 0.25em;">&nbsp;</span>`;
        }
        return `<span style="display: inline-block;">${char}</span>`;
      });
      container.innerHTML = chars.join('');
      elements = Array.from(container.querySelectorAll('span'));
    } else if (splitType === 'words') {
      const words = text.split(' ').map(word => 
        `<span style="display: inline-block; margin-right: 0.25em;">${word}</span>`
      );
      container.innerHTML = words.join('');
      elements = Array.from(container.querySelectorAll('span'));
    } else {
      // lines - simple implementation
      container.innerHTML = `<span style="display: inline-block;">${text}</span>`;
      elements = Array.from(container.querySelectorAll('span'));
    }

    // Set initial state
    gsap.set(elements, from);

    // Create animation
    gsap.to(elements, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      scrollTrigger: {
        trigger: container,
        start: `top bottom${rootMargin}`,
        toggleActions: 'play none none reverse'
      },
      onComplete: onLetterAnimationComplete
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [text, delay, duration, ease, splitType, from, to, threshold, rootMargin, onLetterAnimationComplete]);

  return (
    <div 
      ref={containerRef} 
      className={`${className}`}
      style={{ textAlign }}
    >
      {text}
    </div>
  );
};

export default SplitText;