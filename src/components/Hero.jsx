import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiShield, 
  FiCpu, 
  FiTerminal, 
  FiGlobe, 
  FiFileText 
} from 'react-icons/fi';

import MyCV from '../assets/CV_Ahmad_Ihsan.pdf';

const IT_PILLARS = [
  { icon: <FiCode />, label: "Web Dev", desc: "Front-end Development" },
  { icon: <FiShield />, label: "Security", desc: "Cyber Protection" },
  { icon: <FiGlobe />, label: "Network", desc: "Switching & LAN" },
  { icon: <FiCpu />, label: "Infrastructure", desc: "Desktop Engineer" },
  { icon: <FiTerminal />, label: "Fullstack", desc: "Exploration" },
];

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 20 }}
      className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-white dark:bg-black transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-[1fr,1.2fr] gap-12 items-center">
        
        <div className="space-y-8 z-20">
          <motion.div 
            initial={{ x: -50 }} 
            animate={{ x: 0 }}
            className="flex items-center gap-2 text-fuchsia-600 font-mono font-bold uppercase tracking-widest text-sm"
          >
            <span className="w-12 h-[2px] bg-fuchsia-600"></span>
            IT Engineer & Web Developer
          </motion.div>
          
          <h1 className="text-6xl md:text-7xl font-black tracking-tight text-zinc-950 dark:text-white leading-[1.1]">
            My Portfolio <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
              Ahmad Ihsan.
            </span>
          </h1>

          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed">
            Berangkat dari fondasi kuat di <strong>IT Infrastructure</strong>, saya kini mendedikasikan kreativitas saya untuk membangun <strong>Web Development & Mobile Development</strong> yang modern. Menghubungkan stabilitas sistem dengan keindahan kode digital.
          </p>

          <div className="flex gap-4">
            <motion.a 
              href={MyCV}
              target="_blank" 
              rel="noopener noreferrer"
              download="CV_Ahmad_Ihsan.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-zinc-950 dark:bg-white text-white dark:text-black rounded-2xl font-bold shadow-xl flex items-center gap-3 transition-transform cursor-pointer"
            >
              <FiFileText className="text-xl" />
              <span>CV Saya</span>
            </motion.a>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
            {IT_PILLARS.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  rotateY: 10,
                  boxShadow: "0 20px 40px rgba(192, 38, 211, 0.15)" 
                }}
                className={`p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2rem] flex flex-col items-center text-center group transition-all duration-300 ${
                  i === 4 ? "col-span-2 md:col-span-1" : "" 
                }`}
              >
                <div className="text-4xl text-fuchsia-600 mb-4 group-hover:scale-125 transition-transform duration-500">
                  {pillar.icon}
                </div>
                <h3 className="font-bold text-sm text-zinc-900 dark:text-white whitespace-nowrap">
                  {pillar.label}
                </h3>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-500 mt-1 leading-tight font-medium uppercase tracking-tighter">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        </div>
      </div>
    </motion.section>
  );
}