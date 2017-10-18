define("ember-popper/-private/utils/class", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.property = property;
  /**
   * Decorator to create a property with a default value on a class.
   *
   * ```js
   * export default MyComponent extends Component {
   *   @property foo = 'bar'
   * }
   * ```
   */
  function property(target, key, desc) {
    desc.value = desc.initializer();
    desc.initializer = undefined; // unset the initializer
    return desc;
  }
});