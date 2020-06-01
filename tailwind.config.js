module.exports = {
  purge: ['./src/**/*.html', './src/**/*.tsx'],
  theme: {
    extend: {
      fontSize: {
        xxs: '.5rem',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
