module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      regular: 'Lato-Regular',
      bold: 'Lato-Bold',
    },
    extend: {
      colors: {
        screen: '#F9FAFA',
        primary: '#004D99',
        text: '#37565E',
        'text-dark': '#04262F',
        'text-light': '#6D8287',
        'light-green': '#E7FCFF',
        'light-blue': '#E9FCE3',
        'light-gray': '#E2E9FB',
        'light-pink': '#EBE3FC',
        'light-border': 'rgba(205, 213, 215, 0.56)',
      },
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
};
