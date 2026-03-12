import React, { useState } from "react";
import { Eye, Download, X, Code, Globe, Terminal, Box } from "lucide-react";
import { certificates, certificatesCategories } from "../constants";

const Certificates = () => {

  const [activeCert, setActiveCert] = useState(null);
  const [activeTab, setActiveTab] = useState("All");

  const filteredCertificates =
    activeTab === "All"
      ? certificates
      : certificates.filter((cert) => cert.category === activeTab);

  // Icon mapping for categories
  const getIcon = (tab) => {
    if (tab === "Programming") return <Code size={16} />;
    if (tab === "Web Development") return <Globe size={16} />;
    if (tab === "CPP" || tab === "Java") return <Terminal size={16} />;
    return <Box size={16} />;
  };

  return (
    <section id="certificates" className="py-24 px-6">

      {/* TITLE */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold italic">
          My <span className="text-emerald-500">Certifications</span>
        </h2>
        <p className="text-secondary mt-4">
          Verified achievements and professional skills
        </p>
      </div>

      {/* CATEGORY FILTER */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {certificatesCategories.map((tab) => (
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

      {/* CERTIFICATE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {filteredCertificates.map((cert, index) => (
          <div
            key={index}
            className="relative group rounded-3xl bg-tertiary/20 backdrop-blur-xl border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-emerald-400/40 hover:shadow-2xl"
          >

            {/* IMAGE */}
            <div
              className="overflow-hidden cursor-pointer"
              onClick={() => setActiveCert(cert)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 text-center">

              <h3 className="text-lg font-bold text-white mb-2">
                {cert.title}
              </h3>

              <p className="text-secondary text-sm mb-6 uppercase tracking-wider">
                {cert.issuer}
              </p>

              {/* BUTTONS */}
              <div className="flex justify-center gap-4">

                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-emerald-500 hover:text-white transition"
                >
                  <Eye size={20} />
                </a>

                <a
                  href={cert.pdf}
                  download
                  className="p-3 rounded-xl bg-white/5 hover:bg-white hover:text-black transition"
                >
                  <Download size={20} />
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* MODAL */}
      {activeCert && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-6">

          <div className="relative max-w-3xl w-full bg-tertiary/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">

            {/* CLOSE */}
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 text-white hover:text-red-400"
            >
              <X size={28} />
            </button>

            {/* IMAGE */}
            <img
              src={activeCert.image}
              alt={activeCert.title}
              className="w-full rounded-xl mb-6"
            />

            {/* INFO */}
            <div className="text-center">

              <h3 className="text-xl font-bold text-white mb-2">
                {activeCert.title}
              </h3>

              <p className="text-secondary mb-6">
                {activeCert.issuer}
              </p>

              {/* MODAL BUTTONS */}
              <div className="flex justify-center gap-4">

                <a
                  href={activeCert.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition"
                >
                  <Eye size={18}/> View
                </a>

                <a
                  href={activeCert.pdf}
                  download
                  className="flex items-center gap-2 px-5 py-2 bg-white hover:bg-gray-200 text-black rounded-lg transition"
                >
                  <Download size={18}/> Download
                </a>

              </div>

            </div>

          </div>

        </div>
      )}

    </section>
  );
};

export default Certificates;