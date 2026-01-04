
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Generate random fake IP address
    const generateRandomIP = () => {
      const octet1 = 192;
      const octet2 = 168;
      const octet3 = Math.floor(Math.random() * 255);
      const octet4 = Math.floor(Math.random() * 255);
      return `${octet1}.${octet2}.${octet3}.${octet4}`;
    };

    setIpAddress(generateRandomIP());

    // Set current date and time
    const updateDateTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.toLocaleString('en-US', { month: 'long' }).toUpperCase();
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      setCurrentDate(`${year} ${month} ${day}`);
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm border-b border-red-900/30"
    >
      <div className="vhs-camera-frame">
        {/* VHS Top Bar */}
        <div className="flex items-center justify-between px-6 py-3">
          {/* Left Side - Recording Indicator */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-3 h-3 bg-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.8)]"
              />
              <span className="text-red-500 text-xs font-mono tracking-wider">REC</span>
            </div>
            
            {/* IP Address */}
            <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-green-400/80 tracking-wider">
              <span className="text-green-400/50">ADDR:</span>
              <span className="bg-black/40 px-2 py-1 border border-green-900/30">{ipAddress}</span>
            </div>
          </div>

          {/* Center - Date Display */}
          <div className="flex flex-col items-center">
            <div className="text-[11px] font-mono tracking-[0.3em] text-white/90 leading-none">
              {currentDate}
            </div>
            <div className="text-[9px] font-mono text-white/50 mt-1 tracking-widest">
              {currentTime}
            </div>
          </div>

          {/* Right Side - Camera Info */}
          <div className="flex items-center gap-4 text-[9px] font-mono text-white/60">
            <div className="hidden md:block">
              <span className="text-white/40">ZOOM:</span>
              <span className="ml-1">1.0x</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1 h-3 bg-white/60" />
              <div className="w-1 h-4 bg-white/70" />
              <div className="w-1 h-5 bg-white/80" />
              <div className="w-1 h-6 bg-white/90" />
            </div>
          </div>
        </div>

        {/* VHS Bottom Scanline */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />
      </div>
    </motion.nav>
  );
};

export default Navbar;
