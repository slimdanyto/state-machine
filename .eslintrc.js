module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard-with-typescript'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'dist/**/*', 'tests/**/*'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    indent: ['error', 4, { SwitchCase: 1, ignoredNodes: ['TemplateLiteral'] }],
    '@typescript-eslint/indent': ['error', 4, { SwitchCase: 1, ignoredNodes: ['TemplateLiteral'] }],
    '@typescript-eslint/no-prototype-builtins': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/method-signature-style': ['error', 'method']
  }
}
