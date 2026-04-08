import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiGithub, 
  FiCpu, 
  FiInfo, 
  FiGlobe, 
  FiShield, 
  FiSmartphone, 
  FiCode, 
  FiExternalLink 
} from 'react-icons/fi';

// Import Data
import { webProjects } from './WebDev';
import { mobileProjects } from './MobDev';
import { supportExp } from './SupportData'; 
import { networkExp } from './NetworkData'; 
import { securityExp } from './SecurityData'; 

// Import Komponen Modal UI
import SupportModal from './SupportModal'; 

export default function Projects() {
  const [filter, setFilter] = useState('web');
  const [selectedItem, setSelectedItem] = useState(null);

  // Fungsi untuk mengambil data berdasarkan filter yang aktif
  const getActiveData = () => {
    switch (filter) {
      case 'web': return webProjects;
      case 'mobile': return mobileProjects;
      case 'infrastructure': return supportExp;
      case 'network': return networkExp;
      case 'security': return securityExp;
      default: return [];
    }
  };

  const activeData = getActiveData();

  // Fungsi untuk menentukan icon default jika data tidak menyediakan icon spesifik
  const renderIcon = (type) => {
    switch (type) {
      case 'network': return <FiGlobe size={26} />;
      case 'security': return <FiShield size={26} />;
      case 'mobile': return <FiSmartphone size={26} />;
      case 'web': return <FiCode size={26} />;
      default: return <FiCpu size={26} />;
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen pt-32 pb-20 px-8 bg-white dark:bg-black transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center bg-zinc-100 dark:bg-zinc-900 p-2 rounded-3xl border border-zinc-200 dark:border-zinc-800 w-fit mx-auto mb-16 gap-1">
          {['web', 'mobile', 'infrastructure', 'network', 'security'].map((type) => (
            <button 
              key={type} 
              onClick={() => {
                setFilter(type);
                setSelectedItem(null); // Reset modal saat pindah tab
              }}
              className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all capitalize ${
                filter === type 
                ? 'bg-white dark:bg-zinc-800 text-fuchsia-600 shadow-xl' 
                : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-white'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Grid Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {activeData.map((item) => {
              const isDevTab = filter === 'web' || filter === 'mobile';

              return (
                <motion.div 
                  key={item.title} 
                  layout 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => {
                    if (isDevTab && item.github) {
                      window.open(item.github, '_blank', 'noreferrer');
                    } else {
                      setSelectedItem(item);
                    }
                  }}
                  className="p-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] hover:border-fuchsia-500/50 transition-all cursor-pointer shadow-xl group flex flex-col h-full"
                >
                  {/* Icon Header */}
                  <div className="p-4 bg-zinc-200 dark:bg-zinc-800 text-zinc-600 rounded-2xl mb-8 group-hover:bg-fuchsia-600 group-hover:text-white w-fit transition-colors">
                    {item.icon || renderIcon(filter)}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-fuchsia-600 transition-colors">
                        {item.title}
                      </h3>
                      {isDevTab && <FiExternalLink className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />}
                    </div>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  {/* Footer Kartu */}
                  <div className="mt-auto pt-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                    {isDevTab ? (
                      /* Tampilan Tech Stack untuk Web/Mobile */
                      <div className="flex gap-3 text-xl text-zinc-400">
                        {item.techIcons?.map((t, idx) => (
                          <span key={idx} title={t.name} className="hover:text-fuchsia-500 transition-colors">
                            {t.icon}
                          </span>
                        ))}
                      </div>
                    ) : (
                      /* Tampilan Label untuk Infrastructure/Net/Sec */
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Company</span>
                        <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">{item.company}</span>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2 text-fuchsia-600 text-xs font-black uppercase tracking-tighter">
                      {isDevTab ? (
                        <><FiGithub size={18} /> GitHub</>
                      ) : (
                        <><FiInfo size={16} /> Details</>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Render Modal secara bersyarat */}
      <SupportModal 
        data={selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
    </motion.section>
  );
}