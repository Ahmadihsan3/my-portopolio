import React from 'react';
import { FiShield, FiLock, FiUserCheck } from 'react-icons/fi';

export const securityExp = [
  {
    title: "Endpoint & Desktop Security",
    company: "Bank Mandiri (via SIM)",
    date: "2026",
    desc: "Memastikan kepatuhan keamanan pada setiap perangkat desktop di lingkungan perbankan.",
    details: [
      "Implementasi standarisasi keamanan PC sesuai SOP Bank Mandiri yang ketat.",
      "Manajemen hak akses pengguna (Privileged Access Management) untuk membatasi instalasi ilegal.",
      "Update rutin sistem keamanan antivirus (Endpoint Protection) dan Firewall.",
      "Audit berkala terhadap aplikasi yang terinstal untuk mencegah malware."
    ],
    icon: <FiLock />,
    tech: ["Endpoint Security", "Windows Policy", "User Management"]
  },
  {
    title: "Web Security Exploration",
    company: "Learning Path",
    date: "2026",
    desc: "Fokus pada penguatan pertahanan digital pada aplikasi web modern.",
    details: [
      "Mempelajari konsep dasar enkripsi data (SSL/TLS) dan perlindungan informasi.",
      "Implementasi Secure Authentication & Authorization pada project React.",
      "Pemahaman tentang pencegahan kerentanan umum seperti Cross-Site Scripting (XSS).",
      "Eksplorasi penggunaan environment variables untuk mengamankan API Keys."
    ],
    icon: <FiShield />,
    tech: ["Auth System", "Data Privacy", "Web Protection"]
  }
];