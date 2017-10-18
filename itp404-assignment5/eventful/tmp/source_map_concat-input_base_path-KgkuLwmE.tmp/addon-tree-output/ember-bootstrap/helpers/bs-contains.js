define('ember-bootstrap/helpers/bs-contains', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.bsContains = bsContains;
  var helper = Ember.Helper.helper;
  var A = Ember.A;
  var isArray = Ember.isArray;
  function bsContains(params /* , hash*/) {
    return isArray(params[0]) ? A(params[0]).includes(params[1]) : false;
  }

  exports.default = helper(bsContains);
});