/* eslint-disable */
module.exports = {
  root: true,
  env: { browser: true, es2022: true },
  extends: [],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  plugins: ['react-hooks', 'react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    ...require('eslint-plugin-react-hooks').configs.recommended.rules
  },
  ignorePatterns: ['dist', 'node_modules']
}
