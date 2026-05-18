import React from "react";

const categories = [
  {
    label: "Programming",
    accent: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-400/10",
    skills: ["Python", "C++", "JavaScript"],
  },
  {
    label: "AI Systems",
    accent: "text-purple-400",
    border: "border-purple-400/30",
    bg: "bg-purple-400/10",
    skills: [
      "Agentic AI",
      "Multi-Agent Orchestration",
      "LLMs",
      "RAG",
      "Tool-Calling",
      "Prompt Engineering",
    ],
  },
  {
    label: "LLM Tools",
    accent: "text-fuchsia-400",
    border: "border-fuchsia-400/30",
    bg: "bg-fuchsia-400/10",
    skills: ["LangGraph", "OpenAI API", "Gemini API", "Model Context Protocol (MCP)"],
  },
  {
    label: "Backend & Systems",
    accent: "text-cyan-400",
    border: "border-cyan-400/30",
    bg: "bg-cyan-400/10",
    skills: ["FastAPI", "Node.js", "Kafka", "REST APIs", "Asynchronous Pipelines"],
  },
  {
    label: "Frontend",
    accent: "text-green-400",
    border: "border-green-400/30",
    bg: "bg-green-400/10",
    skills: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Data & Retrieval",
    accent: "text-amber-400",
    border: "border-amber-400/30",
    bg: "bg-amber-400/10",
    skills: ["Vector Databases", "Embeddings", "ChromaDB"],
  },
  {
    label: "Databases",
    accent: "text-rose-400",
    border: "border-rose-400/30",
    bg: "bg-rose-400/10",
    skills: ["SQL", "MongoDB", "Supabase"],
  },
];

const Skills = () => {
  return (
    <div className="w-full px-4 pt-4 pb-10 flex flex-col items-center">
      <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
        Skills
      </h1>

      <div className="w-full max-w-3xl bg-black rounded-2xl p-8 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
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
