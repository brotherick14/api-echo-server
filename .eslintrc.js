module.exports = {
    "env": {
      "browser": true,
      "es2021": true,
      "node": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "rules": {
      "semi": ["error", "never"],
      "eol-last": ["error", "always"],
      "no-console": "error"
    }
  }