"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 24,
  x = 0,
  className,
  mode = "scroll",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
  mode?: "scroll" | "mount";
}) {
  const initial = { opacity: 0, y, x };
  const animateProps =
    mode === "mount"
      ? { animate: { opacity: 1, y: 0, x: 0 } }
      : { whileInView: { opacity: 1, y: 0, x: 0 }, viewport: { once: true, margin: "-80px" } };

  return (
    <motion.div
      className={className}
      initial={initial}
      {...animateProps}
      transition={{ duration: 0.6, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
