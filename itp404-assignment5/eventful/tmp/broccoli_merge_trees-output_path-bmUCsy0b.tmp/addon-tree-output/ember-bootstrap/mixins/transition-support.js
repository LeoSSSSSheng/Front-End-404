define('ember-bootstrap/mixins/transition-support', ['exports', 'ember-bootstrap/utils/transition-support'], function (exports, _transitionSupport) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var reads = Ember.computed.reads;
  var getOwner = Ember.getOwner;
  var Mixin = Ember.Mixin;
  var computed = Ember.computed;
  exports.default = Mixin.create({

    /**
     * @property transitionsEnabled
     * @type boolean
     * @private
     */
    transitionsEnabled: reads('fade'),

    /**
     * Access to the fastboot service if available
     *
     * @property fastboot
     * @type {Ember.Service}
     * @private
     */
    fastboot: computed(function () {
      var owner = getOwner(this);
      return owner.lookup('service:fastboot');
    }),

    /**
     * Use CSS transitions?
     *
     * @property usesTransition
     * @type boolean
     * @readonly
     * @private
     */
    usesTransition: computed('fade', 'fastboot.isFastBoot', function () {
      return !this.get('fastboot.isFastBoot') && !!_transitionSupport.default && this.get('transitionsEnabled');
    })
  });
});