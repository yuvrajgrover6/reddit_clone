import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        buttonPrimary: "#d93a00",
        buttonSecondary: "#ebecef",
        textSecondary: "#351e06",
        placeholder: "#727390",
      },
      fontFamily: { custom: ["'Noto Sans', sans-serif"] },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
