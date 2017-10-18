define('ember-bootstrap/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/base/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = Ember.computed;
  exports.default = _element.default.extend({
    popperClassNames: computed('fade', 'actualPlacement', 'showHelp', function () {
      var classes = ['tooltip', 'ember-bootstrap-tooltip', this.get('actualPlacement')];
      if (this.get('fade')) {
        classes.push('fade');
      }
      if (this.get('showHelp')) {
        classes.push('in');
      }
      return classes;
    })
  });
});