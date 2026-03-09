import React from "react";

const categories = [
  {
    label: "AI / ML",
    accent: "text-purple-400",
    border: "border-purple-400/30",
    bg: "bg-purple-400/10",
    skills: ["Python", "LangChain", "OpenAI API", "Vector Databases"],
  },
  {
    label: "Backend",
    accent: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-400/10",
    skills: ["FastAPI", "Node.js", "Kafka", "SQL", "Docker"],
  },
  {
    label: "Frontend",
    accent: "text-green-400",
    border: "border-green-400/30",
    bg: "bg-green-400/10",
    skills: ["JavaScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Tools",
    accent: "text-orange-400",
    border: "border-orange-400/30",
    bg: "bg-orange-400/10",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

const Skills = () => {
  return (
    <div className="w-full px-4 pt-4 pb-10 flex flex-col items-center">
      <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
        Skills
      </h1>

      <div className="w-full max-w-2xl bg-black rounded-2xl p-8 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
        <div className="flex flex-col gap-6">
          {categories.map((cat) => (
            <div key={cat.label}>
              <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${cat.accent}`}>
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm text-white border ${cat.border} ${cat.bg}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
