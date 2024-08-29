// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      // Add a new utility for hyphens
      hyphens: {
        auto: 'auto',
        manual: 'manual',
        none: 'none',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.hyphens-auto': {
          hyphens: 'auto',
        },
        '.hyphens-manual': {
          hyphens: 'manual',
        },
        '.hyphens-none': {
          hyphens: 'none',
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
