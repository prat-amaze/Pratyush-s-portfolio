"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconX, IconSparkles } from "@tabler/icons-react";

// Scale factor: iframe renders at 1/SCALE size internally so more content fits
const SCALE = 0.87;
const INV = `${(100 / SCALE).toFixed(4)}%`;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-chat", handler);
    return () => window.removeEventListener("open-chat", handler);
  }, []);

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Open personal assistant"
        className="hidden sm:flex fixed bottom-5 right-10 z-[55] items-center gap-2 px-4 h-12 rounded-full border border-white/10 text-white text-sm font-medium"
        style={{
          background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
          boxShadow: "0 0 24px rgba(124,58,237,0.45), 0 4px 16px rgba(0,0,0,0.5)",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-2"
            >
              <IconX className="w-4 h-4" />
              <span>Close</span>
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-2"
            >
              <IconSparkles className="w-4 h-4" />
              <span>Ask Prat</span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[56] bg-black/50 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="fixed z-[57] flex flex-col rounded-2xl overflow-hidden right-2 sm:right-10"
              style={{
                bottom: "72px",
                width: "min(540px, calc(100vw - 16px))",
                height: "min(calc(100vh - 120px), 580px)",
                border: "1px solid rgba(124,58,237,0.35)",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.06), 0 0 40px rgba(124,58,237,0.2), 0 20px 60px rgba(0,0,0,0.7)",
              }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-4 py-3 shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.25) 0%, rgba(37,99,235,0.2) 100%)",
                  borderBottom: "1px solid rgba(124,58,237,0.25)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white text-sm font-medium">
                    Pratyush&apos;s AI Assistant
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-neutral-400 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10"
                  aria-label="Close"
                >
                  <IconX className="w-4 h-4" />
                </button>
              </div>

              {/* Scaled iframe container */}
              <div className="flex-1 relative overflow-hidden bg-black">
                <iframe
                  src="https://personal-assistant-fa8x.onrender.com"
                  title="Pratyush's Personal Assistant"
                  allow="clipboard-write"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: INV,
                    height: INV,
                    transform: `scale(${SCALE})`,
                    transformOrigin: "top left",
                    border: "none",
                  }}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
