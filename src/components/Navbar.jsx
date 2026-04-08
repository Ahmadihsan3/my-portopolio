import React from 'react';
import { NavLink } from 'react-router-dom'; // PENTING: Gunakan NavLink
import { SunIcon, MoonIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Navbar({ light, dark }) {
  // Fungsi helper untuk memberikan gaya CSS dinamis pada menu yang aktif
  const getLinkStyle = ({ isActive }) => 
    `transition-colors ${
      isActive 
        ? 'text-fuchsia-600 font-bold' // Gaya saat halaman AKTIF
        : 'text-zinc-900 dark:text-zinc-300 hover:text-fuchsia-600' // Gaya saat TIDAK AKTIF
    }`;

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
      
      {/* KIRI: Menggunakan NavLink untuk navigasi dinamis */}
      <div className="flex gap-8 font-semibold text-sm tracking-wide">
        <NavLink to="/" className={getLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/about" className={getLinkStyle}>
          About
        </NavLink>
        <NavLink to="/projects" className={getLinkStyle}>
          Projects
        </NavLink>
      </div>

      {/* KANAN (Socials & Theme) */}
      <div className="flex items-center gap-5">
        <a href="https://github.com/ahmad-ihsan" target="_blank" rel="noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-white">
          <FaGithub className="w-5 h-5" />
        </a>
        <a href="https://linkedin.com/in/ahmad-ihsan" target="_blank" rel="noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600">
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-green-500">
          <FaWhatsapp className="w-5 h-5" />
        </a>
        <a href="mailto:email@example.com" className="text-zinc-600 dark:text-zinc-400 hover:text-fuchsia-600">
          <EnvelopeIcon className="w-5 h-5" />
        </a>
        
        <div className="h-6 w-[1px] bg-zinc-300 dark:bg-zinc-700 mx-1"></div>
        
        <button onClick={() => dark(!light)} className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 transition-transform active:scale-95">
          {light ? <SunIcon className="w-6 h-6 text-yellow-500" /> : <MoonIcon className="w-6 h-6 text-fuchsia-400" />}
        </button>
      </div>
    </nav>
  );
}