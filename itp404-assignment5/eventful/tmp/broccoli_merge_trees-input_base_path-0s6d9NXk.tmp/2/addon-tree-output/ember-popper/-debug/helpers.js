define('ember-popper/-debug/helpers', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.debug = debug;
  exports.debugOnError = debugOnError;
  exports.assert = assert;
  exports.warn = warn;
  exports.deprecate = deprecate;
  exports.stripInProduction = stripInProduction;
  var emberWarn = Ember.warn,
      emberDeprecate = Ember.deprecate,
      Logger = Ember.Logger;
  function debug() {
    Logger.debug.apply(Logger, arguments);
  }

  function debugOnError(msg, conditional) {
    if (!conditional) {
      console.error(msg); // eslint-disable-line no-console
      debugger; // eslint-disable-line no-debugger
    }
  }

  function assert(msg, conditional) {
    if (!conditional) {
      throw new Error(msg);
    }
  }

  function warn() {
    emberWarn.apply(undefined, arguments);
  }

  function deprecate() {
    emberDeprecate.apply(undefined, arguments);
  }

  function stripInProduction(cb) {
    cb();
  }
});