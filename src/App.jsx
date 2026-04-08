import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import useTheme from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [light, dark] = useTheme();

  return (
    <Router>
      <div className="min-h-screen w-full bg-white dark:bg-black transition-colors duration-500 overflow-x-hidden">
        <Navbar light={light} dark={dark} />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;