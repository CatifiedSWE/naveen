
import React from 'react';
import { motion } from 'framer-motion';

const PrismaticBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#080808]">
      {/* Primary Indigo Refraction */}
      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [-30, 60, -30],
          scale: [1, 1.2, 1],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] rounded-full bg-indigo-600/10 blur-[180px] mix-blend-screen"
      />
      
      {/* Magenta/Purple Core */}
      <motion.div
        animate={{
          x: [50, -30, 50],
          y: [40, -20, 40],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] -right-[20%] w-[70%] h-[70%] rounded-full bg-fuchsia-800/10 blur-[200px] mix-blend-screen"
      />

      {/* Cyan Sharp Refraction Layer */}
      <motion.div
        animate={{
          x: [-20, 50, -20],
          y: [60, -10, 60],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[5%] left-[10%] w-[60%] h-[60%] rounded-full bg-cyan-600/5 blur-[150px] mix-blend-screen"
      />

      {/* Ambient Darkened Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#080808] via-transparent to-[#080808] opacity-80" />
      
      {/* Prismatic Horizon Line */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent blur-[1px]" />
    </div>
  );
};

export default PrismaticBackground;
