/* eslint-disable react/no-array-index-key */
import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';

const buildKeyframes = (from: any, steps: any[]) => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);
  const keyframes: any = {};
  keys.forEach(k => {
    keyframes[k] = [from[k], ...steps.map(s => s[k])];
  });
  return keyframes;
};

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t: number) => t,
  onAnimationComplete,
  stepDuration = 0.35,
  immediate = false // Nova prop para forçar início imediato
}: any) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(immediate);
  const ref = useRef(null);

  useEffect(() => {
    if (immediate || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin, immediate]);

  const defaultFrom = useMemo(
    () =>
      direction === 'top' ? { filter: 'blur(0px)', opacity: 0, y: -10 } : { filter: 'blur(0px)', opacity: 0, y: 10 },
    [direction]
  );

  const defaultTo = useMemo(() => [{ filter: 'blur(0px)', opacity: 1, y: 0 }], []);

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;
  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)));

  return (
    <span ref={ref} className={`${className} inline-flex flex-wrap`} style={{ opacity: inView ? 1 : 0 }}>
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
        const spanTransition: any = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000
        };
        spanTransition.ease = easing;

        return (
          <motion.span
            className="inline-block"
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
          >
            {segment === ' ' ? '\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </motion.span>
        );
      })}
    </span>
  );
};

export default BlurText;
