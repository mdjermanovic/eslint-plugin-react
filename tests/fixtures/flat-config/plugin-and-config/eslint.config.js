'use strict';

const react = require('../../../..');
const reactRecommended = require('../../../../configs/recommended.js');

module.exports = [
  {
    files: ['**/*.jsx'],
    plugins: { react }
  },
  {
    files: ['**/*.jsx'],
    ...reactRecommended,
    languageOptions: {
      ...reactRecommended.languageOptions
    }
  }
];
