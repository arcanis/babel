'use strict';

Object.defineProperties(exports, {
  __esModule: {
    value: true
  },
  __esExports: {
    value: []
  }
});

var _mod = require('mod');

Object.keys(_mod).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (exports.__esExports.indexOf(key) !== -1) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mod[key];
    }
  });
});