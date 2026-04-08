import { useState, useEffect } from 'react';

export default function useTheme() {
  // TRUE = Terang (Matahari), FALSE = Gelap (Bulan)
  const [light, setLight] = useState(true); 

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (light) {
      // Saat Matahari (Light Mode), HAPUS class dark
      root.classList.remove('dark');
    } else {
      // Saat Bulan (Dark Mode), TAMBAH class dark
      root.classList.add('dark');
    }
  }, [light]);

  return [light, setLight];
}