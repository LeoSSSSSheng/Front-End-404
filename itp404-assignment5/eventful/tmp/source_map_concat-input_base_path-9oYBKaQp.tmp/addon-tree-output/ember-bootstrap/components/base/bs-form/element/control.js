define('ember-bootstrap/components/base/bs-form/element/control', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend({

    /**
     * @property value
     * @public
     */
    value: null,

    /**
     * @property ariaDescribedBy
     * @type {string}
     * @public
     */
    ariaDescribedBy: null,

    /**
     * This action is called whenever the `value` changes
     *
     * @event onChange
     * @param {*} value
     * @public
     */
    onChange: function onChange() {}
  });
});