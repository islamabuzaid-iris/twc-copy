"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function ScrollImagePanel({
  src,
  alt,
  eyebrow,
  title,
  body,
  align = "left",
  imageClassName = "",
}: {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  body: string;
  align?: "left" | "right";
  imageClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  const sideGradient =
    align === "right"
      ? "bg-gradient-to-l from-brand-black/70 via-transparent to-transparent"
      : "bg-gradient-to-r from-brand-black/70 via-transparent to-transparent";

  return (
    <div
      ref={ref}
      className="relative h-[420px] md:h-[560px] overflow-hidden rounded-sm bg-brand-black"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 1200px, 100vw"
          className={`object-cover ${imageClassName}`}
        />
      </motion.div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent"
        aria-hidden="true"
      />
      <div className={`absolute inset-0 ${sideGradient}`} aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: easeOut }}
        className={`absolute bottom-0 p-8 md:p-12 max-w-lg flex flex-col ${
          align === "right" ? "right-0 text-right items-end" : "left-0"
        }`}
      >
        <p className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-2">
          {eyebrow}
        </p>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2 text-balance">
          {title}
        </h3>
        <p className="text-gray-200 text-sm leading-relaxed">{body}</p>
      </motion.div>
    </div>
  );
}
