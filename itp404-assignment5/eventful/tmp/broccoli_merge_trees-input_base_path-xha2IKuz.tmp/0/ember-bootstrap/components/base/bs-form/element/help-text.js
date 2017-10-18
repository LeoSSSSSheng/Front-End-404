define('ember-bootstrap/components/base/bs-form/element/help-text', ['exports', 'ember-bootstrap/templates/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend({
    layout: _helpText.default,

    /**
     * @property text
     * @type {string}
     * @public
     */
    text: null
  });
});