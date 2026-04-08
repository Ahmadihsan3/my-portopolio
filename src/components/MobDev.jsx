import React from 'react';
import { FiSmartphone, FiMapPin, FiShield, FiBell } from 'react-icons/fi';
import { SiReact, SiFirebase, SiExpo, SiGooglemaps, SiJavascript } from 'react-icons/si';

export const mobileProjects = [
  {
    title: "Attendance App (GPS)",
    desc: "Aplikasi absensi karyawan dengan validasi geofencing lokasi kantor berbasis React Native.",
    github: "https://github.com/ahmad-ihsan/attendance-gps",
    techIcons: [
      { icon: <SiReact className="text-cyan-400" />, name: "React Native" },
      { icon: <SiExpo className="text-zinc-900 dark:text-white" />, name: "Expo" },
      { icon: <SiGooglemaps className="text-green-500" />, name: "Maps" }
    ],
    icon: <FiMapPin />
  },
  {
    title: "IT Inventory Mobile",
    desc: "Scan barcode perangkat hardware menggunakan kamera smartphone untuk pendataan aset gudang.",
    github: "https://github.com/ahmad-ihsan/it-inventory",
    techIcons: [
      { icon: <SiReact className="text-cyan-400" />, name: "React Native" },
      { icon: <SiFirebase className="text-orange-500" />, name: "Firebase" }
    ],
    icon: <FiSmartphone />
  },
  {
    title: "Security Auth App",
    desc: "Aplikasi otentikasi dua faktor (2FA) sederhana untuk keamanan login akun internal.",
    github: "https://github.com/ahmad-ihsan/auth-security",
    techIcons: [
      { icon: <SiReact className="text-cyan-400" />, name: "React Native" },
      { icon: <SiJavascript className="text-yellow-400" />, name: "JS" }
    ],
    icon: <FiShield />
  },
  {
    title: "Service Ticket Notifier",
    desc: "Menerima notifikasi push real-time ketika ada laporan kerusakan PC dari user.",
    github: "https://github.com/ahmad-ihsan/ticket-app",
    techIcons: [
      { icon: <SiReact className="text-cyan-400" />, name: "React Native" },
      { icon: <SiFirebase className="text-orange-500" />, name: "Push" }
    ],
    icon: <FiBell />
  }
];