define('ember-bootstrap/components/base/bs-contextual-help', ['exports', 'ember-bootstrap/mixins/transition-support', 'ember-bootstrap/utils/get-parent', 'ember-bootstrap/utils/transition-end'], function (exports, _transitionSupport, _getParent, _transitionEnd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var or = Ember.computed.or;
  var reads = Ember.computed.reads;
  var gt = Ember.computed.gt;
  var Component = Ember.Component;
  var guidFor = Ember.guidFor;
  var isArray = Ember.isArray;
  var isBlank = Ember.isBlank;
  var EmberObject = Ember.Object;
  var observer = Ember.observer;
  var computed = Ember.computed;
  var next = Ember.run.next;
  var schedule = Ember.run.schedule;
  var cancel = Ember.run.cancel;
  var later = Ember.run.later;
  var run = Ember.run;


  var InState = EmberObject.extend({
    hover: false,
    focus: false,
    click: false,
    showHelp: or('hover', 'focus', 'click')
  });

  /**
  
   @class Components.ContextualHelp
   @namespace Components
   @extends Ember.Component
   @uses Mixins.TransitionSupport
   @private
   */
  exports.default = Component.extend(_transitionSupport.default, {
    tagName: '',

    /**
     * @property title
     * @type string
     * @public
     */
    title: null,

    /**
     * How to position the tooltip/popover - top | bottom | left | right | auto
     *
     * @property title
     * @type string
     * @default 'top'
     * @public
     */
    placement: 'top',

    /**
     * When `true` it will dynamically reorient the tooltip/popover. For example, if `placement` is "left", the
     * tooltip/popover will display to the left when possible, otherwise it will display right.
     *
     * @property autoPlacement
     * @type boolean
     * @default true
     * @public
     */
    autoPlacement: true,

    /**
     * You can programmatically show the tooltip/popover by setting this to `true`
     *
     * @property visible
     * @type boolean
     * @default false
     * @public
     */
    visible: false,

    /**
     * @property inDom
     * @type boolean
     * @private
     */
    inDom: reads('visible'),

    /**
     * Set to false to disable fade animations.
     *
     * @property fade
     * @type boolean
     * @default true
     * @public
     */
    fade: true,

    /**
     * Used to apply Bootstrap's visibility class
     *
     * @property showHelp
     * @type boolean
     * @default false
     * @private
     */
    showHelp: reads('visible'),

    /**
     * Delay showing and hiding the tooltip/popover (ms). Individual delays for showing and hiding can be specified by using the
     * `delayShow` and `delayHide` properties.
     *
     * @property delay
     * @type number
     * @default 0
     * @public
     */
    delay: 0,

    /**
     * Delay showing the tooltip/popover. This property overrides the general delay set with the `delay` property.
     *
     * @property delayShow
     * @type number
     * @default 0
     * @public
     */
    delayShow: reads('delay'),

    /**
     * Delay hiding the tooltip/popover. This property overrides the general delay set with the `delay` property.
     *
     * @property delayHide
     * @type number
     * @default 0
     * @public
     */
    delayHide: reads('delay'),

    hasDelayShow: gt('delayShow', 0),
    hasDelayHide: gt('delayHide', 0),

    /**
     * The duration of the fade transition
     *
     * @property transitionDuration
     * @type number
     * @default 150
     * @public
     */
    transitionDuration: 150,

    /**
     * Keeps the tooltip/popover within the bounds of this element when `autoPlacement` is true. Can be any valid CSS selector.
     *
     * @property viewportSelector
     * @type string
     * @default 'body'
     * @see viewportPadding
     * @see autoPlacement
     * @public
     */
    viewportSelector: 'body',

    /**
     * Take a padding into account for keeping the tooltip/popover within the bounds of the element given by `viewportSelector`.
     *
     * @property viewportPadding
     * @type number
     * @default 0
     * @see viewportSelector
     * @see autoPlacement
     * @public
     */
    viewportPadding: 0,

    /**
     * The id of the overlay element.
     *
     * @property overlayId
     * @type string
     * @readonly
     * @private
     */
    overlayId: computed(function () {
      return 'overlay-' + guidFor(this);
    }),

    /**
     * The DOM element of the overlay element.
     *
     * @property overlayElement
     * @type object
     * @readonly
     * @private
     */
    overlayElement: computed('overlayId', function () {
      return document.getElementById(this.get('overlayId'));
    }).volatile(),

    /**
     * The DOM element of the arrow element.
     *
     * @property arrowElement
     * @type object
     * @readonly
     * @private
     */
    arrowElement: null,

    /**
     * The DOM element of the viewport element.
     *
     * @property viewportElement
     * @type object
     * @readonly
     * @private
     */
    viewportElement: computed('viewportSelector', function () {
      return document.querySelector(this.get('viewportSelector'));
    }),

    /**
     * The DOM element that triggers the tooltip/popover. By default it is the parent element of this component.
     * You can set this to any CSS selector to have any other element trigger the tooltip/popover.
     * With the special value of "parentView" you can attach the tooltip/popover to the parent component's element.
     *
     * @property triggerElement
     * @type string
     * @public
     */
    triggerElement: null,

    /**
     * @property triggerTargetElement
     * @type {object}
     * @private
     */
    triggerTargetElement: computed('triggerElement', function () {
      var triggerElement = this.get('triggerElement');
      var el = void 0;

      if (isBlank(triggerElement)) {
        try {
          el = (0, _getParent.default)(this);
        } catch (e) {
          return;
        }
      } else if (triggerElement === 'parentView') {
        el = this.get('parentView.element');
      } else {
        el = document.querySelector(triggerElement);
      }
      (true && !(el) && Ember.assert('Trigger element for tooltip/popover must be present', el));

      return el;
    }).volatile(),

    /**
     * The event(s) that should trigger the tooltip/popover - click | hover | focus.
     * You can set this to a single event or multiple events, given as an array or a string separated by spaces.
     *
     * @property triggerEvents
     * @type array|string
     * @default 'hover focus'
     * @public
     */
    triggerEvents: 'hover focus',

    _triggerEvents: computed('triggerEvents', function () {
      var events = this.get('triggerEvents');
      if (!isArray(events)) {
        events = events.split(' ');
      }

      return events.map(function (event) {
        switch (event) {
          case 'hover':
            return ['mouseenter', 'mouseleave'];
          case 'focus':
            return ['focusin', 'focusout'];
          default:
            return event;
        }
      });
    }),

    /**
     * If true component will render in place, rather than be wormholed.
     *
     * @property renderInPlace
     * @type boolean
     * @default false
     * @public
     */
    renderInPlace: false,

    /**
     * @property _renderInPlace
     * @type boolean
     * @private
     */
    _renderInPlace: computed('renderInPlace', function () {
      return this.get('renderInPlace') || typeof document === 'undefined' || !document.getElementById('ember-bootstrap-wormhole');
    }),

    /**
     * Current hover state, 'in', 'out' or null
     *
     * @property hoverState
     * @type string
     * @private
     */
    hoverState: null,

    /**
     * Current state for events
     *
     * @property inState
     * @type {InState}
     * @private
     */
    inState: computed(function () {
      return InState.create();
    }),

    /**
     * Ember.run timer
     *
     * @property timer
     * @private
     */
    timer: null,

    /**
     * This action is called immediately when the tooltip/popover is about to be shown.
     *
     * @event onShow
     * @public
     */
    onShow: function onShow() {},


    /**
     * This action will be called when the tooltip/popover has been made visible to the user (will wait for CSS transitions to complete).
     *
     * @event onShown
     * @public
     */
    onShown: function onShown() {},


    /**
     * This action is called immediately when the tooltip/popover is about to be hidden.
     *
     * @event onHide
     * @public
     */
    onHide: function onHide() {},


    /**
     * This action is called when the tooltip/popover has finished being hidden from the user (will wait for CSS transitions to complete).
     *
     * @event onHidden
     * @public
     */
    onHidden: function onHidden() {},


    /**
     * Called when a show event has been received
     *
     * @method enter
     * @param e
     * @private
     */
    enter: function enter(e) {
      if (e) {
        var eventType = e.type === 'focusin' ? 'focus' : 'hover';
        this.get('inState').set(eventType, true);
      }

      if (this.get('showHelp') || this.get('hoverState') === 'in') {
        this.set('hoverState', 'in');
        return;
      }

      cancel(this.timer);

      this.set('hoverState', 'in');

      if (!this.get('hasDelayShow')) {
        return this.show();
      }

      this.timer = later(this, function () {
        if (this.get('hoverState') === 'in') {
          this.show();
        }
      }, this.get('delayShow'));
    },


    /**
     * Called when a hide event has been received
     *
     * @method leave
     * @param e
     * @private
     */
    leave: function leave(e) {
      if (e) {
        var eventType = e.type === 'focusout' ? 'focus' : 'hover';
        this.get('inState').set(eventType, false);
      }

      if (this.get('inState.showHelp')) {
        return;
      }

      cancel(this.timer);

      this.set('hoverState', 'out');

      if (!this.get('hasDelayHide')) {
        return this.hide();
      }

      this.timer = later(this, function () {
        if (this.get('hoverState') === 'out') {
          this.hide();
        }
      }, this.get('delayHide'));
    },


    /**
     * Called for a click event
     *
     * @method toggle
     * @param e
     * @private
     */
    toggle: function toggle(e) {
      if (e) {
        this.get('inState').toggleProperty('click');
        if (this.get('inState.showHelp')) {
          this.enter();
        } else {
          this.leave();
        }
      } else {
        if (this.get('showHelp')) {
          this.leave();
        } else {
          this.enter();
        }
      }
    },


    /**
     * Show the tooltip/popover
     *
     * @method show
     * @private
     */
    show: function show() {
      if (this.get('isDestroyed')) {
        return;
      }

      if (false === this.get('onShow')(this)) {
        return;
      }

      // this waits for the tooltip/popover element to be created. when animating a wormholed tooltip/popover we need to wait until
      // ember-wormhole has moved things in the DOM for the animation to be correct, so use Ember.run.next in this case
      var delayFn = !this.get('_renderInPlace') && this.get('fade') ? next : function (target, fn) {
        schedule('afterRender', target, fn);
      };

      this.set('inDom', true);
      delayFn(this, this._show);
    },
    _show: function _show() {
      var skipTransition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this.set('showHelp', true);

      function tooltipShowComplete() {
        if (this.get('isDestroyed')) {
          return;
        }
        var prevHoverState = this.get('hoverState');

        this.get('onShown')(this);
        this.set('hoverState', null);

        if (prevHoverState === 'out') {
          this.leave();
        }
      }

      if (skipTransition === false && this.get('usesTransition')) {
        (0, _transitionEnd.default)(this.get('overlayElement'), tooltipShowComplete, this, this.get('transitionDuration'));
      } else {
        tooltipShowComplete.call(this);
      }
    },


    /**
     * Position the tooltip/popover's arrow
     *
     * @method replaceArrow
     * @param delta
     * @param dimension
     * @param isVertical
     * @private
     */
    replaceArrow: function replaceArrow(delta, dimension, isVertical) {
      var el = this.get('arrowElement');
      el.style[isVertical ? 'left' : 'top'] = 50 * (1 - delta / dimension) + '%';
      el.style[isVertical ? 'top' : 'left'] = null;
    },


    /**
     * Hide the tooltip/popover
     *
     * @method hide
     * @private
     */
    hide: function hide() {
      if (this.get('isDestroyed')) {
        return;
      }

      if (false === this.get('onHide')(this)) {
        return;
      }

      function tooltipHideComplete() {
        if (this.get('isDestroyed')) {
          return;
        }
        if (this.get('hoverState') !== 'in') {
          this.set('inDom', false);
        }
        this.get('onHidden')(this);
      }

      this.set('showHelp', false);

      if (this.get('usesTransition')) {
        (0, _transitionEnd.default)(this.get('overlayElement'), tooltipHideComplete, this, this.get('transitionDuration'));
      } else {
        tooltipHideComplete.call(this);
      }

      this.set('hoverState', null);
    },


    /**
     * @method addListeners
     * @private
     */
    addListeners: function addListeners() {
      var _this = this;

      var target = this.get('triggerTargetElement');

      this.get('_triggerEvents').forEach(function (event) {
        if (isArray(event)) {
          var _event = _slicedToArray(event, 2),
              inEvent = _event[0],
              outEvent = _event[1];

          target.addEventListener(inEvent, _this._handleEnter);
          target.addEventListener(outEvent, _this._handleLeave);
        } else {
          target.addEventListener(event, _this._handleToggle);
        }
      });
    },


    /**
     * @method removeListeners
     * @private
     */
    removeListeners: function removeListeners() {
      var _this2 = this;

      var target = this.get('triggerTargetElement');
      this.get('_triggerEvents').forEach(function (event) {
        if (isArray(event)) {
          var _event2 = _slicedToArray(event, 2),
              inEvent = _event2[0],
              outEvent = _event2[1];

          target.removeEventListener(inEvent, _this2._handleEnter);
          target.removeEventListener(outEvent, _this2._handleLeave);
        } else {
          target.removeEventListener(event, _this2._handleToggle);
        }
      });
    },
    init: function init() {
      this._super.apply(this, arguments);
      this._handleEnter = run.bind(this, this.enter);
      this._handleLeave = run.bind(this, this.leave);
      this._handleToggle = run.bind(this, this.toggle);
    },
    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      this.addListeners();
      if (this.get('visible')) {
        next(this, this._show, true);
      }
    },
    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      this.removeListeners();
    },


    _watchVisible: observer('visible', function () {
      if (this.get('visible')) {
        this.show();
      } else {
        this.hide();
      }
    })

  });
});