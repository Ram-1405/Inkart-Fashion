/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'vsm': '200px', // Define your custom breakpoint here (adjust the pixel value as needed)
      },
      container: {
        padding: '0', // No padding by default
        screens: {
          sm: '100%',    // Full width for small screens
          md: '100%',    // Full width for medium screens
          lg: '100%',    // Full width for large screens
          xl: '100%',    // Full width for extra-large screens
        },
      },
    },
  },
  plugins: [],
}
