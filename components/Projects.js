import React from 'react';
import { ProjectCard } from './ProjectCard';

const Projects = () => {
  return (
    <div className="w-full px-4 py-10 flex flex-col items-center">
      <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-10">
        Recent Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <ProjectCard
          title="Automated AI-Influencer"
          desc="Agentic pipeline converting raw ideas into short-form videos — LLM reasoning layer generates scripts and visual prompts through a multi-step generative workflow."
          live="https://drive.google.com/file/d/1ZAQAcGKp2hUSAg0P29Z4uC0H22OerZkc/view?usp=sharing"
          repo="https://github.com/prat-amaze/Automated-AI-influencer"
          image="/Ai-influencer.png"
        />
        <ProjectCard
          title="BlogSpace"
          desc="A sleek markdown-powered blog app with real-time content publishing using Next.js."
          live="https://blog-space-taupe.vercel.app/"
          repo="https://github.com/prat-amaze/BlogSpace"
          image="/blogspace.png"
        />
      </div>
    </div>
  );
};

export default Projects;
