import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          950: "#050505",
          900: "#0a0a0a",
          800: "#111111",
          700: "#1a1a1a",
          600: "#222222",
          500: "#2a2a2a",
        },
        gold: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#C9A96E",
          600: "#B8864A",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
          DEFAULT: "#C9A96E",
          light: "#E8C98A",
          dark: "#9A7A4E",
        },
        cream: "#F5F0E8",
        "warm-white": "#FAF7F2",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-cormorant)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-cormorant)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "1" }],
        "11xl": ["12rem", { lineHeight: "1" }],
        "12xl": ["14rem", { lineHeight: "1" }],
      },
      letterSpacing: {
        "widest-2": "0.25em",
        "widest-3": "0.35em",
        "widest-4": "0.5em",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "slide-left": "slideLeft 0.8s ease forwards",
        "slide-right": "slideRight 0.8s ease forwards",
        "spin-slow": "spin 20s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        flicker: "flicker 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideLeft: {
          from: { opacity: "0", transform: "translateX(-40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          from: { opacity: "0", transform: "translateX(40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A96E 0%, #E8C98A 50%, #C9A96E 100%)",
        "dark-gradient": "linear-gradient(180deg, #050505 0%, #0a0a0a 100%)",
        "hero-gradient": "linear-gradient(180deg, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.7) 60%, rgba(5,5,5,1) 100%)",
      },
      boxShadow: {
        "gold-glow": "0 0 30px rgba(201, 169, 110, 0.3)",
        "gold-glow-lg": "0 0 60px rgba(201, 169, 110, 0.4)",
        "inner-dark": "inset 0 2px 20px rgba(0,0,0,0.5)",
      },
      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "bounce-out": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
