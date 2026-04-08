import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheckCircle } from 'react-icons/fi';

export default function SupportModal({ data, onClose }) {
  if (!data) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }} 
          animate={{ opacity: 1, scale: 1, y: 0 }} 
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:bg-fuchsia-600 hover:text-white transition-colors"
          >
            <FiX size={20} />
          </button>

          <div className="p-10 md:p-14">
            <div className="text-fuchsia-600 mb-6 text-4xl">
              {data.icon}
            </div>
            
            <h2 className="text-3xl font-black text-zinc-950 dark:text-white mb-2 leading-tight">
              {data.title}
            </h2>
            <p className="text-fuchsia-600 font-bold text-sm uppercase tracking-widest mb-8">
              {data.company} • {data.date}
            </p>

            <div className="space-y-8">
              {/* Deskripsi Singkat */}
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {data.desc}
              </p>

              {/* List Detail Pekerjaan/Tugas */}
              <div className="space-y-4">
                <h4 className="text-sm font-black text-zinc-900 dark:text-white uppercase tracking-tighter">Key Responsibilities:</h4>
                <ul className="space-y-3">
                  {data.details?.map((detail, index) => (
                    <li key={index} className="flex gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                      <FiCheckCircle className="text-fuchsia-600 mt-1 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack / Skills */}
              <div className="flex flex-wrap gap-2 pt-4">
                {data.tech?.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[10px] font-bold rounded-xl border border-zinc-200 dark:border-zinc-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}