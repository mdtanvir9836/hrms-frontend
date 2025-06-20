/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        s136: "136px", // Custom class `max-w-s136`
      },
      gap: {
        sm: "0.5rem", // Custom class `gap-sm`
      },
      height: {
        xs: "0.5rem", // Custom class `h-xs`
      },
      colors: {
        viridian: {
          20: "#e6f4f1", // Light green shade
          60: "#44d7b6", // Darker green shade
          100: "#007d71",
        },
      },
      borderColor: {
        "radical-120": "#1F74EC", // Add the custom border color
      },
      backgroundColor: {
        "radical-120": "#1F74EC",
      },
    },
  },
  plugins: [],
};
