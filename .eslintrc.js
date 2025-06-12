module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "jest/globals": true
  },
  extends: [
    'airbnb-base',
    "plugin:jest/recommended"],
  overrides: [],
  plugins: ["jest"],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
};
