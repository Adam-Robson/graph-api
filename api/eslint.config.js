import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';
import tsparser from '@typescript-eslint/parser';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  prettierConfig,
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.nodeBuiltin,
        ...globals.builtin,
        ...globals.es2021
      },
      parser: tsparser,
      parserOptions: {
        projectService: true,
      }
    },
    rules: {
      semi: 'error',
      'prefer-const': 'error',
      eqeqeq: ['error', 'always'],
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      indent: ['error', 2, { SwitchCase: 1 }],
      quotes: ['error', 'single', { avoidEscape: true }],
      'no-multi-spaces': ['error', { ignoreEOLComments: true }],
      'new-cap': ['error', { capIsNew: false }],
      'no-redeclare': ['error', { builtinGlobals: true }],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'object-curly-spacing': ['error', 'always'],
      'comma-spacing': 'error',
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always'
        }
      ],
      'keyword-spacing': ['error', { before: true, after: true }],
      'array-bracket-spacing': 'error'
    }
  },
  {
    ignores: [
      'node_modules',
      'dist',
      '*.config.js',
      '*.config.cjs',
    ]
  },
  {
    rules: {
      '@typescript-eslint/no-misused-promises': 'off'
    }
  }
);
