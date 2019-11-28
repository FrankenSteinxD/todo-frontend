module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/order': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        // @TODO: find a better way to do this
        map: [
          ['config', './src/config'],
          ['lib', './src/lib'],
          ['pages', './src/pages'],
          ['reducers', './src/reducers'],
          ['actions', './src/actions'],
          ['components', './src/components'],
          ['elements', './src/elements'],
          ['services', './src/services'],
          ['layouts', './src/layouts'],
        ],
      },
    },
  },
};
