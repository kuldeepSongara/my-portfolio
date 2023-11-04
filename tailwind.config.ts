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
      letterSpacing: {
        extrawidest: ".375em",
      },
      fontSize: {
        xs: '0.55rem',
        sm: '0.675rem',
        base: '0.8rem',
        lg: '0.925rem',
        xl: '1.05rem',
        '2xl': '1.3rem',
        '3xl': '1.675rem',
        '4xl': '2.05rem',
        '5xl': '2.8rem',
        '6xl': '3.55rem',
        '7xl': '4.3rem',
      },
      screens: {
        'sm': '640px',
        'md': '900px',
        'lg': '1024px',  
        'xl': '1280px',  
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
};
export default config;
