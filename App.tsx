
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BootSequence from './components/BootSequence';
import Home from './components/Home';
import Cursor from './components/Cursor';
import GrainOverlay from './components/GrainOverlay';
import PrismaticBackground from './components/PrismaticBackground';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [isBooting, setIsBooting] = useState<boolean>(true);

  useEffect(() => {
    const hasBooted = localStorage.getItem('hasBooted_v1');
    if (hasBooted) {
      setIsBooting(false);
    }
  }, []);

  const handleBootComplete = () => {
    localStorage.setItem('hasBooted_v1', 'true');
    setIsBooting(false);
  };

  return (
    <div className="relative min-h-screen selection:bg-white/10 selection:text-white">
      <GrainOverlay />
      <Cursor />
      <PrismaticBackground />
      
      <AnimatePresence mode="wait">
        {isBooting ? (
          <motion.div
            key="boot"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-black"
          >
            <BootSequence onComplete={handleBootComplete} />
          </motion.div>
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <Navbar />
            <Home />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
