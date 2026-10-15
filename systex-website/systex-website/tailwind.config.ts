import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1240px" },
    },
    extend: {
      colors: {
        // Brand navy sampled from the Systex logo
        brand: {
          50: "#EEF3FA",
          100: "#D6E2F2",
          200: "#AEC4E4",
          300: "#7C9ED1",
          400: "#4D78BA",
          500: "#2A5A9F",
          600: "#1A4583",
          700: "#103668",
          800: "#0A2A55",
          900: "#072044",
          950: "#04142C",
        },
        // Dark grey / slate for text and dark surfaces
        ink: {
          50: "#F6F7F9",
          100: "#ECEEF2",
          200: "#D5DAE1",
          300: "#B0B8C4",
          400: "#7F8A9A",
          500: "#5D6878",
          600: "#465161",
          700: "#374151",
          800: "#1F2733",
          900: "#141A23",
          950: "#0B0F15",
        },
        // Gold accent from the emblem — use sparingly
        gold: {
          300: "#EBCB75",
          400: "#DDB24F",
          500: "#C99A33",
          600: "#A67C24",
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', "Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ['"Manrope Variable"', "Manrope", '"Inter Variable"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,24,40,0.04), 0 4px 16px -4px rgba(16,24,40,0.08)",
        lift: "0 2px 4px rgba(16,24,40,0.04), 0 16px 40px -12px rgba(7,32,68,0.22)",
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "blueprint-grid-dark":
          "linear-gradient(rgba(10,42,85,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(10,42,85,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
    },
  },
  plugins: [],
};

export default config;
