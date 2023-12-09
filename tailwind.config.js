/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D87D4A",
        primaryLt: "#FBAF85",
        grey: "#F1F1F1",
        greyLt: "#FAFAFA",
        dark: "#101010",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        hero: "url('/assets/home/desktop/image-hero.jpg')",
        "hero-sm": "url('/assets/home/mobile/image-header.jpg')",
        "hero-md": "url('/assets/home/tablet/image-header.jpg')",
        speaker: "url('/assets/home/desktop/image-speaker-zx7.jpg')",
        "speaker-sm": "url('/assets/home/mobile/image-speaker-zx7.jpg')",
        "speaker-md": "url('/assets/home/tablet/image-speaker-zx7.jpg')",
        earphones: "url('/assets/home/desktop/image-earphones-yx1.jpg')",
        "earphones-sm": "url('/assets/home/mobile/image-earphones-yx1.jpg')",
        "earphones-md": "url('/assets/home/tablet/image-earphones-yx1.jpg')",
        "info-img": "url('/assets/shared/desktop/image-best-gear.jpg')",
        "info-img-sm": "url('/assets/shared/mobile/image-best-gear.jpg')",
        "info-img-md": "url('/assets/shared/tablet/image-best-gear.jpg')",
        xx992:
          "url('/assets/category-headphones/desktop/image-xx99-mark-two.jpg')",
        "xx992-sm":
          "url('/assets/category-headphones/mobile/image-xx99-mark-two.jpg')",
        "xx992-md":
          "url('/assets/category-headphones/tablet/image-xx99-mark-two.jpg')",
        xx991:
          "url('/assets/category-headphones/desktop/image-xx99-mark-one.jpg')",
        "xx991-sm":
          "url('/assets/category-headphones/mobile/image-xx99-mark-one.jpg')",
        "xx991-md":
          "url('/assets/category-headphones/tablet/image-xx99-mark-one.jpg')",
        xx59: "url('/assets/category-headphones/desktop/image-xx59.jpg')",
        "xx59-sm": "url('/assets/category-headphones/mobile/image-xx59.jpg')",
        "xx59-md": "url('/assets/category-headphones/tablet/image-xx59.jpg')",
        zx9: "url('/assets/category-speakers/desktop/image-zx9.jpg')",
        "zx9-sm": "url('/assets/category-speakers/mobile/image-zx9.jpg')",
        "zx9-md": "url('/assets/category-speakers/tablet/image-zx9.jpg')",
        zx7: "url('/assets/category-speakers/desktop/image-zx7.jpg')",
        "zx7-sm": "url('/assets/category-speakers/mobile/image-zx7.jpg')",
        "zx7-md": "url('/assets/category-speakers/tablet/image-zx7.jpg')",
        yx1: "url('/assets/category-earphones/desktop/image-yx1-earphones.jpg')",
        "yx1-sm":
          "url('/assets/category-earphones/mobile/image-yx1-earphones.jpg')",
        "yx1-md":
          "url('/assets/category-earphones/tablet/image-yx1-earphones.jpg')",
      },
    },
  },
  variant: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
  important: true,
};
