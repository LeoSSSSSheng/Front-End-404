define('ember-bootstrap/utils/transition-end', ['exports', 'ember-bootstrap/utils/transition-support'], function (exports, _transitionSupport) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = onTransitionEnd;
  var later = Ember.run.later;
  var cancel = Ember.run.cancel;
  var join = Ember.run.join;
  function onTransitionEnd(node, handler, context) {
    var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    if (!node) {
      return;
    }
    var fakeEvent = {
      target: node,
      currentTarget: node
    };
    var backup = void 0;

    if (_transitionSupport.default) {
      node.addEventListener(_transitionSupport.default, done, false);

      backup = later(this, done, fakeEvent, duration);
    } else {
      later(this, done, fakeEvent, 0);
    }

    function done(event) {
      if (backup) {
        cancel(backup);
      }
      node.removeEventListener(_transitionSupport.default, done);
      join(context, handler, event);
    }
  }
});