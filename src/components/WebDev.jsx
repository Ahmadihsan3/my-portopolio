import React from 'react';
import { FiGlobe, FiTerminal, FiShoppingBag, FiLayers } from 'react-icons/fi';
import { SiReact, SiTailwindcss, SiJavascript, SiVite, SiFirebase, SiFramer } from 'react-icons/si';

export const webProjects = [
  {
    title: "MissionFE01 - Harisenin",
    desc: "Platform edukasi kursus online dengan fitur navigasi modul interaktif dan sistem progres belajar.",
    github: "https://github.com/ahmad-ihsan/mission-fe",
    techIcons: [
      { icon: <SiReact className="text-cyan-400" />, name: "React" },
      { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
      { icon: <SiVite className="text-purple-500" />, name: "Vite" }
    ],
    icon: <FiGlobe />
  },
  {
    title: "Digital Quiz System",
    desc: "Aplikasi ujian berbasis web dengan timer, pengacakan soal, dan kalkulasi skor otomatis.",
    github: "https://github.com/ahmad-ihsan/quiz-system",
    techIcons: [
      { icon: <SiReact className="text-cyan-400" />, name: "React" },
      { icon: <SiJavascript className="text-yellow-400" />, name: "JS" },
      { icon: <SiFramer className="text-pink-500" />, name: "Motion" }
    ],
    icon: <FiTerminal />
  },
  {
    title: "E-Commerce Gadget",
    desc: "Toko online perangkat IT dengan fitur keranjang belanja dan integrasi payment gateway dummy.",
    github: "https://github.com/ahmad-ihsan/it-store",
    techIcons: [
      { icon: <SiReact className="text-cyan-400" />, name: "React" },
      { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
      { icon: <SiFirebase className="text-orange-500" />, name: "Firebase" }
    ],
    icon: <FiShoppingBag />
  },
  {
    title: "Personal Dashboard",
    desc: "Dashboard manajemen tugas harian untuk memantau status perbaikan perangkat IT.",
    github: "https://github.com/ahmad-ihsan/it-dashboard",
    techIcons: [
      { icon: <SiReact className="text-cyan-400" />, name: "React" },
      { icon: <SiJavascript className="text-yellow-400" />, name: "JS" },
      { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" }
    ],
    icon: <FiLayers />
  }
];