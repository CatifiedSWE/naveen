
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, PHILOSOPHY, CAPABILITIES } from '../constants';
import HeroBackground from './HeroBackground';

const BrutalistHero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
      <HeroBackground />
      
      {/* Analog Overlays Specific to Hero */}
      <div className="absolute inset-0 pointer-events-none scanlines opacity-[0.15] z-10" />
      
      <div className="relative flex flex-col items-center z-20">
        {/* VHS Chromatic Jitter Layer (Behind) */}
        <motion.div
          animate={{ x: [-2, 2, -2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 0.15, repeat: Infinity }}
          className="absolute inset-0 text-[12rem] md:text-[20rem] font-black tracking-tighter leading-none text-rose-500/30 blur-[4px] pointer-events-none select-none text-center"
          style={{ fontFamily: 'Inter' }}
        >
          NAVEEN
        </motion.div>

        {/* Sharp Primary Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative text-[12rem] md:text-[20rem] font-black tracking-tighter leading-none text-white text-center vhs-jitter"
          style={{ fontFamily: 'Inter' }}
        >
          NAVEEN
        </motion.h1>

        {/* Secondary Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-xs md:text-sm tracking-[1.5em] font-medium uppercase text-zinc-400 -mt-2 md:-mt-6 ml-[1.5em]"
        >
          designer . developer
        </motion.div>
      </div>

      {/* Bottom Anchored Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="absolute bottom-16 md:bottom-20 w-full px-12 md:px-24 flex flex-col md:flex-row justify-between items-end gap-8"
      >
        <div className="max-w-md">
          <p className="text-[11px] md:text-[13px] tracking-[0.3em] font-medium leading-relaxed uppercase text-zinc-500">
            BUILDING WEBSITES, INTERFACES, AND SYSTEMS THAT FEEL ALIVE.
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-[10px] tracking-[0.4em] font-bold text-zinc-700">COORD // 37.77 / -122.41</span>
          <span className="text-[10px] tracking-[0.4em] font-bold text-white/20 uppercase">Available for select projects</span>
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
