import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/react";

interface FeatureCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  gradientClass?: string;
  glowClass?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  children, 
  className = "", 
  gradientClass = "animated-gradient",
  glowClass = "glow"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`${glowClass} rounded-xl overflow-hidden mb-4 ${className}`}
    >
      <Card className="glass-effect border-none rounded-xl overflow-hidden" disableAnimation>
        <div className={`h-1 w-full ${gradientClass}`}></div>
        <CardBody className="p-4">
          <h3 className="text-sm font-semibold mb-3 text-white/90">{title}</h3>
          <div className="space-y-3">
            {children}
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};