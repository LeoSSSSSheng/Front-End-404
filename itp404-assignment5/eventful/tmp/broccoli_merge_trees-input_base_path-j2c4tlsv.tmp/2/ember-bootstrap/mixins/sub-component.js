define('ember-bootstrap/mixins/sub-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var alias = Ember.computed.alias;
  var Mixin = Ember.Mixin;
  exports.default = Mixin.create({
    targetObject: alias('parentView')
  });
});