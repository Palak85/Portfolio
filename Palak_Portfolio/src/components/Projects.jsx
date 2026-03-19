import React, { useState } from "react";
import { Github, Link as LinkIcon, Code, Globe, Terminal, Box } from "lucide-react";
import { projects, projectCategories } from "../constants";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const getIcon = (tab) => {
    if (tab === "Python") return <Code size={16} />;
    if (tab === "Web Development") return <Globe size={16} />;
    if (tab === "CPP" || tab === "Java") return <Terminal size={16} />;
    return <Box size={16} />;
  };

  return (
    <section id="projects" className="py-20 px-6">
      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold italic">
          My <span className="text-emerald-500">Projects</span>
        </h2>
      </div>

      {/* FILTER TABS */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {projectCategories.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all border
              ${
                activeTab === tab
                  ? "bg-emerald-500 border-emerald-500 text-white"
                  : "bg-transparent border-white/20 text-secondary hover:border-emerald-500 hover:-translate-y-0.5"
              }`}
          >
            {getIcon(tab)} {tab}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-3xl bg-tertiary/20 backdrop-blur-xl border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-emerald-400/40 hover:shadow-2xl"
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 text-center flex flex-col items-center">
              {/* TAGS */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1 rounded-full border border-theme-secondary/30 dark:border-white/30 text-[12px] text-theme-secondary dark:text-[#d1d4e0]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* TITLE & DESCRIPTION */}
              <h3 className="text-xl font-bold mb-2 text-theme-main dark:text-white">
                {project.name}
              </h3>
              <p className="text-theme-secondary dark:text-[#d1d4e0] text-sm mb-6">
                {project.description}
              </p>

              {/* LINKS */}
              <div className="flex gap-4 mt-auto">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center p-3 rounded-xl bg-white/5 hover:bg-emerald-500 hover:text-white transition"
                  >
                    <LinkIcon size={20} />
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center p-3 rounded-xl bg-white/5 hover:bg-white hover:text-black transition"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
