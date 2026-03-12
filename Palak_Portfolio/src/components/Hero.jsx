import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import { ChevronDown } from 'lucide-react';
import profilePhoto from '../assets/images/Palaks.jpeg';
// Import your animation file
import robotAnimation from '../assets/animations/hello.json';
import { magneticEffect, resetMagnet } from "../utils/magneticEffect";

<button
  onMouseMove={magneticEffect}
  onMouseLeave={resetMagnet}
  className="px-6 py-3 bg-emerald-500 text-white rounded-lg"
>
  View Projects
</button>

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ["Web Developer", "C++ Enthusiast", "Full Stack Developer"];

  useEffect(() => {
    let timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  const handleTyping = () => {
    const i = loopNum % phrases.length;
    const fullPhrase = phrases[i];

    if (!isDeleting) {
      setText(fullPhrase.substring(0, text.length + 1));
      if (text === fullPhrase) setTimeout(() => setIsDeleting(true), 1500);
    } else {
      setText(fullPhrase.substring(0, text.length - 1));
      if (text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }
  };

  return (
    <section id="home" className="relative h-screen flex flex-col lg:flex-row items-center justify-between px-10 md:px-24 pt-20 overflow-hidden">
      
      {/* Background Shooting Star */}
      <div className="shooting-star top-32 right-1/4"></div>

      {/* LEFT SIDE: Text Content */}
    <div className="z-10 flex-1">
  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
   <span className="text-emerald-500 italic">Palak Kumari</span>
  </h1>

  <div className="h-12 mt-4">
    <p className="text-2xl md:text-3xl font-mono text-secondary">
      {text}
      <span className="text-emerald-500 animate-pulse font-bold">|</span>
    </p>
  </div>

  {/* Resume Buttons */}
  <div className="mt-10 flex flex-wrap gap-4">

    <a href="/resume.pdf" target="_blank" onMouseMove={magneticEffect}
  onMouseLeave={resetMagnet} className="border border-slate-300 dark:border-slate-700 px-6 py-3 rounded-lg hover:bg-emerald-500 hover:border-emerald-500 hover:text-white bg-emerald-500 border-emerald-500 hover:-translate-y-0.5 transition duration-300 inline-flex items-center gap-2"> View Resume </a>

    <a href="/resume.pdf" download className="border border-slate-300 dark:border-slate-700 px-6 py-3 rounded-lg hover:bg-emerald-500 hover:border-emerald-500 hover:text-white hover:-translate-y-0.5 transition duration-300 inline-flex items-center gap-2">
Download Resume </a>

  </div>
</div>

      {/* RIGHT SIDE: YOUR LOTTIE ANIMATION */}
      {/* <div className="flex-1 flex justify-center lg:justify-end">
        <div className="w-[300px] md:w-[500px] drop-shadow-[0_0_30px_rgba(145,94,255,0.3)]">
          <Lottie 
            animationData={robotAnimation} 
            loop={true} 
            className="w-full h-full"
          />
        </div>
      </div> */}
      <div className="flex-1 flex justify-center lg:justify-end">

      <img
  src={profilePhoto}
  alt="profile"
  className="mx-auto mb-6 w-[320px] h-[320px] rounded-full object-cover border-4 border-emerald-500 shadow-lg hover:scale-105 transition duration-300 float-animation"
  loading="lazy"
/>
      </div>

      {/* SCROLL HINT */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
        <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2 text-white">Scroll Down !!!</p>
        <ChevronDown size={20} className="animate-bounce text-white" />
      </div>

    </section>
  );
};

export default Hero;
