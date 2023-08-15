module.exports = {
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['src/**/*.js', 'src/**/*.jsx'],
      parserOptions: {
        sourceType: 'module'
      }
    }
  ],
  plugins: [
    'react'
  ],
  rules: {
    // ... any rules you want
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  }
}
