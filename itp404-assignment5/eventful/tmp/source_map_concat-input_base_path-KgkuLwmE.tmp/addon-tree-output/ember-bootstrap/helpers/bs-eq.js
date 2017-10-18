define('ember-bootstrap/helpers/bs-eq', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.eq = eq;
  var helper = Ember.Helper.helper;
  function eq(params) {
    return params[0] === params[1];
  }

  exports.default = helper(eq);
});