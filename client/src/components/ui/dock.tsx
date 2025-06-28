import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export interface DockItemData {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  className?: string;
}

interface DockProps {
  items: DockItemData[];
  className?: string;
  distance?: number;
  panelHeight?: number;
  baseItemSize?: number;
  dockHeight?: number;
  magnification?: number;
  spring?: {
    mass?: number;
    stiffness?: number;
    damping?: number;
  };
}

const Dock: React.FC<DockProps> = ({
  items,
  className = '',
  distance = 200,
  panelHeight = 68,
  baseItemSize = 50,
  dockHeight = 256,
  magnification = 70,
  spring = { mass: 0.01, stiffness: 500, damping: 30 }
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`flex h-16 items-end gap-4 rounded-2xl bg-black/20 backdrop-blur-xl px-4 pb-3 border border-white/10 shadow-lg shadow-black/25 ${className}`}
      style={{ height: panelHeight }}
    >
      {items.map((item, i) => (
        <DockItem
          mouseX={mouseX}
          key={i}
          item={item}
          distance={distance}
          baseItemSize={baseItemSize}
          magnification={magnification}
          spring={spring}
        />
      ))}
    </motion.div>
  );
};

interface DockItemProps {
  mouseX: any;
  item: DockItemData;
  distance: number;
  baseItemSize: number;
  magnification: number;
  spring: {
    mass?: number;
    stiffness?: number;
    damping?: number;
  };
}

const DockItem: React.FC<DockItemProps> = ({
  mouseX,
  item,
  distance,
  baseItemSize,
  magnification,
  spring
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );

  const width = useSpring(widthSync, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={`aspect-square cursor-pointer rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/15 hover:text-gray-200 transition-all duration-100 border border-white/10 hover:border-white/30 shadow-lg hover:shadow-white/20 ${item.className || ''}`}
      onClick={item.onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 600, damping: 35 }}
    >
      {item.icon}
    </motion.div>
  );
};

export default Dock;