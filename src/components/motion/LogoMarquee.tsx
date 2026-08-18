"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

type Logo = { src: string; alt: string; large?: boolean };

export function LogoMarquee({ logos }: { logos: Logo[] }) {
  const reduceMotion = useReducedMotion();
  const track = [...logos, ...logos];

  if (reduceMotion) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
        {logos.map((logo) => (
          <div key={logo.alt} className={`relative shrink-0 ${logo.large ? "h-20 w-52" : "h-12 w-36"}`}>
            <Image src={logo.src} alt={logo.alt} fill className="object-contain grayscale opacity-70" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <motion.div
        className="flex items-center gap-16 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        {track.map((logo, i) => (
          <div
            key={`${logo.alt}-${i}`}
            aria-hidden={i >= logos.length}
            className={`relative shrink-0 ${logo.large ? "h-20 w-52" : "h-12 w-36"}`}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
