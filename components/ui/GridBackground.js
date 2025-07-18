import { cn } from "@/lib/utils";
import React from "react";

export default function GridBackgroundDemo({ children }) {
  return (
    <div className="relative flex w-full justify-center bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Content goes here */}
      <div className="relative z-20 w-full">{children}</div>
    </div>
  );
}
