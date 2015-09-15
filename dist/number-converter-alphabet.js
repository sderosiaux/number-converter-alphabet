(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["number-converter-alphabet"] = factory();
	else
		root["number-converter-alphabet"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = convert;
	var ALPHABET_BINARY = '01';
	exports.ALPHABET_BINARY = ALPHABET_BINARY;
	var ALPHABET_DECIMAL = '0123456789';
	exports.ALPHABET_DECIMAL = ALPHABET_DECIMAL;
	var ALPHABET_HEXADECIMAL = '0123456789ABCDEF';
	exports.ALPHABET_HEXADECIMAL = ALPHABET_HEXADECIMAL;
	var ALPHABET_ASCII = 'abcdefghijklmnopqrstuvwxyz';

	exports.ALPHABET_ASCII = ALPHABET_ASCII;

	function convert(value, alphabet) {
	  var _ref = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	  var _ref$implicitLeadingZero = _ref.implicitLeadingZero;
	  var implicitLeadingZero = _ref$implicitLeadingZero === undefined ? true : _ref$implicitLeadingZero;

	  if (alphabet.length < 2) {
	    throw new Error('alphabet should be composed by at least 2 elements');
	  }

	  var sign = Math.sign(value) < 0 ? '-' : '';
	  var abs = Math.abs(value);

	  if (abs < alphabet.length) {
	    return sign + alphabet[abs];
	  }

	  var dividend = ~ ~(abs / alphabet.length);
	  var rest = abs - dividend * alphabet.length;

	  // "A", "B", "AA" and not "A", "B", "BA"
	  // there is no implicit "A" in front as the numeric world ("10" = "..0000010")
	  if (!implicitLeadingZero) {
	    dividend -= 1;
	  }

	  return sign + convert(dividend, alphabet) + alphabet[rest];
	}

/***/ }
/******/ ])
});
;