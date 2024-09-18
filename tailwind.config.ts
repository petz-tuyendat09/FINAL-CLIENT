import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto", "system-ui"],
      serif: ["Lora", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Roboto"],
      body: ['"Roboto"'],
      nunito: ["Nunito Sans", "sans-serif"]
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1400px",
        "2xl": "1880px",
      },
    },
    extend: {
      colors: {
        yellow: "#ECB407",
        primary: "#F4E6DB",
        cream: "rgb(255 241 228)",
        black: "#141414",
        "primary-hover": "#c5c0e2",
        secondary: "#5BD0F1",
        teriary: "#EDB507",
        gray: "#F7F7F7",
        "gray-darker": "#F2F2F2",
        "gray-text": "#B6B6B6",
        peach: 'rgb(250, 244, 242)',
        darkPeach: '#ffe6d4',
        red: '#ed6435'
      },
      backgroundImage: {},
      boxShadow: {
        custom: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
      },
    },
  },
  plugins: [],
};
export default config;
