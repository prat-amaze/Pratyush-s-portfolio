"use client";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { TextRevealCardPreview } from "./TextRevealCardPreview";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { useState } from "react";

export function GlowingEffectDemo() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("pratyushkhengle@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Hide after 2 seconds
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full px-4 gap-6">
      <div className="w-full lg:w-[500px] flex justify-center">
        <GridItem1 />
      </div>

      <div className="w-full lg:w-1/3 flex flex-col gap-4 justify-center items-center">
        <GridItem2 />
        <GridItem3 copied={copied} handleCopy={handleCopy} />
      </div>
    </div>
  );
}

const GridItem1 = () => (
  <div className="relative rounded-2xl border p-2 md:rounded-3xl md:p-3 w-[600px] flex justify-center">
    <GlowingEffect
      spread={40}
      glow={true}
      disabled={false}
      proximity={64}
      inactiveZone={0.01}
    />
    <img
      src="https://leetcard.jacoblin.cool/pratyushkhengle?theme=dark&font=baloo&ext=contest"
      alt="LeetCode Contest Stats"
      className="w-[full] h-auto object-contain rounded-xl p-1 md:p-2 shadow-[0px_0px_27px_0px_#2D2D2D]"
    />
  </div>
);

const GridItem2 = () => (
  <div className="text-white flex justify-center items-center relative h-[200px] w-[full] max-w-md rounded-2xl md:rounded-3xl md:p-3">
    <GlowingEffect
      spread={40}
      glow={true}
      disabled={false}
      proximity={64}
      inactiveZone={0.01}
    />
    <div className="w-full">
      <TextRevealCardPreview />
    </div>
  </div>
);

const GridItem3 = ({ copied, handleCopy }) => (
  <div className="text-white flex justify-center items-center relative h-[200px] w-full max-w-md rounded-2xl md:rounded-3xl md:p-3">
    <GlowingEffect
      spread={40}
      glow={true}
      disabled={false}
      proximity={64}
      inactiveZone={0.01}
    />
    <BackgroundGradientAnimation>
      <div className="absolute z-40 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 text-center space-y-6">
        <p className="text-lg md:text-xl bg-clip-text drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Do you want to Collaborate?
        </p>

        <button
          onClick={handleCopy}
          className="cursor-pointer text-base md:text-lg px-5 py-2 rounded-xl bg-white text-black hover:bg-gray-200 transition duration-200 font-semibold shadow-lg"
        >
          {copied ? "Email copied!" : "Copy my email address"}
        </button>
      </div>
    </BackgroundGradientAnimation>
  </div>
);
