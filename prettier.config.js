module.exports = {
  tabWidth: 2,
  useTabs: false,
  // jsxSingleQuote: true,
  singleQuote: true,
  semi: true,
  overrides: [
    {
      files: ["**/*.css", "**/*.scss", "**/*.html"],
      options: {
        singleQuote: false,
      },
    },
  ],
};
