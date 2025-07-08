"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "hero";
  animated?: boolean;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  className,
  variant = "primary",
  animated = true,
}) => {
  const variants = {
    primary:
      "bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-500",
    secondary: "bg-gradient-to-r from-secondary-600 to-primary-600",
    hero: "bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-500",
  };

  return (
    <div
      className={cn("relative overflow-hidden", variants[variant], className)}
    >
      {/* Animated Background Elements */}
      {animated && (
        <>
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 80, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-1/3 w-64 h-64 bg-accent-400/20 rounded-full blur-2xl"
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GradientBackground;
