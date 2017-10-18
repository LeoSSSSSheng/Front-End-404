define('ember-bootstrap/mixins/size-class', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var isBlank = Ember.isBlank;
  var computed = Ember.computed;
  var Mixin = Ember.Mixin;
  exports.default = Mixin.create({
    /**
     * Prefix for the size class, e.g. "btn" for button size classes ("btn-lg", "btn-sm" etc.)
     *
     * @property classTypePrefix
     * @type string
     * @required
     * @protected
     */
    classTypePrefix: null,

    classNameBindings: ['sizeClass'],

    sizeClass: computed('size', function () {
      var prefix = this.get('classTypePrefix');
      var size = this.get('size');
      return isBlank(size) ? null : prefix + '-' + size;
    }),

    /**
     * Property for size styling, set to 'lg', 'sm' or 'xs'
     *
     * Also see the [Bootstrap docs](http://getbootstrap.com/css/#buttons-sizes)
     *
     * @property size
     * @type String
     * @public
     */
    size: null
  });
});