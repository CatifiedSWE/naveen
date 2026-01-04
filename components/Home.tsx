
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, PHILOSOPHY, CAPABILITIES } from '../constants';
import HeroBackground from './HeroBackground';

const BrutalistHero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
      <HeroBackground />
      
      {/* Analog Overlays Specific to Hero */}
      <div className="absolute inset-0 pointer-events-none scanlines opacity-[0.12] z-10 vhs-flicker" />
      
      {/* Cinematic Poster Corner Elements */}
      {/* Top Left Corner */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-20 left-8 md:top-32 md:left-16 z-30 text-[9px] md:text-[10px] font-retro-mono tracking-[0.3em] text-white/60 uppercase space-y-2 heavy-grain"
        style={{ textShadow: '-1px 0 2px rgba(255, 0, 0, 0.2), 1px 0 2px rgba(0, 255, 255, 0.2)' }}
      >
        <div className="flex items-center gap-2">
          <span className="text-white/80">■</span>
          <span className="vhs-chromatic">BUILD . SHIP . ITERATE</span>
        </div>
        <div className="text-white/40 tracking-[0.2em] text-[8px] max-w-[180px] leading-relaxed">
          A DIGITAL CRAFTSMAN DESIGNING<br/>AND DEVELOPING FOR THE WEB
        </div>
      </motion.div>

      {/* Top Right Corner */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-20 right-8 md:top-32 md:right-16 z-30 text-right heavy-grain"
      >
        <div className="text-[9px] md:text-[10px] font-retro-mono tracking-[0.4em] text-white/70 mb-2 vhs-chromatic">
          2025
        </div>
        <div className="text-[8px] font-retro-mono tracking-widest text-white/40">
          PORTFOLIO.SYS
        </div>
      </motion.div>

      {/* Bottom Left Corner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-8 md:bottom-16 md:left-16 z-30"
      >
        <span className="text-white/80 text-xl md:text-2xl">✕</span>
      </motion.div>

      {/* Bottom Right Corner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 right-8 md:bottom-16 md:right-16 z-30"
      >
        <span className="text-white/80 text-xl md:text-2xl">✕</span>
      </motion.div>

      {/* Main Title Container with Enhanced Glow */}
      <div className="relative flex flex-col items-center z-20">
        {/* INTENSE GLOW LAYERS - Purple/Pink/Orange Gradient like "FLOW" */}
        
        {/* Outer Purple Glow - Most Blurred */}
        <motion.div
          animate={{ 
            opacity: [0.6, 0.8, 0.6],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 text-[11rem] md:text-[19rem] font-retro-poster tracking-tight leading-none text-purple-500 blur-[120px] pointer-events-none select-none text-center"
        >
          NAVEEN
        </motion.div>

        {/* Mid Purple-Pink Glow */}
        <motion.div
          animate={{ 
            opacity: [0.7, 0.9, 0.7],
            scale: [1, 1.03, 1]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="absolute inset-0 text-[11rem] md:text-[19rem] font-retro-poster tracking-tight leading-none text-fuchsia-400 blur-[80px] pointer-events-none select-none text-center"
        >
          NAVEEN
        </motion.div>

        {/* Inner Pink-Orange Glow */}
        <motion.div
          animate={{ 
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute inset-0 text-[11rem] md:text-[19rem] font-retro-poster tracking-tight leading-none text-pink-300 blur-[50px] pointer-events-none select-none text-center"
        >
          NAVEEN
        </motion.div>

        {/* Warm Orange Inner Glow */}
        <motion.div
          animate={{ 
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          className="absolute inset-0 text-[11rem] md:text-[19rem] font-retro-poster tracking-tight leading-none text-orange-200 blur-[30px] pointer-events-none select-none text-center"
        >
          NAVEEN
        </motion.div>

        {/* Chromatic Dispersion Layers */}
        {/* Red Channel Offset */}
        <motion.div
          animate={{ 
            x: [-3, 3, -3], 
            y: [1, -1, 1],
            opacity: [0.15, 0.22, 0.15] 
          }}
          transition={{ duration: 0.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 text-[11rem] md:text-[19rem] font-retro-poster tracking-tight leading-none text-red-400/40 blur-[3px] pointer-events-none select-none text-center"
        >
          NAVEEN
        </motion.div>
        
        {/* Cyan Channel Offset */}
        <motion.div
          animate={{ 
            x: [3, -3, 3], 
            y: [-1, 1, -1],
            opacity: [0.15, 0.22, 0.15] 
          }}
          transition={{ duration: 0.2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
          className="absolute inset-0 text-[11rem] md:text-[19rem] font-retro-poster tracking-tight leading-none text-cyan-300/35 blur-[3px] pointer-events-none select-none text-center"
        >
          NAVEEN
        </motion.div>

        {/* Sharp Primary Title with Enhanced Glow */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative text-[11rem] md:text-[19rem] font-retro-poster leading-none text-center vhs-jitter cinematic-glow vhs-chromatic"
          style={{ 
            color: '#f5f5dc',
            fontWeight: 400,
            letterSpacing: '0.05em',
            textShadow: `
              0 0 25px rgba(255, 255, 255, 0.5),
              0 0 50px rgba(236, 72, 153, 0.6),
              0 0 75px rgba(168, 85, 247, 0.7),
              0 0 100px rgba(147, 51, 234, 0.6),
              0 0 130px rgba(126, 34, 206, 0.5),
              -4px 0 6px rgba(255, 0, 0, 0.6),
              4px 0 6px rgba(0, 255, 255, 0.6)
            `
          }}
        >
          NAVEEN
        </motion.h1>

        {/* Secondary Line - Refined Spacing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-xs md:text-sm tracking-[1.8em] font-light uppercase text-zinc-400/90 -mt-4 md:-mt-8 ml-[1.8em] font-retro-mono"
          style={{ 
            textShadow: '-1px 0 2px rgba(255, 0, 0, 0.3), 1px 0 2px rgba(0, 255, 255, 0.3)' 
          }}
        >
          designer . developer
        </motion.div>
      </div>

      {/* Bottom Centered Info - Cinematic Style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="absolute bottom-24 md:bottom-32 w-full flex flex-col items-center gap-4 z-20"
      >
        <div className="text-center max-w-2xl px-8">
          <p className="text-[10px] md:text-[11px] tracking-[0.4em] font-light leading-relaxed uppercase text-zinc-500/80 font-retro-mono"
            style={{ textShadow: '-1px 0 2px rgba(255, 0, 0, 0.2), 1px 0 2px rgba(0, 255, 255, 0.2)' }}>
            BUILDING DIGITAL EXPERIENCES . SHIPPING PRODUCTS THAT MATTER
          </p>
        </div>
        <div className="flex items-center gap-6 text-[8px] md:text-[9px] font-vhs text-white/30 tracking-widest">
          <span className="vhs-chromatic">●</span>
          <span className="vhs-chromatic">AVAILABLE FOR PROJECTS</span>
          <span className="vhs-chromatic">●</span>
        </div>
      </motion.div>
    </section>
  );
};

const Home: React.FC = () => {
  return (
    <div className="relative z-10">
      <BrutalistHero />

      <main className="max-w-[1600px] mx-auto px-6 lg:px-16">
        {/* About Section */}
        <section className="py-48 md:py-80 max-w-5xl mx-auto text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="space-y-12"
          >
            <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-600 font-bold block mb-4">The Context</span>
            <p className="text-4xl md:text-8xl font-light leading-[0.95] tracking-tighter text-zinc-400">
              Refining the <span className="text-white italic font-semibold">grain</span>. 
              Designing <span className="text-white">logical paths</span> through technical fog.
            </p>
          </motion.div>
        </section>

        {/* Selected Work */}
        <section className="py-32">
          <div className="flex justify-between items-end mb-24">
            <h2 className="text-xs uppercase tracking-[0.6em] text-zinc-600 font-bold">Archives</h2>
            <span className="text-[10px] font-mono opacity-20 hidden md:block">RECORD_PTR_00{PROJECTS.length}</span>
          </div>
          <div className="space-y-0">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.1 }}
                className="group relative border-b border-zinc-800/40 py-24 flex flex-col md:flex-row md:items-center justify-between hover:bg-white/[0.015] transition-all duration-700 px-6 -mx-6 cursor-none"
              >
                <div className="flex items-start gap-12">
                  <span className="text-[11px] font-mono opacity-20 pt-4">{project.id}</span>
                  <div className="relative">
                    <h3 className="text-5xl md:text-9xl font-bold tracking-tighter mb-8 group-hover:translate-x-6 transition-transform duration-1000 ease-[0.16, 1, 0.3, 1]">{project.title}</h3>
                    <p className="max-w-xl text-zinc-500 text-2xl leading-relaxed font-light">{project.description}</p>
                  </div>
                </div>
                
                <div className="mt-12 md:mt-0 flex flex-col items-start md:items-end gap-10">
                  <div className="flex flex-wrap gap-2 md:justify-end max-w-xs">
                    {project.tech.map(t => (
                      <span key={t} className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 border border-zinc-800/80 px-4 py-2 bg-zinc-900/40 font-bold backdrop-blur-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    className="group/link flex items-center gap-4 text-xs uppercase tracking-[0.5em] text-zinc-400 hover:text-white transition-all font-extrabold"
                  >
                    <span>ACTIVATE</span>
                    <motion.span
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="text-2xl leading-none"
                    >
                      →
                    </motion.span>
                  </a>
                </div>
                
                <div className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-cyan-500 via-white to-fuchsia-500 opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-1000 blur-[1px]" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-32 border-t border-zinc-800/40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {CAPABILITIES.map((group) => (
              <motion.div 
                key={group.category}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative p-12 border border-white/5 bg-white/[0.005] hover:bg-white/[0.02] transition-colors group"
              >
                <div className="absolute top-0 left-0 w-12 h-[2px] bg-white/20" />
                <h3 className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 mb-16 font-black">{group.category}</h3>
                <ul className="space-y-8">
                  {group.skills.map(skill => (
                    <li key={skill} className="text-xl text-zinc-400 font-light tracking-tight group-hover:text-white transition-colors duration-500 group-hover:translate-x-2">{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Footer */}
        <footer className="py-64 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 to-transparent blur-[150px] -z-10" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-[1px] h-[150px] bg-gradient-to-b from-white/0 via-white/30 to-white/0 mb-24" />
            <h2 className="text-xs uppercase tracking-[0.8em] mb-16 text-zinc-600 font-bold">COMM_CHANNEL_OPEN</h2>
            <a 
              href="mailto:hello@naveen.studio" 
              className="text-4xl md:text-[12rem] font-black tracking-tighter hover:text-white transition-all duration-1000 mb-24 leading-none blur-[0.2px] hover:blur-0"
            >
              NAVEEN.STUDIO
            </a>
            
            <div className="flex flex-wrap justify-center gap-12 md:gap-32">
              {['Twitter', 'Github', 'LinkedIn', 'Instagram'].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="text-[11px] tracking-[0.6em] uppercase text-zinc-500 hover:text-white transition-all font-bold group flex flex-col items-center"
                >
                  {platform}
                  <span className="w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 mt-2" />
                </a>
              ))}
            </div>
          </motion.div>
        </footer>
      </main>

      <div className="fixed bottom-12 right-12 text-[10px] tracking-[1.2em] text-zinc-800 pointer-events-none [writing-mode:vertical-lr] uppercase font-black opacity-40">
        REFRACTION_OS // ENV_NAVEEN
      </div>
    </div>
  );
};

export default Home;
