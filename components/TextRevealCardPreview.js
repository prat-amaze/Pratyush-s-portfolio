"use client";
import React from "react";
import { TextRevealCard } from "./ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center h-[200px] rounded-2xl w-full">
      <TextRevealCard
        text="Got an idea?"
        revealText="Let’s make it real."
        className="w-[500px] h-[175px]" 
      />
    </div>
  );
}
