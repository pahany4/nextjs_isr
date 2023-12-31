/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  /** устарело */
  /*purge: ["./pages/!**!/!**!/!*.{js,ts,jsx,tsx}","./components/!**!/!**!/!*.{js,ts,jsx,tsx}",],*/
  theme: {
    extend: {
      screens: {
        "xsm": "480px",
      },
    },
    colors: {
      "title": "#171717",
      "lite-green": "#1DB567",
      "hover-border": "rgba(0, 0, 0, 0.2)"
    },
    gap: {
      px: "1px",
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      32: "8rem",
      40: "10rem",
      48: "12rem",
      56: "14rem",
      64: "16rem",
      96: "24rem",
      128: "32rem",
    },
  },
  plugins: [],
}
