define('ember-bootstrap/mixins/component-parent', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var schedule = Ember.run.schedule;
  var A = Ember.A;
  var Mixin = Ember.Mixin;
  exports.default = Mixin.create({

    /**
     * Array of registered child components
     *
     * @property children
     * @type array
     * @protected
     */
    children: null,

    init: function init() {
      this._super.apply(this, arguments);
      this.set('children', A());
    },


    /**
     * Register a component as a child of this parent
     *
     * @method registerChild
     * @param child
     * @public
     */
    registerChild: function registerChild(child) {
      schedule('sync', this, function () {
        this.get('children').addObject(child);
      });
    },


    /**
     * Remove the child component from this parent component
     *
     * @method removeChild
     * @param child
     * @public
     */
    removeChild: function removeChild(child) {
      this.get('children').removeObject(child);
    }
  });
});