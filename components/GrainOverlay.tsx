
import React from 'react';

const GrainOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[999] pointer-events-none overflow-hidden">
      <style>
        {`
          @keyframes grain-animation {
            0% { transform: translate(0, 0); }
            10% { transform: translate(-1%, -1%); }
            20% { transform: translate(1%, 2%); }
            30% { transform: translate(-2%, -1%); }
            40% { transform: translate(1%, 1%); }
            50% { transform: translate(-1%, -2%); }
            60% { transform: translate(2%, 1%); }
            70% { transform: translate(-1%, -1%); }
            80% { transform: translate(1%, 2%); }
            90% { transform: translate(-2%, -1%); }
            100% { transform: translate(0, 0); }
          }
          .grain-active {
            animation: grain-animation 0.2s steps(2) infinite;
          }
        `}
      </style>
      
      {/* 8% opacity grain - CONFIDENT & SUBTLE */}
      <div className="absolute inset-[-100%] opacity-[0.08] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat grain-active" />
      
      {/* Subtle chromatic lens aberration */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,rgba(255,0,0,0.1),rgba(0,255,0,0.1),rgba(0,0,255,0.1))] bg-[length:200%_100%] animate-[pulse_15s_infinite]" />
    </div>
  );
};

export default GrainOverlay;
