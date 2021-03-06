define('ember-bootstrap/utils/listen-to-cp', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (dependentKey) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    return computed(dependentKey, {
      get: function get() {
        return getWithDefault(this, dependentKey, defaultValue);
      },
      set: function set(key, value) {
        // eslint-disable-line no-unused-vars
        return value;
      }
    });
  };

  var getWithDefault = Ember.getWithDefault;
  var computed = Ember.computed;
});