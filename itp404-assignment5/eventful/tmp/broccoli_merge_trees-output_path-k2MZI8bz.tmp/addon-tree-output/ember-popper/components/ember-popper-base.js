define('ember-popper/components/ember-popper-base', ['exports', 'ember-decorators/object', 'ember-popper/templates/components/ember-popper', 'ember-popper/-private/utils/class'], function (exports, _object, _emberPopper, _class3) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21;

  var Component = Ember.Component;
  var EmberPopperBase = (_dec = (0, _object.computed)('_renderInPlace', 'popperContainer'), _dec2 = (0, _object.computed)('renderInPlace'), (_class = function (_Component) {
    _inherits(EmberPopperBase, _Component);

    function EmberPopperBase() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, EmberPopperBase);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EmberPopperBase.__proto__ || Object.getPrototypeOf(EmberPopperBase)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, 'layout', _descriptor, _this), _initDefineProp(_this, 'tagName', _descriptor2, _this), _initDefineProp(_this, 'eventsEnabled', _descriptor3, _this), _initDefineProp(_this, 'modifiers', _descriptor4, _this), _initDefineProp(_this, 'onFoundTarget', _descriptor5, _this), _initDefineProp(_this, 'onCreate', _descriptor6, _this), _initDefineProp(_this, 'onUpdate', _descriptor7, _this), _initDefineProp(_this, 'placement', _descriptor8, _this), _initDefineProp(_this, 'popperContainer', _descriptor9, _this), _initDefineProp(_this, 'renderInPlace', _descriptor10, _this), _initDefineProp(_this, 'target', _descriptor11, _this), _initDefineProp(_this, '_popper', _descriptor12, _this), _initDefineProp(_this, '_initialParentNode', _descriptor13, _this), _initDefineProp(_this, '_didRenderInPlace', _descriptor14, _this), _initDefineProp(_this, '_popperTarget', _descriptor15, _this), _initDefineProp(_this, '_eventsEnabled', _descriptor16, _this), _initDefineProp(_this, '_placement', _descriptor17, _this), _initDefineProp(_this, '_modifiers', _descriptor18, _this), _initDefineProp(_this, '_updateRAF', _descriptor19, _this), _initDefineProp(_this, '_onCreate', _descriptor20, _this), _initDefineProp(_this, '_onUpdate', _descriptor21, _this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EmberPopperBase, [{
      key: 'didUpdateAttrs',
      value: function didUpdateAttrs() {
        var _this2 = this;

        this._updateRAF = requestAnimationFrame(function () {
          _this2._updatePopper();
        });
      }
    }, {
      key: 'didInsertElement',
      value: function didInsertElement() {
        _get(EmberPopperBase.prototype.__proto__ || Object.getPrototypeOf(EmberPopperBase.prototype), 'didInsertElement', this).apply(this, arguments);

        this._updatePopper();
      }
    }, {
      key: 'willDestroyElement',
      value: function willDestroyElement() {
        _get(EmberPopperBase.prototype.__proto__ || Object.getPrototypeOf(EmberPopperBase.prototype), 'willDestroyElement', this).apply(this, arguments);

        this._popper.destroy();
        cancelAnimationFrame(this._updateRAF);
      }
    }, {
      key: 'update',
      value: function update() {
        this._popper.update();
      }
    }, {
      key: 'scheduleUpdate',
      value: function scheduleUpdate() {
        this._popper.scheduleUpdate();
      }
    }, {
      key: 'enableEventListeners',
      value: function enableEventListeners() {
        this._popper.enableEventListeners();
      }
    }, {
      key: 'disableEventListeners',
      value: function disableEventListeners() {
        this._popper.disableEventListeners();
      }
    }, {
      key: '_updatePopper',
      value: function _updatePopper() {
        if (this.isDestroying || this.isDestroyed) {
          return;
        }

        var popperTarget = this._getPopperTarget();
        var renderInPlace = this.get('_renderInPlace');
        var eventsEnabled = this.get('eventsEnabled');
        var modifiers = this.get('modifiers');
        var placement = this.get('placement');
        var onCreate = this.onCreate,
            onUpdate = this.onUpdate;


        var isPopperTargetDifferent = popperTarget !== this._popperTarget;

        // Compare against previous values to see if anything has changed
        var didChange = renderInPlace !== this._didRenderInPlace || isPopperTargetDifferent || eventsEnabled !== this._eventsEnabled || modifiers !== this._modifiers || placement !== this._placement || onCreate !== this._onCreate || onUpdate !== this._onUpdate;

        if (didChange === true) {
          if (this._popper !== null) {
            this._popper.destroy();
          }

          var popperElement = this._getPopperElement();

          // Store current values to check against on updates
          this._didRenderInPlace = renderInPlace;
          this._popperTarget = popperTarget;
          this._eventsEnabled = eventsEnabled;
          this._modifiers = modifiers;
          this._placement = placement;
          this._onCreate = onCreate;
          this._onUpdate = onUpdate;

          var options = {
            eventsEnabled: eventsEnabled,
            modifiers: modifiers,
            placement: placement
          };

          if (onCreate) {
            (true && !(typeof onCreate === 'function') && Ember.assert('onCreate of ember-popper must be a function', typeof onCreate === 'function'));

            options.onCreate = onCreate;
          }

          if (onUpdate) {
            (true && !(typeof onUpdate === 'function') && Ember.assert('onUpdate of ember-popper must be a function', typeof onUpdate === 'function'));

            options.onUpdate = onUpdate;
          }

          this._popper = new Popper(popperTarget, popperElement, options);

          // Execute the onFoundTarget hook last to ensure the Popper is initialized on the target
          if (isPopperTargetDifferent && this.get('onFoundTarget')) {
            this.get('onFoundTarget')(popperTarget);
          }
        }
      }
    }, {
      key: '_getPopperElement',
      value: function _getPopperElement() {
        return self.document.getElementById(this.id);
      }
    }, {
      key: '_getPopperTarget',
      value: function _getPopperTarget() {
        var target = this.get('target');

        var popperTarget = void 0;

        // If there is no target, set the target to the parent element
        if (!target) {
          popperTarget = this._initialParentNode;
        } else if (target instanceof Element) {
          popperTarget = target;
        } else {
          var nodes = document.querySelectorAll(target);

          (true && !(nodes.length === 1) && Ember.assert('ember-popper with target selector "' + target + '" found ' + nodes.length + 'possible targets when there should be exactly 1', nodes.length === 1));


          popperTarget = nodes[0];
        }

        return popperTarget;
      }
    }, {
      key: '_popperContainer',
      value: function _popperContainer() {
        var renderInPlace = this.get('_renderInPlace');
        var maybeContainer = this.get('popperContainer');

        var popperContainer = void 0;

        if (renderInPlace) {
          popperContainer = this._initialParentNode;
        } else if (maybeContainer instanceof Element) {
          popperContainer = maybeContainer;
        } else if (typeof maybeContainer === 'string') {
          var selector = maybeContainer;
          var possibleContainers = self.document.querySelectorAll(selector);

          (true && !(possibleContainers.length === 1) && Ember.assert('ember-popper with popperContainer selector "' + selector + '" found ' + (possibleContainers.length + ' possible containers when there should be exactly 1'), possibleContainers.length === 1));


          popperContainer = possibleContainers[0];
        }

        return popperContainer;
      }
    }, {
      key: '_renderInPlace',
      value: function _renderInPlace() {
        // self.document is undefined in Fastboot, so we have to render in
        // place for the popper to show up at all.
        return self.document ? !!this.get('renderInPlace') : true;
      }
    }]);

    return EmberPopperBase;
  }(Component), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'layout', [_class3.property], {
    enumerable: true,
    initializer: function initializer() {
      return _emberPopper.default;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'tagName', [_class3.property], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'eventsEnabled', [_class3.property], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'modifiers', [_class3.property], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'onFoundTarget', [_class3.property], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'onCreate', [_class3.property], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'onUpdate', [_class3.property], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'placement', [_class3.property], {
    enumerable: true,
    initializer: function initializer() {
      return 'bottom';
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'popperContainer', [_class3.property], {
    enumerable: true,
    initializer: function initializer() {
      return '.ember-application';
    }
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'renderInPlace', [_class3.property], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, 'target', [_class3.property], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, '_popper', [_class3.property], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, '_initialParentNode', [_class3.property], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, '_didRenderInPlace', [_class3.property], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, '_popperTarget', [_class3.property], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, '_eventsEnabled', [_class3.property], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, '_placement', [_class3.property], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, '_modifiers', [_class3.property], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, '_updateRAF', [_class3.property], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, '_onCreate', [_class3.property], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, '_onUpdate', [_class3.property], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _applyDecoratedDescriptor(_class.prototype, 'update', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'update'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'scheduleUpdate', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'scheduleUpdate'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'enableEventListeners', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'enableEventListeners'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'disableEventListeners', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'disableEventListeners'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, '_popperContainer', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, '_popperContainer'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, '_renderInPlace', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, '_renderInPlace'), _class.prototype)), _class));
  exports.default = EmberPopperBase;
});