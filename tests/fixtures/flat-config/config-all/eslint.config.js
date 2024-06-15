'use strict';

const reactAll = require('../../../../configs/all.js');

module.exports = [{
  files: ['**/*.jsx'],
  ...reactAll,
  languageOptions: {
    ...reactAll.languageOptions
  }
}];
