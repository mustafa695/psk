/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          100: "#F05385",
          200: "#6D7280",
        },
      },
      borderColor: {
        theme: {
          100: "#F05385",
        },
      },
      backgroundColor: {
        theme: {
          100: "#F05385",
        },
      },
    },
  },
  plugins: [],
};
