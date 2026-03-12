import React from "react";
import { Trophy, Star, Award } from "lucide-react";

const achievements = [
  {
    title: "Leetcode 50 Day Badge 2026",
    description:
      "Maintained consistent problem-solving streak on Leetcode, demonstrating dedication to improving coding skills.",
    icon: Trophy
  },
  {
    title: "4 Star on Hackerrank in C++",
    description:
      "Demonstrated strong problem-solving skills and coding proficiency on Hackerrank.",
    icon: Star
  },
  {
    title: "3 Star on Hackerrank in Java",
    description:
      "Demonstrated strong problem-solving skills and coding proficiency on Hackerrank.",
    icon: Award
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6">

      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold italic">
          My <span className="text-emerald-500">Achievements</span>
        </h2>

        <p className="text-secondary mt-4">
          Highlights of my academic and technical journey
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {achievements.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-tertiary/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-2xl group"
            >

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition">
                  <Icon size={32} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-secondary text-sm leading-relaxed">
                {item.description}
              </p>

            </div>
          );
        })}
      </div>

    </section>
  );
};

export default Achievements;