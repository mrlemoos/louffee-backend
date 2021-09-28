module.exports = {
  env: {
    browser: true,
    es2021: true, // criticize me :)
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    // no-unresolved and extensions should be off because
    // it’s not working with the typescript-eslint plugin.
  },
};
