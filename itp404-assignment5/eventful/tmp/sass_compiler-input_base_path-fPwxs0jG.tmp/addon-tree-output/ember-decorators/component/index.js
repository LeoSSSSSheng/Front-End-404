define('ember-decorators/component/index', ['exports', 'ember-decorators/utils/collapse-proto', 'ember-decorators/utils/decorator-macros'], function (exports, _collapseProto, _decoratorMacros) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.className = exports.attribute = undefined;
  exports.classNames = classNames;
  exports.tagName = tagName;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  /**
   * Decorator which indicates that the field or computed should be bound
   * to an attribute value on the component. This replaces `attributeBindings`
   * by directly allowing you to specify which properties should be bound.
   *
   * ```js
   * import Component from '@ember/component';
   * import { attribute } from 'ember-decorators/component';
   * import { computed } from 'ember-decorators/object';
   *
   * export default class AttributeDemoComponent extends Component {
   *   @attribute role = 'button';
   *
   *   @attribute
   *   @computed
   *   get id() {
   *     // return generated id
   *   }
   * }
   * ```
   *
   * @function
   */
  var attribute = exports.attribute = (0, _decoratorMacros.decoratedConcatenatedProperty)('attributeBindings');

  /**
   * Decorator which indicates that the field or computed should be bound to
   * the component class names. This replaces `classNameBindings` by directly
   * allowing you to specify which properties should be bound.
   *
   * ```js
   * import Component from '@ember/component';
   * import { className } from 'ember-decorators/component';
   * import { computed } from 'ember-decorators/object';
   *
   * export default class ClassNameDemoComponent extends Component {
   *   @className boundField = 'default-class';
   *
   *   @className
   *   @computed
   *   get boundComputed() {
   *     // return generated class
   *   }
   * }
   * ```
   *
   * @function
   */
  var className = exports.className = (0, _decoratorMacros.decoratedConcatenatedProperty)('classNameBindings');

  /**
   * Class decorator which specifies the class names to be applied to a component.
   * This replaces the `classNames` property on components in the traditional Ember
   * object model.
   *
   * ```js
   * import Component from '@ember/component';
   * import { classNames } from 'ember-decorators/component';
   *
   * @classNames('a-static-class', 'another-static-class')
   * export default class ClassNamesDemoComponent extends Component {}
   * ```
   *
   * @param {...String} classNames - The list of classes to be applied to the component
   */
  function classNames() {
    for (var _len = arguments.length, classNames = Array(_len), _key = 0; _key < _len; _key++) {
      classNames[_key] = arguments[_key];
    }

    (true && !(classNames.reduce(function (allStrings, name) {
      return allStrings && typeof name === 'string';
    }, true)) && Ember.assert('The @classNames decorator must be provided strings, received: ' + classNames, classNames.reduce(function (allStrings, name) {
      return allStrings && typeof name === 'string';
    }, true)));


    return function (klass) {
      var prototype = klass.prototype;


      (0, _collapseProto.default)(prototype);

      if ('classNames' in prototype) {
        var parentClasses = prototype.classNames;
        classNames.unshift.apply(classNames, _toConsumableArray(parentClasses));
      }

      prototype.classNames = classNames;

      return klass;
    };
  }

  /**
   * Class decorator which specifies the tag name of the component. This replaces
   * the `tagName` property on components in the traditional Ember object model.
   *
   * ```js
   * import Component from '@ember/component';
   * import { tagName } from 'ember-decorators/component';
   *
   * @tagName('button')
   * export default class TagNameDemoComponent extends Component {}
   * ```
   *
   * @param {String} tagName - The HTML tag to be used for the component
   */
  function tagName(tagName) {
    (true && !(arguments.length === 1) && Ember.assert('The @tagName decorator must be provided exactly one argument, received: ' + tagName, arguments.length === 1));
    (true && !(typeof tagName === 'string') && Ember.assert('The @tagName decorator must be provided a string, received: ' + tagName, typeof tagName === 'string'));


    return function (klass) {
      klass.prototype.tagName = tagName;
      return klass;
    };
  }
});