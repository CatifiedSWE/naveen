
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
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-none border-b-2 border-red-900/50 heavy-grain tracking-lines"
      style={{ 
        boxShadow: '0 0 30px rgba(220, 38, 38, 0.2), inset 0 0 20px rgba(0, 0, 0, 0.8)',
        background: 'linear-gradient(180deg, rgba(10,10,10,0.98) 0%, rgba(0,0,0,0.95) 100%)'
      }}
    >
      <div className="vhs-camera-frame">
        {/* Static Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />

        {/* VHS Top Bar */}
        <div className="flex items-center justify-between px-4 md:px-6 py-3 relative vhs-distortion">
          {/* Left Side - Recording Indicator */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="w-2.5 md:w-3 h-2.5 md:h-3 bg-red-600 rounded-full"
                style={{ 
                  boxShadow: '0 0 12px rgba(220, 38, 38, 0.9), 0 0 25px rgba(220, 38, 38, 0.5)' 
                }}
              />
              <span className="text-red-500 text-[10px] md:text-xs font-vhs tracking-wider vhs-chromatic">● REC</span>
            </div>
            
            {/* IP Address */}
            <div className="hidden sm:flex items-center gap-2 text-[9px] md:text-[10px] font-vhs text-green-400/90 tracking-wider">
              <span className="text-green-500/60">ADDR/</span>
              <span className="bg-black/60 px-2 py-0.5 border border-green-800/40 vhs-chromatic" 
                style={{ boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.8)' }}>
                {ipAddress}
              </span>
            </div>
          </div>

          {/* Center - Date Display */}
          <div className="flex flex-col items-center">
            <div className="text-[10px] md:text-[11px] font-vhs tracking-[0.25em] text-amber-100/95 leading-none vhs-chromatic"
              style={{ 
                textShadow: '0 0 8px rgba(251, 191, 36, 0.4), 2px 0 3px rgba(255, 0, 0, 0.3), -2px 0 3px rgba(0, 255, 255, 0.3)' 
              }}>
              {currentDate}
            </div>
            <div className="text-[8px] md:text-[9px] font-vhs text-amber-200/70 mt-0.5 tracking-widest">
              {currentTime}
            </div>
          </div>

          {/* Right Side - Camera Info */}
          <div className="flex items-center gap-3 md:gap-4 text-[8px] md:text-[9px] font-vhs text-white/70">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-white/50">ZOOM:</span>
              <span className="text-white/80 vhs-chromatic">1.0x</span>
            </div>
            <div className="flex items-center gap-0.5">
              <div className="w-0.5 md:w-1 h-2 md:h-3 bg-white/50" />
              <div className="w-0.5 md:w-1 h-3 md:h-4 bg-white/60" />
              <div className="w-0.5 md:w-1 h-4 md:h-5 bg-white/70" />
              <div className="w-0.5 md:w-1 h-5 md:h-6 bg-white/85" />
            </div>
          </div>
        </div>

        {/* VHS Bottom Scanline with glitch */}
        <div className="h-[2px] relative overflow-hidden">
          <motion.div 
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute h-full w-1/3 bg-gradient-to-r from-transparent via-red-600/60 to-transparent"
            style={{ filter: 'blur(1px)' }}
          />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
