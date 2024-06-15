'use strict';

const reactRecommended = require('../../../../configs/recommended.js');
const reactJSXRuntime = require('../../../../configs/jsx-runtime.js');

module.exports = [
  {
    files: ['**/*.jsx'],
    ...reactRecommended,
    languageOptions: {
      ...reactRecommended.languageOptions
    }
  },
  reactJSXRuntime
];
