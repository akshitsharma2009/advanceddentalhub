import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

// Reusable scroll-triggered animation wrapper
interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  once?: boolean;
}

const directionOffset: Record<string, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
};

export const ScrollReveal = ({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 40,
  duration = 0.6,
  once = true,
}: ScrollRevealProps) => {
  const offset = directionOffset[direction];
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: (offset.x ?? 0) * distance,
        y: (offset.y ?? 0) * distance,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

// Stagger container for lists of items
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const StaggerContainer = ({
  children,
  className,
  staggerDelay = 0.12,
  once = true,
}: StaggerContainerProps) => {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: staggerDelay },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div className={className} variants={staggerItemVariants}>
    {children}
  </motion.div>
);

// Scale-in animation
export const ScaleReveal = ({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
  >
    {children}
  </motion.div>
);

export { motion };
