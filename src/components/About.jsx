import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiShield, FiGlobe, FiCpu, FiSmartphone } from 'react-icons/fi';

export default function About() {
  const expertise = [
    { 
      icon: <FiCode />, 
      title: "Web Dev", 
      subtitle: "Front-end, Back-end, Fullstack Development",
      desc: "Membangun antarmuka modern yang responsif dan performan."
    },
    { 
      icon: <FiShield />, 
      title: "Security", 
      subtitle: "Cyber Protection & Auth",
      desc: "Fokus pada keamanan otentikasi dan perlindungan data dasar."
    },
    { 
      icon: <FiGlobe />, 
      title: "Network", 
      subtitle: "Switching & LAN Management",
      desc: "Konfigurasi perangkat jaringan dan monitoring konektivitas."
    },
    { 
      icon: <FiCpu />, 
      title: "Infrastructure", 
      subtitle: "IT Support & Desktop Engineer",
      desc: "PC Standardization, pemeliharaan infrastruktur, dan troubleshooting hardware."
    }
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-8 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        
        {/* Bagian Profil Singkat */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black text-zinc-950 dark:text-white tracking-tighter mb-6"
          >
            Ahmad Ihsan
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
          >
            Menjembatani infrastruktur fisik dengan kode digital. Memulai karier sebagai IT Support & IT Engineer yang menangani sistem kritikal perbankan, kini saya bertransformasi menjadi pengembang yang menjelajahi efisiensi Web & Mobile Development serta ketahanan sistem melalui Security.
          </motion.p>
        </div>

        {/* Grid Keahlian (Pola 4 Kotak) */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Ikon Tengah (Mobile Dev) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block group">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="relative w-28 h-28 bg-white dark:bg-zinc-900 border-2 border-fuchsia-500 rounded-3xl flex flex-col items-center justify-center shadow-2xl cursor-help transition-all duration-500"
            >
              <FiSmartphone className="text-fuchsia-600 text-3xl group-hover:mb-2 transition-all" />
              <span className="text-[10px] font-black text-fuchsia-600 uppercase">Mobile Dev</span>
              
              {/* Tooltip/Teks Deskripsi saat Hover */}
              <div className="absolute -bottom-16 w-48 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 dark:bg-white text-white dark:text-black text-[10px] py-2 px-3 rounded-lg text-center font-medium shadow-xl pointer-events-none">
                Membuat tampilan mobile secara responsive
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 dark:bg-white rotate-45"></div>
              </div>
            </motion.div>
          </div>

          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              className="group bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-12 rounded-[3rem] transition-all hover:shadow-2xl hover:border-fuchsia-500/30 flex flex-col items-center text-center"
            >
              <div className="text-5xl text-fuchsia-600 mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-2 italic">
                {item.title}
              </h3>
              <p className="text-fuchsia-500 font-bold text-xs uppercase tracking-widest mb-4">
                {item.subtitle}
              </p>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Info Tambahan di Bawah */}
        <div className="mt-20 flex justify-center gap-4">
           {["React", "Tailwind", "Git", "Hardware", "Networking"].map((skill) => (
             <span key={skill} className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 text-xs font-bold rounded-full border border-zinc-200 dark:border-zinc-700">
               {skill}
             </span>
           ))}
        </div>

      </div>
    </section>
  );
}