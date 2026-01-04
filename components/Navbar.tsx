
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
      const month = now.toLocaleString('en-US', { month: 'short' }).toUpperCase();
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      setCurrentDate(`${day} ${month} ${year}`);
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[2px]"
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-4 border-b border-white/5">
        {/* Left - IP Address */}
        <div className="flex items-center gap-2 text-xs md:text-sm font-vhs text-green-400/90 tracking-wider">
          <span className="text-green-500/70">ADDR</span>
          <span className="text-green-400">{ipAddress}</span>
        </div>

        {/* Center - Date & Time */}
        <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm font-vhs">
          <span className="text-amber-200 tracking-widest">{currentDate}</span>
          <span className="text-white/40">|</span>
          <span className="text-amber-200/80 tracking-widest">{currentTime}</span>
        </div>

        {/* Right - Empty or Could add something else */}
        <div className="w-20 md:w-32"></div>
      </div>
    </motion.nav>
  );
};

export default Navbar;