module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
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
