"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const easeOut = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export function RevealGroup({
  children,
  className,
  mode = "scroll",
}: {
  children: ReactNode;
  className?: string;
  mode?: "scroll" | "mount";
}) {
  const trigger =
    mode === "mount"
      ? { animate: "show" }
      : { whileInView: "show", viewport: { once: true, margin: "-80px" } };

  return (
    <motion.div className={className} variants={container} initial="hidden" {...trigger}>
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
