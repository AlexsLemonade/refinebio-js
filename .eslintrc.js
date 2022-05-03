module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src']
      }
    }
  },
  rules: {
    camelcase: 1,
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        comments: 80,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    'no-console': ['warn', { allow: ['error'] }],
    'no-multiple-empty-lines': ['warn', { max: 2 }],
    'no-unused-vars': 2,
    'no-func-assign': 0,
    'no-nested-ternary': 1,
    'no-restricted-syntax': 0,
    'no-continue': 0
  }
}

// https://github.com/eslint/eslint
// https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats
// https://eslint.org/docs/rules/no-console
// https://eslint.org/docs/rules/
// https://eslint.org/docs/user-guide/configuring/rules#rules
// https://eslint.org/docs/user-guide/command-line-interface#fixing-problems
