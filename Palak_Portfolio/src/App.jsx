import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import GlowCursor from './components/GlowCursor';
import Reveal from './components/Reveal';
import MouseLight from "./components/MouseLight";
import Education from './components/Education';
import Achievements from './components/Achievements';


function App() {
  return (
    <div className="relative">
      {/* 1. Background Grid & Glow */}
      <div className="starfield"></div>
      <div className="grid-bg"></div>
      <MouseLight />
      <GlowCursor />
      
      <Navbar />

      <main className="space-y-10">
        {/* We don't wrap Hero in Reveal to make it visible immediately */}
        <Hero />

        <Reveal> <About /> </Reveal>
        <Reveal> <Skills /> </Reveal>
        <Reveal> <Education /> </Reveal>
        <Reveal> <Achievements /> </Reveal>
        <Reveal> <Projects /> </Reveal>
        <Reveal> <Certificates /> </Reveal>
        <Reveal> <Contact /> </Reveal>
      </main>

      <footer className="py-10 text-center border-t border-theme text-theme-secondary text-sm">
        © {new Date().getFullYear()} Palak Kumari • All rights reserved.
      </footer>
    </div>
  );
}

export default App;