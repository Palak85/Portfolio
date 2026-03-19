import React, { useState } from 'react';
import { Github, Link as LinkIcon, Code, Globe, Terminal, Box } from 'lucide-react';
import { projects, projectCategories } from '../constants';

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  // Icon mapping for project categories
  const getIcon = (tab) => {
    if (tab === "Python") return <Code size={16} />;
    if (tab === "Web Development") return <Globe size={16} />;
    if (tab === "CPP" || tab === "Java") return <Terminal size={16} />;
    return <Box size={16} />;
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold italic">My <span className="text-emerald-500">Projects</span></h2>
      </div>

      {/* FILTER TABS */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {projectCategories.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all border
              ${activeTab === tab 
                ? "bg-emerald-500 border-emerald-500  text-white " 
                : "bg-transparent border-white/20 text-secondary hover:border-emerald-500 hover:-translate-y-0.5"}`}
          >
            {getIcon(tab)} {tab}
          </button>
        ))}
      </div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-theme-card dark:bg-[#0a1224] rounded-3xl overflow-hidden border border-white/10 dark:border-white/20 flex flex-col group hover:border-accent/30 transition-all duration-500">
            {/* Project Image */}
            <div className="h-52 w-full overflow-hidden">
              <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow text-center items-center">
              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-1 rounded-full border border-theme-secondary/30 dark:border-white/30 text-[12px] text-theme-secondary dark:text-[#d1d4e0]">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold mb-4 text-theme-main dark:text-white">{project.name}</h3>
              <p className="text-theme-secondary dark:text-[#d1d4e0] text-sm leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex gap-6 mt-auto">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="text-theme-main dark:text-white hover:text-accent transition transform hover:scale-110">
                    <LinkIcon size={24} />
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noreferrer" className="text-theme-main dark:text-white hover:text-accent transition transform hover:scale-110">
                  <Github size={24} />
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
