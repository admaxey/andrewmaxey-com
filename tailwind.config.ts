import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0b",
        surface: "#141416",
        "surface-elevated": "#1c1c1f",
        border: "#2a2a2e",
        "text-primary": "#fafafa",
        "text-secondary": "#a1a1aa",
        "text-muted": "#71717a",
        accent: "#22d3ee",
        "accent-muted": "#0e7490",
      },
      fontFamily: {
        display: ["\"Instrument Serif\"", "Georgia", "serif"],
        sans: ["\"Geist\"", "system-ui", "sans-serif"],
        mono: ["\"Geist Mono\"", "monospace"],
      },
      fontSize: {
        "display-xl": ["5rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
    },
  },
  plugins: [],
};

export default config;
