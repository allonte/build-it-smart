import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  direction = "left",
  delay = 0 
}: AnimatedSectionProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -60, y: 0 };
      case "right":
        return { x: 60, y: 0 };
      case "up":
        return { x: 0, y: 60 };
      case "down":
        return { x: 0, y: -60 };
      default:
        return { x: -60, y: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        ...getInitialPosition()
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.7, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;