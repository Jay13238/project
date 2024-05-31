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
        primary: {
          DEFAULT: "#251e1f",
        },
        secondary: {
          DEFAULT: "#764b52",
        },

        sub: {
          DEFUALT: "#d0af7d",
        },

        hover: {
          100: "#b99664",
        },

        accent: {
          100: "#e7e3e0",
          200: "#d1b9b2",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
