/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        mavenPro: 'var(--font-mavem-pro)',
        jetBrainsMono: 'var(--font-jetbrains)',
        titilliumWeb: 'var(--font-titillium-web)'
      },
      colors: {
        gray: {
          50: '#F0F0F0',
          100: '#E1DFE2',
          200: '#939393',
          300: '#6C6C6C',
          400: '#2B2B2B'
        },
        blue: {
          100: '#0F1A30',
          200: '#0D1629',
          300: '#090E1B',
          400: '#070B15'
        },
        yellow: { 800: '#FFB22B' },
        success: '#67A950',
        error: '#BE3737'
      },
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px'
      }
    }
  },
  plugins: []
}
