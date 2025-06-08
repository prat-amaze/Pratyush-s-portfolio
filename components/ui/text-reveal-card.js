"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}) => {
  const cardRef = useRef(null);
  const textRef = useRef(null);
  const [revealWidth, setRevealWidth] = useState(0);
  const [textBox, setTextBox] = useState({ left: 0, width: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      const { left, width } = textRef.current.getBoundingClientRect();
      setTextBox({ left, width });
    }
  }, []);

  const handleMove = (clientX) => {
    const relativeX = clientX - textBox.left;
    const speedFactor = 1.5; // Try values like 1.5, 2, 3 to reveal faster
const percentage = Math.max(0, Math.min((relativeX / textBox.width) * 100 * speedFactor, 100));
    setRevealWidth(percentage);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    handleMove(e.touches[0].clientX);
  };

  const rotateDeg = (revealWidth - 50) * 0.1;

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => {
        setIsMouseOver(false);
        setRevealWidth(0);
      }}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsMouseOver(true)}
      onTouchEnd={() => {
        setIsMouseOver(false);
        setRevealWidth(0);
      }}
      onTouchMove={handleTouchMove}
      className={cn(
        "bg-[#1d1c20] border border-white/[0.08] rounded-lg p-8 relative overflow-hidden",
        className
      )}
    >
      {children}
      <div className="h-full relative flex items-center overflow-hidden justify-center">
        {/* Revealed Text Layer */}
        <motion.div
          style={{ width: "100%" }}
          animate={{
            clipPath: `inset(0 ${100 - revealWidth}% 0 0)`,
            opacity: revealWidth > 0 ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute bg-[#1d1c20] z-20"
        >
          <p
            ref={textRef}
            className="text-center flex justify-center items-center text-base sm:text-4xl py-10 font-bold text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300"
            style={{ textShadow: "4px 4px 15px rgba(0,0,0,0.5)" }}
          >
            {revealText}
          </p>
        </motion.div>

        {/* Divider Line */}
        <motion.div
          animate={{
            left: `${revealWidth}%`,
            rotate: `${rotateDeg}deg`,
            opacity: revealWidth > 0 ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="h-40 w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent absolute z-40"
        />

        {/* Hidden Text + Stars */}
        <div className="w-full text-center [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
          <p
            ref={textRef}
            className="text-center flex justify-center items-center text-4xl py-10 font-bold bg-clip-text text-transparent bg-[#323238]"
          >
            {text}
          </p>
          <MemoizedStars />
        </div>
      </div>
    </div>
  );
};

export const TextRevealCardTitle = ({ children, className }) => (
  <h2 className={twMerge("text-white text-lg mb-2", className)}>{children}</h2>
);

export const TextRevealCardDescription = ({ children, className }) => (
  <p className={twMerge("text-[#a9a9a9] text-sm", className)}>{children}</p>
);

const Stars = () => {
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setMounted(true);

    const randomMove = () => Math.random() * 4 - 2;
    const randomOpacity = () => Math.random();
    const random = () => Math.random();

    const newStars = [...Array(80)].map((_, i) => ({
      key: `star-${i}`,
      initialTop: `${random() * 100}%`,
      initialLeft: `${random() * 100}%`,
      animateTop: `calc(${random() * 100}% + ${randomMove()}px)`,
      animateLeft: `calc(${random() * 100}% + ${randomMove()}px)`,
      opacity: randomOpacity(),
      duration: random() * 10 + 20,
    }));

    setStars(newStars);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0">
      {stars.map((star) => (
        <motion.span
          key={star.key}
          animate={{
            top: star.animateTop,
            left: star.animateLeft,
            opacity: star.opacity,
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: star.initialTop,
            left: star.initialLeft,
            width: "2px",
            height: "2px",
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 1,
          }}
        />
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);
