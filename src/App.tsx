import React from "react";
import { motion } from "framer-motion";
import { ModMenu } from "./components/mod-menu";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-radial from-background via-background to-background/80 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-4xl"
      >
        <ModMenu />
      </motion.div>
    </div>
  );
}