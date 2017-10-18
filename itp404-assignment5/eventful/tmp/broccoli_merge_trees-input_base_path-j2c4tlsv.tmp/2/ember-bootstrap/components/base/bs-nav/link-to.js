define('ember-bootstrap/components/base/bs-nav/link-to', ['exports', 'ember-bootstrap/mixins/component-child'], function (exports, _componentChild) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var LinkComponent = Ember.LinkComponent;
  exports.default = LinkComponent.extend(_componentChild.default, {});
});