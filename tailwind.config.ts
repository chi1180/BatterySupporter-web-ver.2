import type {Config} from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        "main-color": "#000000",
        "secondary-color": "#ffffff",
        "link-color": "#3e3e8d",
      },
      backgroundColor: {
        "main-color": "#ffffff",
        "secondary-color": "#d9d9d9",
        "accent-color": "#E00606",
      },
      borderColor: {
        "main-color": "#ffffff",
        "secondary-color": "#d9d9d9",
      }
    }
  },
  plugins: [],
} satisfies Config;
