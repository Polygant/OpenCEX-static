module.exports = {
  root: true,
  env: {
    // browser: true,
    // node: true
  },
  parserOptions: {
    // parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  parser: '@babel/eslint-parser',
  extends: [
    '@nuxtjs'
    // 'plugin:nuxt/recommended',
    // 'prettier'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-trailing-spaces': 0,
    'linebreak-style': 0
  },
  overrides: [
    {
      files: 'nuxt.config.js',
      rules: {
        'no-unused-expressions': 'off'
      }
    }
  ]
}
