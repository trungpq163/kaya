module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "quotes": [
      2,
      "single"
    ],
    "semi": [
      2,
      "always"
    ],
    "curly": [
      2,
      "all"
    ],
    "eqeqeq": [
      2,
      "smart"
    ],
    "one-var-declaration-per-line": [
      2,
      "always"
    ],
    "new-cap": 2,
    "no-case-declarations": 0
  }
};