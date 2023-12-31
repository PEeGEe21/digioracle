/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        gtwalsh: ['var(--font-gtwalsh)'],
        michroma: ['var(--font-michroma)'],
        outfit: ['var(--font-outfit)']
      },
    },
  },
  plugins: [],
};
