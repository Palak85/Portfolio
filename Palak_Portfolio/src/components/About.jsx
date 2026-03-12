import React from 'react';
import { personalInfo } from '../constants';

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-20 flex justify-center items-center overflow-hidden"
    >

      {/* Gradient Background Blob */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-emerald-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-5xl w-full relative z-10">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center italic">
          About <span className="text-emerald-500">Me</span>
        </h2>

        {/* MAIN CARD */}
        <div className="float-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl hover:shadow-emerald-500/10 transition duration-500">

          {/* ABOUT TEXT */}
          <p className="text-secondary text-lg leading-relaxed text-justify">
            {personalInfo.about}
          </p>

          {/* DIVIDER */}
          <div className="my-10 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"></div>

          {/* STATS / HIGHLIGHTS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-3xl font-bold text-emerald-500">5+</h3>
              <p className="text-secondary text-sm mt-1">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-emerald-500">10+</h3>
              <p className="text-secondary text-sm mt-1">Technologies</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-emerald-500">3+</h3>
              <p className="text-secondary text-sm mt-1">Certifications</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-emerald-500">B.Tech</h3>
              <p className="text-secondary text-sm mt-1">CSE Student</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;