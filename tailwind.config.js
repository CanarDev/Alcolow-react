/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#007AFF",
        "secondary" : "#5856D6",
        "success" : "#34C759",
        "danger" : "#FF3B30",
        "warning" : "#FF9500",
        "grey" : "#F5F5F7",
        "grey-lighter" : "#FBFBFB",
        "grey-darker" : "#333333",
        "grey-text" : "#838383"
      }
    },
  },
  plugins: [],
}
