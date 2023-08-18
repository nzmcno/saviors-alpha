import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      text: {
        default: "#FFFFFF",
      },
      colors: {
        topNavbar: {
          background: "#0072CE",
          text: "#FFFFFF",
          hoverText: "#E1E1E1",
        },
        sidebar: {
          background: "#232323",
          text: "#FFFFFF",
          hoverText: "#E1E1E1",
        },
        contentArea: {
          background: "#F7F7F7",
          text: "#333333",
        },
        primary: "#0065FF", // Deep Blue
        secondary: "#00C4FF", // Light Blue
        accent: "#FFDD00", // Yellow
        neutral: "#333333", // Dark Gray
        base100: "#FFFFFF", // White
        info: "#42A5F5", // Blue
        success: "#66BB6A", // Green
        warning: "#FFB74D", // Orange
        error: "#EF5350", // Red
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
