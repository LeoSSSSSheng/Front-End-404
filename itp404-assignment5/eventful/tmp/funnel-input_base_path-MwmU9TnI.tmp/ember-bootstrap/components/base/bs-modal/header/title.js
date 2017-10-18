define('ember-bootstrap/components/base/bs-modal/header/title', ['exports', 'ember-bootstrap/templates/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend({
    layout: _title.default,
    tagName: 'h4',
    classNames: ['modal-title']
  });
});