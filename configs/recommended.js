'use strict';

const plugin = require('../index');

const legacyConfig = plugin.configs.recommended;

module.exports = {
  plugins: { react: plugin },
  rules: legacyConfig.rules,
  languageOptions: { parserOptions: legacyConfig.parserOptions },
};

Object.defineProperty(module.exports, 'languageOptions', { enumerable: false });
