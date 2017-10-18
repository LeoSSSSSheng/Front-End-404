define('ember-bootstrap/components/base/bs-tooltip', ['exports', 'ember-bootstrap/components/base/bs-contextual-help', 'ember-bootstrap/templates/components/bs-tooltip'], function (exports, _bsContextualHelp, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = Ember.computed;
  exports.default = _bsContextualHelp.default.extend({
    layout: _bsTooltip.default,

    /**
     * The DOM element of the arrow element.
     *
     * @property arrowElement
     * @type object
     * @readonly
     * @private
     */
    arrowElement: computed('overlayElement', function () {
      return this.get('overlayElement').querySelector('.tooltip-arrow');
    }).volatile()
  });
});