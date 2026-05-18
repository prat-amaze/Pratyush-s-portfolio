import React from "react";
import { IconSchool, IconBriefcase } from "@tabler/icons-react";

const timeline = [
  {
    icon: <IconSchool className="w-4 h-4" />,
    role: "B.Tech",
    company: "Indian Institute of Technology Madras",
    period: "2021 – 2025",
    location: "Chennai, India",
    detail: "CGPA: 8.14",
    accent: "text-yellow-400",
    dot: "bg-yellow-400",
    border: "border-yellow-400/20",
    bg: "bg-yellow-400/5",
  },
  {
    icon: <IconBriefcase className="w-4 h-4" />,
    role: "Full Stack Engineer",
    company: "ACR Office, IIT Madras",
    period: "Jun 2023 – Jul 2023",
    location: "Chennai, India",
    detail:
      "Built a PHP/MySQL workflow system streamlining task management for a 150+ person workforce.",
    accent: "text-sky-400",
    dot: "bg-sky-400",
    border: "border-sky-400/20",
    bg: "bg-sky-400/5",
  },
  {
    icon: <IconBriefcase className="w-4 h-4" />,
    role: "AI / LLM Research Intern",
    company: "Reomnify",
    period: "Dec 2023 – Jan 2024",
    location: "Remote",
    detail:
      "Built a production RAG pipeline over 200+ docs with Sentence Transformers + ChromaDB; Nanonets OCR ingestion expanded the corpus 3× and cut cross-document research time by 70%.",
    accent: "text-emerald-400",
    dot: "bg-emerald-400",
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/5",
  },
  {
    icon: <IconBriefcase className="w-4 h-4" />,
    role: "Machine Learning & Operations Engineer",
    company: "Chubb",
    period: "Jun 2025 – Present",
    location: "Bangalore, India",
    detail:
      "Designing and shipping production multi-agent systems for ML reliability and operations automation.",
    accent: "text-violet-400",
    dot: "bg-violet-400",
    border: "border-violet-400/20",
    bg: "bg-violet-400/5",
  },
];

const Experience = () => {
  return (
    <div className="w-full px-4 pt-4 pb-10 flex flex-col items-center">
      <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
        Experience & Education
      </h1>

      <div className="relative w-full max-w-2xl bg-black rounded-2xl p-8 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
        {/* Vertical line */}
        <div className="absolute left-12 top-10 bottom-10 w-px bg-white/10" />

        <div className="flex flex-col gap-8">
          {timeline.map((item, i) => (
            <div key={i} className="relative pl-12">
              {/* Dot */}
              <div
                className={`absolute left-[11px] top-4 w-[10px] h-[10px] rounded-full ${item.dot} ring-2 ring-black`}
              />

              {/* Card */}
              <div className={`rounded-xl p-5 border ${item.border} ${item.bg}`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${item.accent} mb-1`}>
                      {item.icon}
                      {item.company}
                    </span>
                    <h3 className="text-white font-semibold text-base">{item.role}</h3>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-neutral-400 text-xs">{item.period}</p>
                    <p className="text-neutral-500 text-xs">{item.location}</p>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
