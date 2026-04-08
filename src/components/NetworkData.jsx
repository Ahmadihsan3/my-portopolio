import React from 'react';
import { FiGlobe, FiServer, FiActivity } from 'react-icons/fi';

export const networkExp = [
  {
    title: "Network Infrastructure Support",
    company: "PT Swakarya Insan Mandiri (Bank Mandiri)",
    date: "2026 - Present",
    desc: "Menangani operasional jaringan harian untuk memastikan konektivitas perbankan tetap stabil.",
    details: [
      "Melakukan Switch Replacement pada rak server sesuai jadwal maintenance rutin.",
      "Manajemen pengkabelan (Cable Management) untuk efisiensi jalur data dan kerapihan rak.",
      "Troubleshooting konektivitas LAN dan penanganan masalah jaringan pada end-user.",
      "Monitoring performa perangkat jaringan dan ketersediaan link data."
    ],
    icon: <FiGlobe />,
    tech: ["LAN", "Switching", "Patch Panel", "Cable Management"]
  },
  {
    title: "Connectivity Setup",
    company: "Internal Infrastructure Project",
    date: "2025",
    desc: "Implementasi jalur komunikasi data untuk kebutuhan operasional unit kerja.",
    details: [
      "Instalasi dan konfigurasi Access Point untuk area kerja.",
      "Pengecekan integritas jalur kabel backbone (UTP/Fiber) menggunakan tester.",
      "Konfigurasi IP Address statis dan manajemen DHCP client."
    ],
    icon: <FiServer />,
    tech: ["TCP/IP", "Access Point", "Infrastructure"]
  }
];