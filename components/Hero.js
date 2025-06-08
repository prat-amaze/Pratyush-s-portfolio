import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Hero = () => {
  const techStack = [
    { name: "Next.js", icon: "/nextjs.svg" },
    { name: "MongoDB", icon: "/mongodb.svg" },
    { name: "Tailwind", icon: "/tailwindcss.svg" },
    { name: "React", icon: "/react.svg" },
    { name: "JS", icon: "/JS.svg" },
    { name: "HTML", icon: "/html.svg", hideOnMobile: true },
    { name: "CSS", icon: "/CSS.svg", hideOnMobile: true },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center px-4 py-16 sm:py-20 min-h-screen text-white overflow-hidden">
      {/* Spotlights */}
      <Spotlight
        className="absolute top-10 md:top-0 md:translate-x-[3.75rem] rotate-12"
        fill="white"
      />
      <Spotlight
        className="absolute top-20 md:top-0 -translate-x-[2.25rem] -rotate-12 scale-x-[-1]"
        fill="white"
      />

      {/* Content */}
      <div className="z-10 flex flex-col items-center text-center gap-2 md:gap-4 max-w-screen-sm mx-auto px-4">
        <img
          className="w-32 h-32 md:w-52 md:h-52 rounded-full"
          src="/dp.png"
          alt="Profile picture"
        />
        <h1 className="text-3xl md:text-6xl font-semibold text-[#cad5e2] mt-0">
          Pratyush Khengle
        </h1>
        <h2 className="text-3xl md:text-6xl font-semibold text-[#cad5e2] mt-0">
          FullStack Developer
        </h2>
        <TextGenerateEffect words="Learning and Growing everyday. I turn coffee into code and ideas into reality." />

        <div className="mt-8 flex-wrap sm:flex-nowrap sm:mt-7 flex justify-center gap-6 sm:gap-8 md:gap-10">
          {techStack.map((tech) => (
            <HoverBorderGradient
              key={tech.name}
              containerClassName={cn(
                "w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center",
                tech.hideOnMobile ? "hidden sm:flex" : ""
              )}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain"
              />
            </HoverBorderGradient>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
