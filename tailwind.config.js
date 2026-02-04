/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: {
          primary: "#242526", // exact black text
          secondary: "#828A94", // gray text
        },
        brand: {
          primary: "#0D52AF", // exact blue
        },
      },
    },
  },
  plugins: [],
};
