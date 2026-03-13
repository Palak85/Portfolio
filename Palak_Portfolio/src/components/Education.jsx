import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science",
    institute: "Lovely Professional University",
    year: "2023 - 2027",
    description:
      "Focused on software development, web technologies, and problem solving using modern programming languages."
  },
  {
    degree: "Senior Secondary (Class XII)",
    institute: "Md Carmel School, Bihar",
    year: "2022 - 2023",
    description:
      "Completed higher secondary education with focus on Physics, Chemistry and Mathematics."
  },
  {
    degree: "Secondary Education (Class X)",
    institute: "Md Carmel School, Bihar",
    year: "2020 - 2021",
    description:
      "Built a strong academic foundation and developed interest in technology."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6">

      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold italic">
          My <span className="text-emerald-500">Education</span>
        </h2>
        <p className="text-secondary mt-4">
          Academic journey and learning milestones
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative border-l border-white/10">

        {education.map((item, index) => (
          <div key={index} className="mb-12 ml-8">

            {/* Circle Icon */}
            <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-emerald-500 rounded-full ring-4 ring-primary">
              <GraduationCap size={16} />
            </span>

            {/* Card */}
            <div className="bg-tertiary/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:border-emerald-500/40 transition">

              <h3 className="text-xl font-bold dark:text-white-500">
                {item.degree}
              </h3>

              <p className="text-secondary text-sm mt-1">
                {item.institute}
              </p>

              <div className="flex items-center gap-2 text-emerald-400 text-sm mt-2">
                <Calendar size={14} />
                {item.year}
              </div>

              <p className="text-secondary mt-4 text-sm leading-relaxed">
                {item.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Education;
