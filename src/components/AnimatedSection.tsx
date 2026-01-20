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
        return { x: -40, y: 0 };
      case "right":
        return { x: 40, y: 0 };
      case "up":
        return { x: 0, y: 40 };
      case "down":
        return { x: 0, y: -40 };
      default:
        return { x: -40, y: 0 };
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
      viewport={{ once: true, amount: 0.15 }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;