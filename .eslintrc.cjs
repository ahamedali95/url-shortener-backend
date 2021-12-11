module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    // "jest"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    // "plugin:jest/recommended",
  ],
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
    indent: [ 'error', 4 ],
    quotes: ['error', 'single'],
    '@typescript-eslint/no-explicit-any': 'off'
  }
};