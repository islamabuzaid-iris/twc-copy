import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
      },
      colors: {
        brand: {
          orange: "#F5A623",
          orangeDark: "#C97D13",
          amber: "#7A4A0E",
          black: "#111111",
          charcoal: "#1A1815",
        },
      },
      boxShadow: {
        card: "0 1px 2px rgba(26, 24, 21, 0.04), 0 8px 24px -8px rgba(26, 24, 21, 0.10)",
        "card-hover": "0 4px 8px rgba(26, 24, 21, 0.06), 0 16px 32px -12px rgba(26, 24, 21, 0.16)",
        glow: "0 8px 30px -6px rgba(245, 166, 35, 0.35)",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
