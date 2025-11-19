export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rocGold: "#f7c948",
        rocNeon: "#39ff14",
        rocBlue: "#1e3a8a",
        rocDark: "#0f172a"
      },
      boxShadow: {
        roc: "0 0 15px rgba(57,255,20,0.4)"
      },
      gradientColorStops: {
        roc1: "#39ff14",
        roc2: "#f7c948"
      }
    }
  },
  plugins: []
}
