define('ember-bootstrap/components/base/bs-accordion/item/body', ['exports', 'ember-bootstrap/templates/components/bs-accordion/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend({
    layout: _body.default,
    tagName: '',

    /**
     * @property collapsed
     * @type boolean
     * @public
     */
    collapsed: null

  });
});