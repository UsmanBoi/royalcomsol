/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ["class", '[data-theme="dark"]'], // Enable dark mode via class or data-theme attribute
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      // Min-width breakpoints (default behavior)
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "1.5xl": "1366px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2560px",

      // Max-width breakpoints (reverse approach)
      "max-xs": { max: "400px" }, // For devices smaller than 450px, small mobiles iphones
      "max-sm": { max: "640px" }, // For devices smaller than 640px
      "max-md": { max: "768px" }, // For devices smaller than 768px
      "max-lg": { max: "1024px" }, // For devices smaller than 1024px
      "max-xl": { max: "1280px" }, // For devices smaller than 1280px
      "max-1.5xl": { max: "1366px" }, // For devices smaller than 1366px
      "max-2xl": { max: "1536px" }, // For devices smaller than 1536px
      "max-3xl": { max: "1920px" }, // For devices smaller than 1920px
      "max-4xl": { max: "2560px" }, // For devices smaller than 2560px
    },
    extend: {
      colors: {
        myblack: {
          50: "#1a1a1a",
          100: "#222222",
          150: "#0f0f0f",
          200: "#333333",
          250: "#2a2a2a",
        },
        mywhite: {
          50: "#fafafa",
          100: "#fefefe",
          200: "#fdfdfd",
        },
        blue: {
          100: "#E4ECFF",
          200: "#7df9ff",
        },
        lilac: {
          100: "#E9F0FF",
        },
      },

      // fontFamily: {
      //   // sans: ["var(--font-alpino)", "sans-serif"],
      //   sans: ["var(--font-montserrat)", "sans-serif"], // Default font
      //   body: ["var(--font-wix)", "sans-serif"], // For paragraphs
      // },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-870%)" }, // Adjust based on logo size and repeats
        },
      },
      animation: {
        scroll: "scroll 7s linear infinite",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
