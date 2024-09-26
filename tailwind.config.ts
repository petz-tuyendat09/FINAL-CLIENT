import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-roboto)', 'system-ui', 'sans-serif'],
      serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      display: ['var(--font-roboto)', 'system-ui', 'sans-serif'],
      body: ['var(--font-roboto)', 'system-ui', 'sans-serif'],
    },
    borderRadius: {
      button: "20px",
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },

    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1360px",
        "2xl": "1720px",
      },
    },
    extend: {
      colors: {
        primary: "#D6E9FB",
        black: "#1d1d1d",
        "primary-hover": "#fff5e7",
        secondary: "#F4EFEC",
        gray: "#F7F7F7",
        "gray-darker": "#F2F2F2",
        "gray-text": "#69696C",
        "border-color": "#DAE9F3",
        warning: "#B11935",
        success: "#20CE5D",
      },
      fontSize: {
        display: "4rem",
        h1: "3rem",
        h2: "2rem",
        h3: "1.625rem",
        h4: "1.25rem",
        base: "1rem",
      },

      backgroundImage: {
        "services-image-1": "url('/images/services-image-1.png')",
        "services-image-2": "url('/images/services-image-2.png')",
        "services-image-3": "url('/images/services-image-3.png')",
        "services-image-4": "url('/images/services-image-4.png')",
      },
      boxShadow: {
        custom:
          "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
