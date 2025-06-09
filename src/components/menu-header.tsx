import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";

export const MenuHeader: React.FC = () => {
  return (
    <div className="relative w-full h-32 overflow-hidden rounded-t-2xl">
      <div className="absolute inset-0 animated-gradient z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10"></div>
      
      <div className="relative z-20 h-full flex flex-col justify-between p-6">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex items-center"
          >
            <div className="h-10 w-10 rounded-xl glass-effect flex items-center justify-center mr-3">
              <Icon icon="lucide:zap" className="text-primary text-xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">angelcount</h1>
              <p className="text-xs text-white/70">powered by t.me/servises444</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <Button 
              isIconOnly 
              variant="light" 
              radius="lg" 
              className="bg-white/10 backdrop-blur-md"
            >
              <Icon icon="lucide:x" className="text-white/90" />
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="flex items-center gap-2"
        >
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs font-medium text-white/80">Connected • 12ms</span>
        </motion.div>
      </div>
    </div>
  );
};