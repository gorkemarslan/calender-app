module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "bg-indigo-500",
    "bg-gray-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-red-500",
    "bg-purple-500",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"],
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
