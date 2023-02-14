/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
    ,
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://res.cloudinary.com/dp8dbh072/image/upload/v1676387032/thumbnail_bg_a007ed1517.png?width=6408&height=3736')",
      },
    },
  },
  plugins: [],
}
