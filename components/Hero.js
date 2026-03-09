import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { IconBrandGithub, IconBrandLinkedin, IconBrandLeetcode } from "@tabler/icons-react";

const Hero = () => {

  return (
    <div className="relative flex flex-col items-center justify-center px-4 pt-16 pb-8 sm:pt-20 sm:pb-10 min-h-screen text-white overflow-hidden">
      <Spotlight
        className="absolute top-10 md:top-0 md:translate-x-[3.75rem] rotate-12"
        fill="white"
      />
      <Spotlight
        className="absolute top-20 md:top-0 -translate-x-[2.25rem] -rotate-12 scale-x-[-1]"
        fill="white"
      />

      <div className="z-10 flex flex-col items-center text-center gap-2 md:gap-4 max-w-screen-sm mx-auto px-4">
        <img
          className="w-32 h-32 md:w-52 md:h-52 rounded-full"
          src="/Image.png"
          alt="Profile picture"
        />
        <h1 className="text-3xl md:text-6xl font-semibold text-[#cad5e2] mt-0">
          Pratyush Khengle
        </h1>
        <h3 className="text-lg md:text-2xl font-semibold text-[#cad5e2] mt-0">
          ML & Operations Engineer
        </h3>
        <TextGenerateEffect words="IIT Madras grad building agentic AI systems — LLM pipelines, RAG, and intelligent automation." />

        <div className="mt-8 sm:mt-7 flex justify-center gap-6 sm:gap-8 md:gap-10">
          <a href="https://github.com/prat-amaze/" target="_blank" rel="noopener noreferrer" className="cursor-pointer transition-transform duration-200 hover:-translate-y-1">
            <HoverBorderGradient containerClassName="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
              <IconBrandGithub className="w-6 h-6 sm:w-8 sm:h-8 text-white" style={{ color: "#ffffff" }} />
            </HoverBorderGradient>
          </a>
          <a href="https://www.linkedin.com/in/pratyush-khengle-b53837169/" target="_blank" rel="noopener noreferrer" className="cursor-pointer transition-transform duration-200 hover:-translate-y-1">
            <HoverBorderGradient containerClassName="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
              <IconBrandLinkedin className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: "#0A66C2" }} />
            </HoverBorderGradient>
          </a>
          <a href="https://leetcode.com/u/pratyushkhengle/" target="_blank" rel="noopener noreferrer" className="cursor-pointer transition-transform duration-200 hover:-translate-y-1">
            <HoverBorderGradient containerClassName="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
              <IconBrandLeetcode className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: "#FFA116" }} />
            </HoverBorderGradient>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Hero;
