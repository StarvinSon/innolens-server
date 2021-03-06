// @ts-check
const { rules: baseStyleRules } = require('eslint-config-airbnb-base/rules/style');

module.exports = {
  extends: [
    'airbnb-typescript/base'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    node: true,
    es2020: true
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'func-names': ['error', 'as-needed'],
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true,
        method: {
          before: true,
          after: false
        }
      }
    ],
    'implicit-arrow-linebreak': 'off',
    'linebreak-style': 'off',
    'no-nested-ternary': 'off',
    'no-restricted-syntax': [
      baseStyleRules['no-restricted-syntax'][0],
      ...baseStyleRules['no-restricted-syntax']
        .slice(1)
        // @ts-ignore
        .filter(({ selector }) => selector !== 'ForOfStatement')
    ],
    'no-underscore-dangle': 'off',
    'import/no-default-export': 'error',
    'import/order': ['error', {
      'newlines-between': 'always',
      // Bug: https://github.com/benmosher/eslint-plugin-import/pull/1562
      // 'alphabetize': {
      //   'order': 'asc'
      // }
    }],
    'import/prefer-default-export': 'off'
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/array-type': ['error', {
          default: 'generic'
        }],
        '@typescript-eslint/explicit-function-return-type': ['error', {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
        }]
      }
    }
  ],
  reportUnusedDisableDirectives: true,
  root: true
};
