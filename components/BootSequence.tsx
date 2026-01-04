
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BootSequenceProps {
  onComplete: () => void;
}

const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const messages = [
    "CHECKING HARDWARE INTEGRITY...",
    "MEMORY MODULE: OK",
    "SUBSYSTEMS INITIALIZING...",
    "SYNAPSE LINK ESTABLISHED",
    "PRISMATIC CORE: STABLE",
    "WAKING SYSTEM..."
  ];

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < messages.length) {
        setLogs(prev => [...prev, messages[current]]);
        current++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 1200);
      }
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full font-mono text-xs tracking-widest text-zinc-500 uppercase">
      <div className="space-y-4 text-center">
        <motion.div 
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8"
        >
          SYSTEM INITIALIZATION
        </motion.div>
        
        <div className="h-48 overflow-hidden">
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-1"
            >
              {log}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="w-48 h-[1px] bg-zinc-800 relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 4.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-white/40"
            />
          </div>
        </div>
      </div>

      {/* Subtle CRT Flicker Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] animate-pulse bg-white" />
    </div>
  );
};

export default BootSequence;
