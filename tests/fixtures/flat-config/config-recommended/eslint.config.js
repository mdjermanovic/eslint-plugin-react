'use strict';

const reactRecommended = require('../../../../configs/recommended.js');

module.exports = [{
  files: ['**/*.jsx'],
  ...reactRecommended,
  languageOptions: {
    ...reactRecommended.languageOptions
  }
}];
