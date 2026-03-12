import React, { useState } from "react";
import { skills, skillCategories } from "../constants";
import { FaGithub } from "react-icons/fa";
import { magneticEffect, resetMagnet } from "../utils/magneticEffect";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSkills =
    activeTab === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  const getIcon = (skill) => {

    // Special case for GitHub
    if (skill.name === "GitHub") {
      return <FaGithub className={`w-10 h-10 text-${skill.fill}`} />;
    }

    // If icon is a URL (Devicons)
    if (typeof skill.icon === "string") {
      return (
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-10 h-10 object-contain"
        />
      );
    }

    // If icon is a React component (Lucide soft skills)
    const Icon = skill.icon;
    return <Icon className="w-10 h-10 text-emerald-400" />;
  };

  return (
    <section id="skills" className="px-6">

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold italic">
          My <span className="text-emerald-500">Skills</span>
        </h2>
      </div>

      {/* FILTER TABS */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto">
        {skillCategories.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            onMouseMove={magneticEffect}
            onMouseLeave={resetMagnet}
            className={`px-6 py-2 rounded-full text-sm font-medium hover:-translate-y-0.5 transition-all duration-300 border
            ${
              activeTab === tab
                ? "bg-emerald-500 border-emerald-500 text-white shadow-lg"
                : "bg-tertiary/20 border-white/10 text-secondary hover:border-emerald-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-tertiary/20 rounded-3xl border border-white/5 hover:border-emerald-500 hover:-translate-y-0.5 transition-all duration-500 group shadow-xl"
          >

            {/* Icon */}
            <div className="flex items-center justify-center mb-4 transform group-hover:scale-110 transition duration-500">
              {getIcon(skill)}
            </div>

            {/* Skill Name */}
            <p className="text-secondary group-hover:text-white font-medium text-sm transition tracking-wider text-center">
              {skill.name}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;