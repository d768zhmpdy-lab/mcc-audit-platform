import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17212b",
        panel: "#f6f7f9",
        brand: "#0f766e",
        warning: "#b45309",
        danger: "#b91c1c"
      },
      boxShadow: {
        soft: "0 12px 30px rgba(23, 33, 43, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
