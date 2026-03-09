import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconBinaryTree, IconRocket, IconRobot } from "@tabler/icons-react";

export function ActivityGrid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto mb-32">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Learning Agentic AI",
    description:
      "Currently deep-diving into agentic AI frameworks — LangChain, CrewAI, and multi-agent system design.",
    header: (
      <div className="w-full h-36 rounded-xl bg-gradient-to-br from-violet-950 to-indigo-900 flex items-center justify-center">
        <IconRobot className="w-16 h-16 text-violet-300" />
      </div>
    ),
    icon: <IconRobot className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "ML & Operations Engineer @Chubb",
    description: "Building LLM agent workflows and AI-driven pipelines.",
    header: (
      <img
        src="https://www.chubb.com/content/dam/chubb-sites/chubb/nz-en/life/images/nz-chubb-article-banner-purple.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg"
        alt="Chubb"
        className="w-full h-36 object-cover rounded-xl bg-black p-2"
      />
    ),
    icon: <IconBinaryTree className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Agentic AI Projects",
    description:
      "Building one production-grade AI system every quarter — agentic workflows, multi-modal pipelines, and LLM-powered automation.",
    header: (
      <div className="w-full h-36 rounded-xl bg-gradient-to-br from-emerald-950 to-teal-900 flex items-center justify-center">
        <IconRocket className="w-16 h-16 text-emerald-300" />
      </div>
    ),
    icon: <IconRocket className="h-4 w-4 text-neutral-500" />,
  },
];
