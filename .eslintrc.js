module.exports = {
  env: {
    browser: false,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  rules: {
    // Eslint
    'no-invalid-regexp': 'warn',

    // Import
    'import/no-deprecated': 'warn',
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'object', 'type', 'index'],
        pathGroups: [
          {
            pattern: '@{boot,common,customTypes,config,lib,modules,utils}/**',
            group: 'internal',
          },
          {
            pattern: '@{boot,common,customTypes,config,lib,modules,utils}',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
      },
    ],

    // Prettier
    'prettier/prettier': 'error',

    // Typescript
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
  },
}
