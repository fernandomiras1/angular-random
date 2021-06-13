exports.ids = ["vendors~section-hero-section-hero-module"];
exports.modules = {

/***/ "+dTB":
/*!***************************************************!*\
  !*** ./node_modules/@glidejs/glide/dist/glide.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Glide.js v3.4.1
 * (c) 2013-2019 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
 * Released under the MIT License.
 */

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  var defaults = {
    /**
     * Type of the movement.
     *
     * Available types:
     * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
     * `carousel` - Changes slides without starting over when it reaches the first or last slide.
     *
     * @type {String}
     */
    type: 'slider',

    /**
     * Start at specific slide number defined with zero-based index.
     *
     * @type {Number}
     */
    startAt: 0,

    /**
     * A number of slides visible on the single viewport.
     *
     * @type {Number}
     */
    perView: 1,

    /**
     * Focus currently active slide at a specified position in the track.
     *
     * Available inputs:
     * `center` - Current slide will be always focused at the center of a track.
     * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
     *
     * @type {String|Number}
     */
    focusAt: 0,

    /**
     * A size of the gap added between slides.
     *
     * @type {Number}
     */
    gap: 10,

    /**
     * Change slides after a specified interval. Use `false` for turning off autoplay.
     *
     * @type {Number|Boolean}
     */
    autoplay: false,

    /**
     * Stop autoplay on mouseover event.
     *
     * @type {Boolean}
     */
    hoverpause: true,

    /**
     * Allow for changing slides with left and right keyboard arrows.
     *
     * @type {Boolean}
     */
    keyboard: true,

    /**
     * Stop running `perView` number of slides from the end. Use this
     * option if you don't want to have an empty space after
     * a slider. Works only with `slider` type and a
     * non-centered `focusAt` setting.
     *
     * @type {Boolean}
     */
    bound: false,

    /**
     * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
     *
     * @type {Number|Boolean}
     */
    swipeThreshold: 80,

    /**
     * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
     *
     * @type {Number|Boolean}
     */
    dragThreshold: 120,

    /**
     * A maximum number of slides to which movement will be made on swiping or dragging. Use `false` for unlimited.
     *
     * @type {Number|Boolean}
     */
    perTouch: false,

    /**
     * Moving distance ratio of the slides on a swiping and dragging.
     *
     * @type {Number}
     */
    touchRatio: 0.5,

    /**
     * Angle required to activate slides moving on swiping or dragging.
     *
     * @type {Number}
     */
    touchAngle: 45,

    /**
     * Duration of the animation in milliseconds.
     *
     * @type {Number}
     */
    animationDuration: 400,

    /**
     * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
     *
     * @type {Boolean}
     */
    rewind: true,

    /**
     * Duration of the rewinding animation of the `slider` type in milliseconds.
     *
     * @type {Number}
     */
    rewindDuration: 800,

    /**
     * Easing function for the animation.
     *
     * @type {String}
     */
    animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',

    /**
     * Throttle costly events at most once per every wait milliseconds.
     *
     * @type {Number}
     */
    throttle: 10,

    /**
     * Moving direction mode.
     *
     * Available inputs:
     * - 'ltr' - left to right movement,
     * - 'rtl' - right to left movement.
     *
     * @type {String}
     */
    direction: 'ltr',

    /**
     * The distance value of the next and previous viewports which
     * have to peek in the current view. Accepts number and
     * pixels as a string. Left and right peeking can be
     * set up separately with a directions object.
     *
     * For example:
     * `100` - Peek 100px on the both sides.
     * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
     *
     * @type {Number|String|Object}
     */
    peek: 0,

    /**
     * Collection of options applied at specified media breakpoints.
     * For example: display two slides per view under 800px.
     * `{
     *   '800px': {
     *     perView: 2
     *   }
     * }`
     */
    breakpoints: {},

    /**
     * Collection of internally used HTML classes.
     *
     * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
     * @type {Object}
     */
    classes: {
      direction: {
        ltr: 'glide--ltr',
        rtl: 'glide--rtl'
      },
      slider: 'glide--slider',
      carousel: 'glide--carousel',
      swipeable: 'glide--swipeable',
      dragging: 'glide--dragging',
      cloneSlide: 'glide__slide--clone',
      activeNav: 'glide__bullet--active',
      activeSlide: 'glide__slide--active',
      disabledArrow: 'glide__arrow--disabled'
    }
  };

  /**
   * Outputs warning message to the bowser console.
   *
   * @param  {String} msg
   * @return {Void}
   */
  function warn(msg) {
    console.error("[Glide warn]: " + msg);
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
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

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var get = function get(object, property, receiver) {
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

  var inherits = function (subClass, superClass) {
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
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  /**
   * Converts value entered as number
   * or string to integer value.
   *
   * @param {String} value
   * @returns {Number}
   */
  function toInt(value) {
    return parseInt(value);
  }

  /**
   * Converts value entered as number
   * or string to flat value.
   *
   * @param {String} value
   * @returns {Number}
   */
  function toFloat(value) {
    return parseFloat(value);
  }

  /**
   * Indicates whether the specified value is a string.
   *
   * @param  {*}   value
   * @return {Boolean}
   */
  function isString(value) {
    return typeof value === 'string';
  }

  /**
   * Indicates whether the specified value is an object.
   *
   * @param  {*} value
   * @return {Boolean}
   *
   * @see https://github.com/jashkenas/underscore
   */
  function isObject(value) {
    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

    return type === 'function' || type === 'object' && !!value; // eslint-disable-line no-mixed-operators
  }

  /**
   * Indicates whether the specified value is a number.
   *
   * @param  {*} value
   * @return {Boolean}
   */
  function isNumber(value) {
    return typeof value === 'number';
  }

  /**
   * Indicates whether the specified value is a function.
   *
   * @param  {*} value
   * @return {Boolean}
   */
  function isFunction(value) {
    return typeof value === 'function';
  }

  /**
   * Indicates whether the specified value is undefined.
   *
   * @param  {*} value
   * @return {Boolean}
   */
  function isUndefined(value) {
    return typeof value === 'undefined';
  }

  /**
   * Indicates whether the specified value is an array.
   *
   * @param  {*} value
   * @return {Boolean}
   */
  function isArray(value) {
    return value.constructor === Array;
  }

  /**
   * Creates and initializes specified collection of extensions.
   * Each extension receives access to instance of glide and rest of components.
   *
   * @param {Object} glide
   * @param {Object} extensions
   *
   * @returns {Object}
   */
  function mount(glide, extensions, events) {
    var components = {};

    for (var name in extensions) {
      if (isFunction(extensions[name])) {
        components[name] = extensions[name](glide, components, events);
      } else {
        warn('Extension must be a function');
      }
    }

    for (var _name in components) {
      if (isFunction(components[_name].mount)) {
        components[_name].mount();
      }
    }

    return components;
  }

  /**
   * Defines getter and setter property on the specified object.
   *
   * @param  {Object} obj         Object where property has to be defined.
   * @param  {String} prop        Name of the defined property.
   * @param  {Object} definition  Get and set definitions for the property.
   * @return {Void}
   */
  function define(obj, prop, definition) {
    Object.defineProperty(obj, prop, definition);
  }

  /**
   * Sorts aphabetically object keys.
   *
   * @param  {Object} obj
   * @return {Object}
   */
  function sortKeys(obj) {
    return Object.keys(obj).sort().reduce(function (r, k) {
      r[k] = obj[k];

      return r[k], r;
    }, {});
  }

  /**
   * Merges passed settings object with default options.
   *
   * @param  {Object} defaults
   * @param  {Object} settings
   * @return {Object}
   */
  function mergeOptions(defaults, settings) {
    var options = _extends({}, defaults, settings);

    // `Object.assign` do not deeply merge objects, so we
    // have to do it manually for every nested object
    // in options. Although it does not look smart,
    // it's smaller and faster than some fancy
    // merging deep-merge algorithm script.
    if (settings.hasOwnProperty('classes')) {
      options.classes = _extends({}, defaults.classes, settings.classes);

      if (settings.classes.hasOwnProperty('direction')) {
        options.classes.direction = _extends({}, defaults.classes.direction, settings.classes.direction);
      }
    }

    if (settings.hasOwnProperty('breakpoints')) {
      options.breakpoints = _extends({}, defaults.breakpoints, settings.breakpoints);
    }

    return options;
  }

  var EventsBus = function () {
    /**
     * Construct a EventBus instance.
     *
     * @param {Object} events
     */
    function EventsBus() {
      var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      classCallCheck(this, EventsBus);

      this.events = events;
      this.hop = events.hasOwnProperty;
    }

    /**
     * Adds listener to the specifed event.
     *
     * @param {String|Array} event
     * @param {Function} handler
     */


    createClass(EventsBus, [{
      key: 'on',
      value: function on(event, handler) {
        if (isArray(event)) {
          for (var i = 0; i < event.length; i++) {
            this.on(event[i], handler);
          }
        }

        // Create the event's object if not yet created
        if (!this.hop.call(this.events, event)) {
          this.events[event] = [];
        }

        // Add the handler to queue
        var index = this.events[event].push(handler) - 1;

        // Provide handle back for removal of event
        return {
          remove: function remove() {
            delete this.events[event][index];
          }
        };
      }

      /**
       * Runs registered handlers for specified event.
       *
       * @param {String|Array} event
       * @param {Object=} context
       */

    }, {
      key: 'emit',
      value: function emit(event, context) {
        if (isArray(event)) {
          for (var i = 0; i < event.length; i++) {
            this.emit(event[i], context);
          }
        }

        // If the event doesn't exist, or there's no handlers in queue, just leave
        if (!this.hop.call(this.events, event)) {
          return;
        }

        // Cycle through events queue, fire!
        this.events[event].forEach(function (item) {
          item(context || {});
        });
      }
    }]);
    return EventsBus;
  }();

  var Glide = function () {
    /**
     * Construct glide.
     *
     * @param  {String} selector
     * @param  {Object} options
     */
    function Glide(selector) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      classCallCheck(this, Glide);

      this._c = {};
      this._t = [];
      this._e = new EventsBus();

      this.disabled = false;
      this.selector = selector;
      this.settings = mergeOptions(defaults, options);
      this.index = this.settings.startAt;
    }

    /**
     * Initializes glide.
     *
     * @param {Object} extensions Collection of extensions to initialize.
     * @return {Glide}
     */


    createClass(Glide, [{
      key: 'mount',
      value: function mount$$1() {
        var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        this._e.emit('mount.before');

        if (isObject(extensions)) {
          this._c = mount(this, extensions, this._e);
        } else {
          warn('You need to provide a object on `mount()`');
        }

        this._e.emit('mount.after');

        return this;
      }

      /**
       * Collects an instance `translate` transformers.
       *
       * @param  {Array} transformers Collection of transformers.
       * @return {Void}
       */

    }, {
      key: 'mutate',
      value: function mutate() {
        var transformers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        if (isArray(transformers)) {
          this._t = transformers;
        } else {
          warn('You need to provide a array on `mutate()`');
        }

        return this;
      }

      /**
       * Updates glide with specified settings.
       *
       * @param {Object} settings
       * @return {Glide}
       */

    }, {
      key: 'update',
      value: function update() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        this.settings = mergeOptions(this.settings, settings);

        if (settings.hasOwnProperty('startAt')) {
          this.index = settings.startAt;
        }

        this._e.emit('update');

        return this;
      }

      /**
       * Change slide with specified pattern. A pattern must be in the special format:
       * `>` - Move one forward
       * `<` - Move one backward
       * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
       * `>>` - Rewinds to end (last slide)
       * `<<` - Rewinds to start (first slide)
       *
       * @param {String} pattern
       * @return {Glide}
       */

    }, {
      key: 'go',
      value: function go(pattern) {
        this._c.Run.make(pattern);

        return this;
      }

      /**
       * Move track by specified distance.
       *
       * @param {String} distance
       * @return {Glide}
       */

    }, {
      key: 'move',
      value: function move(distance) {
        this._c.Transition.disable();
        this._c.Move.make(distance);

        return this;
      }

      /**
       * Destroy instance and revert all changes done by this._c.
       *
       * @return {Glide}
       */

    }, {
      key: 'destroy',
      value: function destroy() {
        this._e.emit('destroy');

        return this;
      }

      /**
       * Start instance autoplaying.
       *
       * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
       * @return {Glide}
       */

    }, {
      key: 'play',
      value: function play() {
        var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (interval) {
          this.settings.autoplay = interval;
        }

        this._e.emit('play');

        return this;
      }

      /**
       * Stop instance autoplaying.
       *
       * @return {Glide}
       */

    }, {
      key: 'pause',
      value: function pause() {
        this._e.emit('pause');

        return this;
      }

      /**
       * Sets glide into a idle status.
       *
       * @return {Glide}
       */

    }, {
      key: 'disable',
      value: function disable() {
        this.disabled = true;

        return this;
      }

      /**
       * Sets glide into a active status.
       *
       * @return {Glide}
       */

    }, {
      key: 'enable',
      value: function enable() {
        this.disabled = false;

        return this;
      }

      /**
       * Adds cuutom event listener with handler.
       *
       * @param  {String|Array} event
       * @param  {Function} handler
       * @return {Glide}
       */

    }, {
      key: 'on',
      value: function on(event, handler) {
        this._e.on(event, handler);

        return this;
      }

      /**
       * Checks if glide is a precised type.
       *
       * @param  {String} name
       * @return {Boolean}
       */

    }, {
      key: 'isType',
      value: function isType(name) {
        return this.settings.type === name;
      }

      /**
       * Gets value of the core options.
       *
       * @return {Object}
       */

    }, {
      key: 'settings',
      get: function get$$1() {
        return this._o;
      }

      /**
       * Sets value of the core options.
       *
       * @param  {Object} o
       * @return {Void}
       */
      ,
      set: function set$$1(o) {
        if (isObject(o)) {
          this._o = o;
        } else {
          warn('Options must be an `object` instance.');
        }
      }

      /**
       * Gets current index of the slider.
       *
       * @return {Object}
       */

    }, {
      key: 'index',
      get: function get$$1() {
        return this._i;
      }

      /**
       * Sets current index a slider.
       *
       * @return {Object}
       */
      ,
      set: function set$$1(i) {
        this._i = toInt(i);
      }

      /**
       * Gets type name of the slider.
       *
       * @return {String}
       */

    }, {
      key: 'type',
      get: function get$$1() {
        return this.settings.type;
      }

      /**
       * Gets value of the idle status.
       *
       * @return {Boolean}
       */

    }, {
      key: 'disabled',
      get: function get$$1() {
        return this._d;
      }

      /**
       * Sets value of the idle status.
       *
       * @return {Boolean}
       */
      ,
      set: function set$$1(status) {
        this._d = !!status;
      }
    }]);
    return Glide;
  }();

  function Run (Glide, Components, Events) {
    var Run = {
      /**
       * Initializes autorunning of the glide.
       *
       * @return {Void}
       */
      mount: function mount() {
        this._o = false;
      },


      /**
       * Makes glides running based on the passed moving schema.
       *
       * @param {String} move
       */
      make: function make(move) {
        var _this = this;

        if (!Glide.disabled) {
          Glide.disable();

          this.move = move;

          Events.emit('run.before', this.move);

          this.calculate();

          Events.emit('run', this.move);

          Components.Transition.after(function () {
            if (_this.isStart()) {
              Events.emit('run.start', _this.move);
            }

            if (_this.isEnd()) {
              Events.emit('run.end', _this.move);
            }

            if (_this.isOffset('<') || _this.isOffset('>')) {
              _this._o = false;

              Events.emit('run.offset', _this.move);
            }

            Events.emit('run.after', _this.move);

            Glide.enable();
          });
        }
      },


      /**
       * Calculates current index based on defined move.
       *
       * @return {Void}
       */
      calculate: function calculate() {
        var move = this.move,
            length = this.length;
        var steps = move.steps,
            direction = move.direction;


        var countableSteps = isNumber(toInt(steps)) && toInt(steps) !== 0;

        switch (direction) {
          case '>':
            if (steps === '>') {
              Glide.index = length;
            } else if (this.isEnd()) {
              if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
                this._o = true;

                Glide.index = 0;
              }
            } else if (countableSteps) {
              Glide.index += Math.min(length - Glide.index, -toInt(steps));
            } else {
              Glide.index++;
            }
            break;

          case '<':
            if (steps === '<') {
              Glide.index = 0;
            } else if (this.isStart()) {
              if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
                this._o = true;

                Glide.index = length;
              }
            } else if (countableSteps) {
              Glide.index -= Math.min(Glide.index, toInt(steps));
            } else {
              Glide.index--;
            }
            break;

          case '=':
            Glide.index = steps;
            break;

          default:
            warn('Invalid direction pattern [' + direction + steps + '] has been used');
            break;
        }
      },


      /**
       * Checks if we are on the first slide.
       *
       * @return {Boolean}
       */
      isStart: function isStart() {
        return Glide.index === 0;
      },


      /**
       * Checks if we are on the last slide.
       *
       * @return {Boolean}
       */
      isEnd: function isEnd() {
        return Glide.index === this.length;
      },


      /**
       * Checks if we are making a offset run.
       *
       * @param {String} direction
       * @return {Boolean}
       */
      isOffset: function isOffset(direction) {
        return this._o && this.move.direction === direction;
      }
    };

    define(Run, 'move', {
      /**
       * Gets value of the move schema.
       *
       * @returns {Object}
       */
      get: function get() {
        return this._m;
      },


      /**
       * Sets value of the move schema.
       *
       * @returns {Object}
       */
      set: function set(value) {
        var step = value.substr(1);

        this._m = {
          direction: value.substr(0, 1),
          steps: step ? toInt(step) ? toInt(step) : step : 0
        };
      }
    });

    define(Run, 'length', {
      /**
       * Gets value of the running distance based
       * on zero-indexing number of slides.
       *
       * @return {Number}
       */
      get: function get() {
        var settings = Glide.settings;
        var length = Components.Html.slides.length;

        // If the `bound` option is acitve, a maximum running distance should be
        // reduced by `perView` and `focusAt` settings. Running distance
        // should end before creating an empty space after instance.

        if (Glide.isType('slider') && settings.focusAt !== 'center' && settings.bound) {
          return length - 1 - (toInt(settings.perView) - 1) + toInt(settings.focusAt);
        }

        return length - 1;
      }
    });

    define(Run, 'offset', {
      /**
       * Gets status of the offsetting flag.
       *
       * @return {Boolean}
       */
      get: function get() {
        return this._o;
      }
    });

    return Run;
  }

  /**
   * Returns a current time.
   *
   * @return {Number}
   */
  function now() {
    return new Date().getTime();
  }

  /**
   * Returns a function, that, when invoked, will only be triggered
   * at most once during a given window of time.
   *
   * @param {Function} func
   * @param {Number} wait
   * @param {Object=} options
   * @return {Function}
   *
   * @see https://github.com/jashkenas/underscore
   */
  function throttle(func, wait, options) {
    var timeout = void 0,
        context = void 0,
        args = void 0,
        result = void 0;
    var previous = 0;
    if (!options) options = {};

    var later = function later() {
      previous = options.leading === false ? 0 : now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };

    var throttled = function throttled() {
      var at = now();
      if (!previous && options.leading === false) previous = at;
      var remaining = wait - (at - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = at;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };

    throttled.cancel = function () {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };

    return throttled;
  }

  var MARGIN_TYPE = {
    ltr: ['marginLeft', 'marginRight'],
    rtl: ['marginRight', 'marginLeft']
  };

  function Gaps (Glide, Components, Events) {
    var Gaps = {
      /**
       * Applies gaps between slides. First and last
       * slides do not receive it's edge margins.
       *
       * @param {HTMLCollection} slides
       * @return {Void}
       */
      apply: function apply(slides) {
        for (var i = 0, len = slides.length; i < len; i++) {
          var style = slides[i].style;
          var direction = Components.Direction.value;

          if (i !== 0) {
            style[MARGIN_TYPE[direction][0]] = this.value / 2 + 'px';
          } else {
            style[MARGIN_TYPE[direction][0]] = '';
          }

          if (i !== slides.length - 1) {
            style[MARGIN_TYPE[direction][1]] = this.value / 2 + 'px';
          } else {
            style[MARGIN_TYPE[direction][1]] = '';
          }
        }
      },


      /**
       * Removes gaps from the slides.
       *
       * @param {HTMLCollection} slides
       * @returns {Void}
      */
      remove: function remove(slides) {
        for (var i = 0, len = slides.length; i < len; i++) {
          var style = slides[i].style;

          style.marginLeft = '';
          style.marginRight = '';
        }
      }
    };

    define(Gaps, 'value', {
      /**
       * Gets value of the gap.
       *
       * @returns {Number}
       */
      get: function get() {
        return toInt(Glide.settings.gap);
      }
    });

    define(Gaps, 'grow', {
      /**
       * Gets additional dimentions value caused by gaps.
       * Used to increase width of the slides wrapper.
       *
       * @returns {Number}
       */
      get: function get() {
        return Gaps.value * (Components.Sizes.length - 1);
      }
    });

    define(Gaps, 'reductor', {
      /**
       * Gets reduction value caused by gaps.
       * Used to subtract width of the slides.
       *
       * @returns {Number}
       */
      get: function get() {
        var perView = Glide.settings.perView;

        return Gaps.value * (perView - 1) / perView;
      }
    });

    /**
     * Apply calculated gaps:
     * - after building, so slides (including clones) will receive proper margins
     * - on updating via API, to recalculate gaps with new options
     */
    Events.on(['build.after', 'update'], throttle(function () {
      Gaps.apply(Components.Html.wrapper.children);
    }, 30));

    /**
     * Remove gaps:
     * - on destroying to bring markup to its inital state
     */
    Events.on('destroy', function () {
      Gaps.remove(Components.Html.wrapper.children);
    });

    return Gaps;
  }

  /**
   * Finds siblings nodes of the passed node.
   *
   * @param  {Element} node
   * @return {Array}
   */
  function siblings(node) {
    if (node && node.parentNode) {
      var n = node.parentNode.firstChild;
      var matched = [];

      for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== node) {
          matched.push(n);
        }
      }

      return matched;
    }

    return [];
  }

  /**
   * Checks if passed node exist and is a valid element.
   *
   * @param  {Element} node
   * @return {Boolean}
   */
  function exist(node) {
    if (node && node instanceof window.HTMLElement) {
      return true;
    }

    return false;
  }

  var TRACK_SELECTOR = '[data-glide-el="track"]';

  function Html (Glide, Components) {
    var Html = {
      /**
       * Setup slider HTML nodes.
       *
       * @param {Glide} glide
       */
      mount: function mount() {
        this.root = Glide.selector;
        this.track = this.root.querySelector(TRACK_SELECTOR);
        this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function (slide) {
          return !slide.classList.contains(Glide.settings.classes.cloneSlide);
        });
      }
    };

    define(Html, 'root', {
      /**
       * Gets node of the glide main element.
       *
       * @return {Object}
       */
      get: function get() {
        return Html._r;
      },


      /**
       * Sets node of the glide main element.
       *
       * @return {Object}
       */
      set: function set(r) {
        if (isString(r)) {
          r = document.querySelector(r);
        }

        if (exist(r)) {
          Html._r = r;
        } else {
          warn('Root element must be a existing Html node');
        }
      }
    });

    define(Html, 'track', {
      /**
       * Gets node of the glide track with slides.
       *
       * @return {Object}
       */
      get: function get() {
        return Html._t;
      },


      /**
       * Sets node of the glide track with slides.
       *
       * @return {Object}
       */
      set: function set(t) {
        if (exist(t)) {
          Html._t = t;
        } else {
          warn('Could not find track element. Please use ' + TRACK_SELECTOR + ' attribute.');
        }
      }
    });

    define(Html, 'wrapper', {
      /**
       * Gets node of the slides wrapper.
       *
       * @return {Object}
       */
      get: function get() {
        return Html.track.children[0];
      }
    });

    return Html;
  }

  function Peek (Glide, Components, Events) {
    var Peek = {
      /**
       * Setups how much to peek based on settings.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.value = Glide.settings.peek;
      }
    };

    define(Peek, 'value', {
      /**
       * Gets value of the peek.
       *
       * @returns {Number|Object}
       */
      get: function get() {
        return Peek._v;
      },


      /**
       * Sets value of the peek.
       *
       * @param {Number|Object} value
       * @return {Void}
       */
      set: function set(value) {
        if (isObject(value)) {
          value.before = toInt(value.before);
          value.after = toInt(value.after);
        } else {
          value = toInt(value);
        }

        Peek._v = value;
      }
    });

    define(Peek, 'reductor', {
      /**
       * Gets reduction value caused by peek.
       *
       * @returns {Number}
       */
      get: function get() {
        var value = Peek.value;
        var perView = Glide.settings.perView;

        if (isObject(value)) {
          return value.before / perView + value.after / perView;
        }

        return value * 2 / perView;
      }
    });

    /**
     * Recalculate peeking sizes on:
     * - when resizing window to update to proper percents
     */
    Events.on(['resize', 'update'], function () {
      Peek.mount();
    });

    return Peek;
  }

  function Move (Glide, Components, Events) {
    var Move = {
      /**
       * Constructs move component.
       *
       * @returns {Void}
       */
      mount: function mount() {
        this._o = 0;
      },


      /**
       * Calculates a movement value based on passed offset and currently active index.
       *
       * @param  {Number} offset
       * @return {Void}
       */
      make: function make() {
        var _this = this;

        var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        this.offset = offset;

        Events.emit('move', {
          movement: this.value
        });

        Components.Transition.after(function () {
          Events.emit('move.after', {
            movement: _this.value
          });
        });
      }
    };

    define(Move, 'offset', {
      /**
       * Gets an offset value used to modify current translate.
       *
       * @return {Object}
       */
      get: function get() {
        return Move._o;
      },


      /**
       * Sets an offset value used to modify current translate.
       *
       * @return {Object}
       */
      set: function set(value) {
        Move._o = !isUndefined(value) ? toInt(value) : 0;
      }
    });

    define(Move, 'translate', {
      /**
       * Gets a raw movement value.
       *
       * @return {Number}
       */
      get: function get() {
        return Components.Sizes.slideWidth * Glide.index;
      }
    });

    define(Move, 'value', {
      /**
       * Gets an actual movement value corrected by offset.
       *
       * @return {Number}
       */
      get: function get() {
        var offset = this.offset;
        var translate = this.translate;

        if (Components.Direction.is('rtl')) {
          return translate + offset;
        }

        return translate - offset;
      }
    });

    /**
     * Make movement to proper slide on:
     * - before build, so glide will start at `startAt` index
     * - on each standard run to move to newly calculated index
     */
    Events.on(['build.before', 'run'], function () {
      Move.make();
    });

    return Move;
  }

  function Sizes (Glide, Components, Events) {
    var Sizes = {
      /**
       * Setups dimentions of slides.
       *
       * @return {Void}
       */
      setupSlides: function setupSlides() {
        var width = this.slideWidth + 'px';
        var slides = Components.Html.slides;

        for (var i = 0; i < slides.length; i++) {
          slides[i].style.width = width;
        }
      },


      /**
       * Setups dimentions of slides wrapper.
       *
       * @return {Void}
       */
      setupWrapper: function setupWrapper(dimention) {
        Components.Html.wrapper.style.width = this.wrapperSize + 'px';
      },


      /**
       * Removes applied styles from HTML elements.
       *
       * @returns {Void}
       */
      remove: function remove() {
        var slides = Components.Html.slides;

        for (var i = 0; i < slides.length; i++) {
          slides[i].style.width = '';
        }

        Components.Html.wrapper.style.width = '';
      }
    };

    define(Sizes, 'length', {
      /**
       * Gets count number of the slides.
       *
       * @return {Number}
       */
      get: function get() {
        return Components.Html.slides.length;
      }
    });

    define(Sizes, 'width', {
      /**
       * Gets width value of the glide.
       *
       * @return {Number}
       */
      get: function get() {
        return Components.Html.root.offsetWidth;
      }
    });

    define(Sizes, 'wrapperSize', {
      /**
       * Gets size of the slides wrapper.
       *
       * @return {Number}
       */
      get: function get() {
        return Sizes.slideWidth * Sizes.length + Components.Gaps.grow + Components.Clones.grow;
      }
    });

    define(Sizes, 'slideWidth', {
      /**
       * Gets width value of the single slide.
       *
       * @return {Number}
       */
      get: function get() {
        return Sizes.width / Glide.settings.perView - Components.Peek.reductor - Components.Gaps.reductor;
      }
    });

    /**
     * Apply calculated glide's dimensions:
     * - before building, so other dimentions (e.g. translate) will be calculated propertly
     * - when resizing window to recalculate sildes dimensions
     * - on updating via API, to calculate dimensions based on new options
     */
    Events.on(['build.before', 'resize', 'update'], function () {
      Sizes.setupSlides();
      Sizes.setupWrapper();
    });

    /**
     * Remove calculated glide's dimensions:
     * - on destoting to bring markup to its inital state
     */
    Events.on('destroy', function () {
      Sizes.remove();
    });

    return Sizes;
  }

  function Build (Glide, Components, Events) {
    var Build = {
      /**
       * Init glide building. Adds classes, sets
       * dimensions and setups initial state.
       *
       * @return {Void}
       */
      mount: function mount() {
        Events.emit('build.before');

        this.typeClass();
        this.activeClass();

        Events.emit('build.after');
      },


      /**
       * Adds `type` class to the glide element.
       *
       * @return {Void}
       */
      typeClass: function typeClass() {
        Components.Html.root.classList.add(Glide.settings.classes[Glide.settings.type]);
      },


      /**
       * Sets active class to current slide.
       *
       * @return {Void}
       */
      activeClass: function activeClass() {
        var classes = Glide.settings.classes;
        var slide = Components.Html.slides[Glide.index];

        if (slide) {
          slide.classList.add(classes.activeSlide);

          siblings(slide).forEach(function (sibling) {
            sibling.classList.remove(classes.activeSlide);
          });
        }
      },


      /**
       * Removes HTML classes applied at building.
       *
       * @return {Void}
       */
      removeClasses: function removeClasses() {
        var classes = Glide.settings.classes;

        Components.Html.root.classList.remove(classes[Glide.settings.type]);

        Components.Html.slides.forEach(function (sibling) {
          sibling.classList.remove(classes.activeSlide);
        });
      }
    };

    /**
     * Clear building classes:
     * - on destroying to bring HTML to its initial state
     * - on updating to remove classes before remounting component
     */
    Events.on(['destroy', 'update'], function () {
      Build.removeClasses();
    });

    /**
     * Remount component:
     * - on resizing of the window to calculate new dimentions
     * - on updating settings via API
     */
    Events.on(['resize', 'update'], function () {
      Build.mount();
    });

    /**
     * Swap active class of current slide:
     * - after each move to the new index
     */
    Events.on('move.after', function () {
      Build.activeClass();
    });

    return Build;
  }

  function Clones (Glide, Components, Events) {
    var Clones = {
      /**
       * Create pattern map and collect slides to be cloned.
       */
      mount: function mount() {
        this.items = [];

        if (Glide.isType('carousel')) {
          this.items = this.collect();
        }
      },


      /**
       * Collect clones with pattern.
       *
       * @return {Void}
       */
      collect: function collect() {
        var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var slides = Components.Html.slides;
        var _Glide$settings = Glide.settings,
            perView = _Glide$settings.perView,
            classes = _Glide$settings.classes;


        var peekIncrementer = +!!Glide.settings.peek;
        var part = perView + peekIncrementer;
        var start = slides.slice(0, part);
        var end = slides.slice(-part);

        for (var r = 0; r < Math.max(1, Math.floor(perView / slides.length)); r++) {
          for (var i = 0; i < start.length; i++) {
            var clone = start[i].cloneNode(true);

            clone.classList.add(classes.cloneSlide);

            items.push(clone);
          }

          for (var _i = 0; _i < end.length; _i++) {
            var _clone = end[_i].cloneNode(true);

            _clone.classList.add(classes.cloneSlide);

            items.unshift(_clone);
          }
        }

        return items;
      },


      /**
       * Append cloned slides with generated pattern.
       *
       * @return {Void}
       */
      append: function append() {
        var items = this.items;
        var _Components$Html = Components.Html,
            wrapper = _Components$Html.wrapper,
            slides = _Components$Html.slides;


        var half = Math.floor(items.length / 2);
        var prepend = items.slice(0, half).reverse();
        var append = items.slice(half, items.length);
        var width = Components.Sizes.slideWidth + 'px';

        for (var i = 0; i < append.length; i++) {
          wrapper.appendChild(append[i]);
        }

        for (var _i2 = 0; _i2 < prepend.length; _i2++) {
          wrapper.insertBefore(prepend[_i2], slides[0]);
        }

        for (var _i3 = 0; _i3 < items.length; _i3++) {
          items[_i3].style.width = width;
        }
      },


      /**
       * Remove all cloned slides.
       *
       * @return {Void}
       */
      remove: function remove() {
        var items = this.items;


        for (var i = 0; i < items.length; i++) {
          Components.Html.wrapper.removeChild(items[i]);
        }
      }
    };

    define(Clones, 'grow', {
      /**
       * Gets additional dimentions value caused by clones.
       *
       * @return {Number}
       */
      get: function get() {
        return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones.items.length;
      }
    });

    /**
     * Append additional slide's clones:
     * - while glide's type is `carousel`
     */
    Events.on('update', function () {
      Clones.remove();
      Clones.mount();
      Clones.append();
    });

    /**
     * Append additional slide's clones:
     * - while glide's type is `carousel`
     */
    Events.on('build.before', function () {
      if (Glide.isType('carousel')) {
        Clones.append();
      }
    });

    /**
     * Remove clones HTMLElements:
     * - on destroying, to bring HTML to its initial state
     */
    Events.on('destroy', function () {
      Clones.remove();
    });

    return Clones;
  }

  var EventsBinder = function () {
    /**
     * Construct a EventsBinder instance.
     */
    function EventsBinder() {
      var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      classCallCheck(this, EventsBinder);

      this.listeners = listeners;
    }

    /**
     * Adds events listeners to arrows HTML elements.
     *
     * @param  {String|Array} events
     * @param  {Element|Window|Document} el
     * @param  {Function} closure
     * @param  {Boolean|Object} capture
     * @return {Void}
     */


    createClass(EventsBinder, [{
      key: 'on',
      value: function on(events, el, closure) {
        var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (isString(events)) {
          events = [events];
        }

        for (var i = 0; i < events.length; i++) {
          this.listeners[events[i]] = closure;

          el.addEventListener(events[i], this.listeners[events[i]], capture);
        }
      }

      /**
       * Removes event listeners from arrows HTML elements.
       *
       * @param  {String|Array} events
       * @param  {Element|Window|Document} el
       * @param  {Boolean|Object} capture
       * @return {Void}
       */

    }, {
      key: 'off',
      value: function off(events, el) {
        var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (isString(events)) {
          events = [events];
        }

        for (var i = 0; i < events.length; i++) {
          el.removeEventListener(events[i], this.listeners[events[i]], capture);
        }
      }

      /**
       * Destroy collected listeners.
       *
       * @returns {Void}
       */

    }, {
      key: 'destroy',
      value: function destroy() {
        delete this.listeners;
      }
    }]);
    return EventsBinder;
  }();

  function Resize (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    var Resize = {
      /**
       * Initializes window bindings.
       */
      mount: function mount() {
        this.bind();
      },


      /**
       * Binds `rezsize` listener to the window.
       * It's a costly event, so we are debouncing it.
       *
       * @return {Void}
       */
      bind: function bind() {
        Binder.on('resize', window, throttle(function () {
          Events.emit('resize');
        }, Glide.settings.throttle));
      },


      /**
       * Unbinds listeners from the window.
       *
       * @return {Void}
       */
      unbind: function unbind() {
        Binder.off('resize', window);
      }
    };

    /**
     * Remove bindings from window:
     * - on destroying, to remove added EventListener
     */
    Events.on('destroy', function () {
      Resize.unbind();
      Binder.destroy();
    });

    return Resize;
  }

  var VALID_DIRECTIONS = ['ltr', 'rtl'];
  var FLIPED_MOVEMENTS = {
    '>': '<',
    '<': '>',
    '=': '='
  };

  function Direction (Glide, Components, Events) {
    var Direction = {
      /**
       * Setups gap value based on settings.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.value = Glide.settings.direction;
      },


      /**
       * Resolves pattern based on direction value
       *
       * @param {String} pattern
       * @returns {String}
       */
      resolve: function resolve(pattern) {
        var token = pattern.slice(0, 1);

        if (this.is('rtl')) {
          return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
        }

        return pattern;
      },


      /**
       * Checks value of direction mode.
       *
       * @param {String} direction
       * @returns {Boolean}
       */
      is: function is(direction) {
        return this.value === direction;
      },


      /**
       * Applies direction class to the root HTML element.
       *
       * @return {Void}
       */
      addClass: function addClass() {
        Components.Html.root.classList.add(Glide.settings.classes.direction[this.value]);
      },


      /**
       * Removes direction class from the root HTML element.
       *
       * @return {Void}
       */
      removeClass: function removeClass() {
        Components.Html.root.classList.remove(Glide.settings.classes.direction[this.value]);
      }
    };

    define(Direction, 'value', {
      /**
       * Gets value of the direction.
       *
       * @returns {Number}
       */
      get: function get() {
        return Direction._v;
      },


      /**
       * Sets value of the direction.
       *
       * @param {String} value
       * @return {Void}
       */
      set: function set(value) {
        if (VALID_DIRECTIONS.indexOf(value) > -1) {
          Direction._v = value;
        } else {
          warn('Direction value must be `ltr` or `rtl`');
        }
      }
    });

    /**
     * Clear direction class:
     * - on destroy to bring HTML to its initial state
     * - on update to remove class before reappling bellow
     */
    Events.on(['destroy', 'update'], function () {
      Direction.removeClass();
    });

    /**
     * Remount component:
     * - on update to reflect changes in direction value
     */
    Events.on('update', function () {
      Direction.mount();
    });

    /**
     * Apply direction class:
     * - before building to apply class for the first time
     * - on updating to reapply direction class that may changed
     */
    Events.on(['build.before', 'update'], function () {
      Direction.addClass();
    });

    return Direction;
  }

  /**
   * Reflects value of glide movement.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function Rtl (Glide, Components) {
    return {
      /**
       * Negates the passed translate if glide is in RTL option.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        if (Components.Direction.is('rtl')) {
          return -translate;
        }

        return translate;
      }
    };
  }

  /**
   * Updates glide movement with a `gap` settings.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function Gap (Glide, Components) {
    return {
      /**
       * Modifies passed translate value with number in the `gap` settings.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        return translate + Components.Gaps.value * Glide.index;
      }
    };
  }

  /**
   * Updates glide movement with width of additional clones width.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function Grow (Glide, Components) {
    return {
      /**
       * Adds to the passed translate width of the half of clones.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        return translate + Components.Clones.grow / 2;
      }
    };
  }

  /**
   * Updates glide movement with a `peek` settings.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function Peeking (Glide, Components) {
    return {
      /**
       * Modifies passed translate value with a `peek` setting.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        if (Glide.settings.focusAt >= 0) {
          var peek = Components.Peek.value;

          if (isObject(peek)) {
            return translate - peek.before;
          }

          return translate - peek;
        }

        return translate;
      }
    };
  }

  /**
   * Updates glide movement with a `focusAt` settings.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function Focusing (Glide, Components) {
    return {
      /**
       * Modifies passed translate value with index in the `focusAt` setting.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        var gap = Components.Gaps.value;
        var width = Components.Sizes.width;
        var focusAt = Glide.settings.focusAt;
        var slideWidth = Components.Sizes.slideWidth;

        if (focusAt === 'center') {
          return translate - (width / 2 - slideWidth / 2);
        }

        return translate - slideWidth * focusAt - gap * focusAt;
      }
    };
  }

  /**
   * Applies diffrent transformers on translate value.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function mutator (Glide, Components, Events) {
    /**
     * Merge instance transformers with collection of default transformers.
     * It's important that the Rtl component be last on the list,
     * so it reflects all previous transformations.
     *
     * @type {Array}
     */
    var TRANSFORMERS = [Gap, Grow, Peeking, Focusing].concat(Glide._t, [Rtl]);

    return {
      /**
       * Piplines translate value with registered transformers.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      mutate: function mutate(translate) {
        for (var i = 0; i < TRANSFORMERS.length; i++) {
          var transformer = TRANSFORMERS[i];

          if (isFunction(transformer) && isFunction(transformer().modify)) {
            translate = transformer(Glide, Components, Events).modify(translate);
          } else {
            warn('Transformer should be a function that returns an object with `modify()` method');
          }
        }

        return translate;
      }
    };
  }

  function Translate (Glide, Components, Events) {
    var Translate = {
      /**
       * Sets value of translate on HTML element.
       *
       * @param {Number} value
       * @return {Void}
       */
      set: function set(value) {
        var transform = mutator(Glide, Components).mutate(value);

        Components.Html.wrapper.style.transform = 'translate3d(' + -1 * transform + 'px, 0px, 0px)';
      },


      /**
       * Removes value of translate from HTML element.
       *
       * @return {Void}
       */
      remove: function remove() {
        Components.Html.wrapper.style.transform = '';
      }
    };

    /**
     * Set new translate value:
     * - on move to reflect index change
     * - on updating via API to reflect possible changes in options
     */
    Events.on('move', function (context) {
      var gap = Components.Gaps.value;
      var length = Components.Sizes.length;
      var width = Components.Sizes.slideWidth;

      if (Glide.isType('carousel') && Components.Run.isOffset('<')) {
        Components.Transition.after(function () {
          Events.emit('translate.jump');

          Translate.set(width * (length - 1));
        });

        return Translate.set(-width - gap * length);
      }

      if (Glide.isType('carousel') && Components.Run.isOffset('>')) {
        Components.Transition.after(function () {
          Events.emit('translate.jump');

          Translate.set(0);
        });

        return Translate.set(width * length + gap * length);
      }

      return Translate.set(context.movement);
    });

    /**
     * Remove translate:
     * - on destroying to bring markup to its inital state
     */
    Events.on('destroy', function () {
      Translate.remove();
    });

    return Translate;
  }

  function Transition (Glide, Components, Events) {
    /**
     * Holds inactivity status of transition.
     * When true transition is not applied.
     *
     * @type {Boolean}
     */
    var disabled = false;

    var Transition = {
      /**
       * Composes string of the CSS transition.
       *
       * @param {String} property
       * @return {String}
       */
      compose: function compose(property) {
        var settings = Glide.settings;

        if (!disabled) {
          return property + ' ' + this.duration + 'ms ' + settings.animationTimingFunc;
        }

        return property + ' 0ms ' + settings.animationTimingFunc;
      },


      /**
       * Sets value of transition on HTML element.
       *
       * @param {String=} property
       * @return {Void}
       */
      set: function set() {
        var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

        Components.Html.wrapper.style.transition = this.compose(property);
      },


      /**
       * Removes value of transition from HTML element.
       *
       * @return {Void}
       */
      remove: function remove() {
        Components.Html.wrapper.style.transition = '';
      },


      /**
       * Runs callback after animation.
       *
       * @param  {Function} callback
       * @return {Void}
       */
      after: function after(callback) {
        setTimeout(function () {
          callback();
        }, this.duration);
      },


      /**
       * Enable transition.
       *
       * @return {Void}
       */
      enable: function enable() {
        disabled = false;

        this.set();
      },


      /**
       * Disable transition.
       *
       * @return {Void}
       */
      disable: function disable() {
        disabled = true;

        this.set();
      }
    };

    define(Transition, 'duration', {
      /**
       * Gets duration of the transition based
       * on currently running animation type.
       *
       * @return {Number}
       */
      get: function get() {
        var settings = Glide.settings;

        if (Glide.isType('slider') && Components.Run.offset) {
          return settings.rewindDuration;
        }

        return settings.animationDuration;
      }
    });

    /**
     * Set transition `style` value:
     * - on each moving, because it may be cleared by offset move
     */
    Events.on('move', function () {
      Transition.set();
    });

    /**
     * Disable transition:
     * - before initial build to avoid transitioning from `0` to `startAt` index
     * - while resizing window and recalculating dimentions
     * - on jumping from offset transition at start and end edges in `carousel` type
     */
    Events.on(['build.before', 'resize', 'translate.jump'], function () {
      Transition.disable();
    });

    /**
     * Enable transition:
     * - on each running, because it may be disabled by offset move
     */
    Events.on('run', function () {
      Transition.enable();
    });

    /**
     * Remove transition:
     * - on destroying to bring markup to its inital state
     */
    Events.on('destroy', function () {
      Transition.remove();
    });

    return Transition;
  }

  /**
   * Test via a getter in the options object to see
   * if the passive property is accessed.
   *
   * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
   */

  var supportsPassive = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supportsPassive = true;
      }
    });

    window.addEventListener('testPassive', null, opts);
    window.removeEventListener('testPassive', null, opts);
  } catch (e) {}

  var supportsPassive$1 = supportsPassive;

  var START_EVENTS = ['touchstart', 'mousedown'];
  var MOVE_EVENTS = ['touchmove', 'mousemove'];
  var END_EVENTS = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'];
  var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];

  function Swipe (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    var swipeSin = 0;
    var swipeStartX = 0;
    var swipeStartY = 0;
    var disabled = false;
    var capture = supportsPassive$1 ? { passive: true } : false;

    var Swipe = {
      /**
       * Initializes swipe bindings.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.bindSwipeStart();
      },


      /**
       * Handler for `swipestart` event. Calculates entry points of the user's tap.
       *
       * @param {Object} event
       * @return {Void}
       */
      start: function start(event) {
        if (!disabled && !Glide.disabled) {
          this.disable();

          var swipe = this.touches(event);

          swipeSin = null;
          swipeStartX = toInt(swipe.pageX);
          swipeStartY = toInt(swipe.pageY);

          this.bindSwipeMove();
          this.bindSwipeEnd();

          Events.emit('swipe.start');
        }
      },


      /**
       * Handler for `swipemove` event. Calculates user's tap angle and distance.
       *
       * @param {Object} event
       */
      move: function move(event) {
        if (!Glide.disabled) {
          var _Glide$settings = Glide.settings,
              touchAngle = _Glide$settings.touchAngle,
              touchRatio = _Glide$settings.touchRatio,
              classes = _Glide$settings.classes;


          var swipe = this.touches(event);

          var subExSx = toInt(swipe.pageX) - swipeStartX;
          var subEySy = toInt(swipe.pageY) - swipeStartY;
          var powEX = Math.abs(subExSx << 2);
          var powEY = Math.abs(subEySy << 2);
          var swipeHypotenuse = Math.sqrt(powEX + powEY);
          var swipeCathetus = Math.sqrt(powEY);

          swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);

          if (swipeSin * 180 / Math.PI < touchAngle) {
            event.stopPropagation();

            Components.Move.make(subExSx * toFloat(touchRatio));

            Components.Html.root.classList.add(classes.dragging);

            Events.emit('swipe.move');
          } else {
            return false;
          }
        }
      },


      /**
       * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
       *
       * @param {Object} event
       * @return {Void}
       */
      end: function end(event) {
        if (!Glide.disabled) {
          var settings = Glide.settings;

          var swipe = this.touches(event);
          var threshold = this.threshold(event);

          var swipeDistance = swipe.pageX - swipeStartX;
          var swipeDeg = swipeSin * 180 / Math.PI;
          var steps = Math.round(swipeDistance / Components.Sizes.slideWidth);

          this.enable();

          if (swipeDistance > threshold && swipeDeg < settings.touchAngle) {
            // While swipe is positive and greater than threshold move backward.
            if (settings.perTouch) {
              steps = Math.min(steps, toInt(settings.perTouch));
            }

            if (Components.Direction.is('rtl')) {
              steps = -steps;
            }

            Components.Run.make(Components.Direction.resolve('<' + steps));
          } else if (swipeDistance < -threshold && swipeDeg < settings.touchAngle) {
            // While swipe is negative and lower than negative threshold move forward.
            if (settings.perTouch) {
              steps = Math.max(steps, -toInt(settings.perTouch));
            }

            if (Components.Direction.is('rtl')) {
              steps = -steps;
            }

            Components.Run.make(Components.Direction.resolve('>' + steps));
          } else {
            // While swipe don't reach distance apply previous transform.
            Components.Move.make();
          }

          Components.Html.root.classList.remove(settings.classes.dragging);

          this.unbindSwipeMove();
          this.unbindSwipeEnd();

          Events.emit('swipe.end');
        }
      },


      /**
       * Binds swipe's starting event.
       *
       * @return {Void}
       */
      bindSwipeStart: function bindSwipeStart() {
        var _this = this;

        var settings = Glide.settings;

        if (settings.swipeThreshold) {
          Binder.on(START_EVENTS[0], Components.Html.wrapper, function (event) {
            _this.start(event);
          }, capture);
        }

        if (settings.dragThreshold) {
          Binder.on(START_EVENTS[1], Components.Html.wrapper, function (event) {
            _this.start(event);
          }, capture);
        }
      },


      /**
       * Unbinds swipe's starting event.
       *
       * @return {Void}
       */
      unbindSwipeStart: function unbindSwipeStart() {
        Binder.off(START_EVENTS[0], Components.Html.wrapper, capture);
        Binder.off(START_EVENTS[1], Components.Html.wrapper, capture);
      },


      /**
       * Binds swipe's moving event.
       *
       * @return {Void}
       */
      bindSwipeMove: function bindSwipeMove() {
        var _this2 = this;

        Binder.on(MOVE_EVENTS, Components.Html.wrapper, throttle(function (event) {
          _this2.move(event);
        }, Glide.settings.throttle), capture);
      },


      /**
       * Unbinds swipe's moving event.
       *
       * @return {Void}
       */
      unbindSwipeMove: function unbindSwipeMove() {
        Binder.off(MOVE_EVENTS, Components.Html.wrapper, capture);
      },


      /**
       * Binds swipe's ending event.
       *
       * @return {Void}
       */
      bindSwipeEnd: function bindSwipeEnd() {
        var _this3 = this;

        Binder.on(END_EVENTS, Components.Html.wrapper, function (event) {
          _this3.end(event);
        });
      },


      /**
       * Unbinds swipe's ending event.
       *
       * @return {Void}
       */
      unbindSwipeEnd: function unbindSwipeEnd() {
        Binder.off(END_EVENTS, Components.Html.wrapper);
      },


      /**
       * Normalizes event touches points accorting to different types.
       *
       * @param {Object} event
       */
      touches: function touches(event) {
        if (MOUSE_EVENTS.indexOf(event.type) > -1) {
          return event;
        }

        return event.touches[0] || event.changedTouches[0];
      },


      /**
       * Gets value of minimum swipe distance settings based on event type.
       *
       * @return {Number}
       */
      threshold: function threshold(event) {
        var settings = Glide.settings;

        if (MOUSE_EVENTS.indexOf(event.type) > -1) {
          return settings.dragThreshold;
        }

        return settings.swipeThreshold;
      },


      /**
       * Enables swipe event.
       *
       * @return {self}
       */
      enable: function enable() {
        disabled = false;

        Components.Transition.enable();

        return this;
      },


      /**
       * Disables swipe event.
       *
       * @return {self}
       */
      disable: function disable() {
        disabled = true;

        Components.Transition.disable();

        return this;
      }
    };

    /**
     * Add component class:
     * - after initial building
     */
    Events.on('build.after', function () {
      Components.Html.root.classList.add(Glide.settings.classes.swipeable);
    });

    /**
     * Remove swiping bindings:
     * - on destroying, to remove added EventListeners
     */
    Events.on('destroy', function () {
      Swipe.unbindSwipeStart();
      Swipe.unbindSwipeMove();
      Swipe.unbindSwipeEnd();
      Binder.destroy();
    });

    return Swipe;
  }

  function Images (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    var Images = {
      /**
       * Binds listener to glide wrapper.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.bind();
      },


      /**
       * Binds `dragstart` event on wrapper to prevent dragging images.
       *
       * @return {Void}
       */
      bind: function bind() {
        Binder.on('dragstart', Components.Html.wrapper, this.dragstart);
      },


      /**
       * Unbinds `dragstart` event on wrapper.
       *
       * @return {Void}
       */
      unbind: function unbind() {
        Binder.off('dragstart', Components.Html.wrapper);
      },


      /**
       * Event handler. Prevents dragging.
       *
       * @return {Void}
       */
      dragstart: function dragstart(event) {
        event.preventDefault();
      }
    };

    /**
     * Remove bindings from images:
     * - on destroying, to remove added EventListeners
     */
    Events.on('destroy', function () {
      Images.unbind();
      Binder.destroy();
    });

    return Images;
  }

  function Anchors (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    /**
     * Holds detaching status of anchors.
     * Prevents detaching of already detached anchors.
     *
     * @private
     * @type {Boolean}
     */
    var detached = false;

    /**
     * Holds preventing status of anchors.
     * If `true` redirection after click will be disabled.
     *
     * @private
     * @type {Boolean}
     */
    var prevented = false;

    var Anchors = {
      /**
       * Setups a initial state of anchors component.
       *
       * @returns {Void}
       */
      mount: function mount() {
        /**
         * Holds collection of anchors elements.
         *
         * @private
         * @type {HTMLCollection}
         */
        this._a = Components.Html.wrapper.querySelectorAll('a');

        this.bind();
      },


      /**
       * Binds events to anchors inside a track.
       *
       * @return {Void}
       */
      bind: function bind() {
        Binder.on('click', Components.Html.wrapper, this.click);
      },


      /**
       * Unbinds events attached to anchors inside a track.
       *
       * @return {Void}
       */
      unbind: function unbind() {
        Binder.off('click', Components.Html.wrapper);
      },


      /**
       * Handler for click event. Prevents clicks when glide is in `prevent` status.
       *
       * @param  {Object} event
       * @return {Void}
       */
      click: function click(event) {
        if (prevented) {
          event.stopPropagation();
          event.preventDefault();
        }
      },


      /**
       * Detaches anchors click event inside glide.
       *
       * @return {self}
       */
      detach: function detach() {
        prevented = true;

        if (!detached) {
          for (var i = 0; i < this.items.length; i++) {
            this.items[i].draggable = false;

            this.items[i].setAttribute('data-href', this.items[i].getAttribute('href'));

            this.items[i].removeAttribute('href');
          }

          detached = true;
        }

        return this;
      },


      /**
       * Attaches anchors click events inside glide.
       *
       * @return {self}
       */
      attach: function attach() {
        prevented = false;

        if (detached) {
          for (var i = 0; i < this.items.length; i++) {
            this.items[i].draggable = true;

            this.items[i].setAttribute('href', this.items[i].getAttribute('data-href'));
          }

          detached = false;
        }

        return this;
      }
    };

    define(Anchors, 'items', {
      /**
       * Gets collection of the arrows HTML elements.
       *
       * @return {HTMLElement[]}
       */
      get: function get() {
        return Anchors._a;
      }
    });

    /**
     * Detach anchors inside slides:
     * - on swiping, so they won't redirect to its `href` attributes
     */
    Events.on('swipe.move', function () {
      Anchors.detach();
    });

    /**
     * Attach anchors inside slides:
     * - after swiping and transitions ends, so they can redirect after click again
     */
    Events.on('swipe.end', function () {
      Components.Transition.after(function () {
        Anchors.attach();
      });
    });

    /**
     * Unbind anchors inside slides:
     * - on destroying, to bring anchors to its initial state
     */
    Events.on('destroy', function () {
      Anchors.attach();
      Anchors.unbind();
      Binder.destroy();
    });

    return Anchors;
  }

  var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
  var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';

  function Controls (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    var capture = supportsPassive$1 ? { passive: true } : false;

    var Controls = {
      /**
       * Inits arrows. Binds events listeners
       * to the arrows HTML elements.
       *
       * @return {Void}
       */
      mount: function mount() {
        /**
         * Collection of navigation HTML elements.
         *
         * @private
         * @type {HTMLCollection}
         */
        this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR);

        /**
         * Collection of controls HTML elements.
         *
         * @private
         * @type {HTMLCollection}
         */
        this._c = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR);

        this.addBindings();
      },


      /**
       * Sets active class to current slide.
       *
       * @return {Void}
       */
      setActive: function setActive() {
        for (var i = 0; i < this._n.length; i++) {
          this.addClass(this._n[i].children);
        }
      },


      /**
       * Removes active class to current slide.
       *
       * @return {Void}
       */
      removeActive: function removeActive() {
        for (var i = 0; i < this._n.length; i++) {
          this.removeClass(this._n[i].children);
        }
      },


      /**
       * Toggles active class on items inside navigation.
       *
       * @param  {HTMLElement} controls
       * @return {Void}
       */
      addClass: function addClass(controls) {
        var settings = Glide.settings;
        var item = controls[Glide.index];

        if (item) {
          item.classList.add(settings.classes.activeNav);

          siblings(item).forEach(function (sibling) {
            sibling.classList.remove(settings.classes.activeNav);
          });
        }
      },


      /**
       * Removes active class from active control.
       *
       * @param  {HTMLElement} controls
       * @return {Void}
       */
      removeClass: function removeClass(controls) {
        var item = controls[Glide.index];

        if (item) {
          item.classList.remove(Glide.settings.classes.activeNav);
        }
      },


      /**
       * Adds handles to the each group of controls.
       *
       * @return {Void}
       */
      addBindings: function addBindings() {
        for (var i = 0; i < this._c.length; i++) {
          this.bind(this._c[i].children);
        }
      },


      /**
       * Removes handles from the each group of controls.
       *
       * @return {Void}
       */
      removeBindings: function removeBindings() {
        for (var i = 0; i < this._c.length; i++) {
          this.unbind(this._c[i].children);
        }
      },


      /**
       * Binds events to arrows HTML elements.
       *
       * @param {HTMLCollection} elements
       * @return {Void}
       */
      bind: function bind(elements) {
        for (var i = 0; i < elements.length; i++) {
          Binder.on('click', elements[i], this.click);
          Binder.on('touchstart', elements[i], this.click, capture);
        }
      },


      /**
       * Unbinds events binded to the arrows HTML elements.
       *
       * @param {HTMLCollection} elements
       * @return {Void}
       */
      unbind: function unbind(elements) {
        for (var i = 0; i < elements.length; i++) {
          Binder.off(['click', 'touchstart'], elements[i]);
        }
      },


      /**
       * Handles `click` event on the arrows HTML elements.
       * Moves slider in driection precised in
       * `data-glide-dir` attribute.
       *
       * @param {Object} event
       * @return {Void}
       */
      click: function click(event) {
        event.preventDefault();

        Components.Run.make(Components.Direction.resolve(event.currentTarget.getAttribute('data-glide-dir')));
      }
    };

    define(Controls, 'items', {
      /**
       * Gets collection of the controls HTML elements.
       *
       * @return {HTMLElement[]}
       */
      get: function get() {
        return Controls._c;
      }
    });

    /**
     * Swap active class of current navigation item:
     * - after mounting to set it to initial index
     * - after each move to the new index
     */
    Events.on(['mount.after', 'move.after'], function () {
      Controls.setActive();
    });

    /**
     * Remove bindings and HTML Classes:
     * - on destroying, to bring markup to its initial state
     */
    Events.on('destroy', function () {
      Controls.removeBindings();
      Controls.removeActive();
      Binder.destroy();
    });

    return Controls;
  }

  function Keyboard (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    var Keyboard = {
      /**
       * Binds keyboard events on component mount.
       *
       * @return {Void}
       */
      mount: function mount() {
        if (Glide.settings.keyboard) {
          this.bind();
        }
      },


      /**
       * Adds keyboard press events.
       *
       * @return {Void}
       */
      bind: function bind() {
        Binder.on('keyup', document, this.press);
      },


      /**
       * Removes keyboard press events.
       *
       * @return {Void}
       */
      unbind: function unbind() {
        Binder.off('keyup', document);
      },


      /**
       * Handles keyboard's arrows press and moving glide foward and backward.
       *
       * @param  {Object} event
       * @return {Void}
       */
      press: function press(event) {
        if (event.keyCode === 39) {
          Components.Run.make(Components.Direction.resolve('>'));
        }

        if (event.keyCode === 37) {
          Components.Run.make(Components.Direction.resolve('<'));
        }
      }
    };

    /**
     * Remove bindings from keyboard:
     * - on destroying to remove added events
     * - on updating to remove events before remounting
     */
    Events.on(['destroy', 'update'], function () {
      Keyboard.unbind();
    });

    /**
     * Remount component
     * - on updating to reflect potential changes in settings
     */
    Events.on('update', function () {
      Keyboard.mount();
    });

    /**
     * Destroy binder:
     * - on destroying to remove listeners
     */
    Events.on('destroy', function () {
      Binder.destroy();
    });

    return Keyboard;
  }

  function Autoplay (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    var Autoplay = {
      /**
       * Initializes autoplaying and events.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.start();

        if (Glide.settings.hoverpause) {
          this.bind();
        }
      },


      /**
       * Starts autoplaying in configured interval.
       *
       * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
       * @return {Void}
       */
      start: function start() {
        var _this = this;

        if (Glide.settings.autoplay) {
          if (isUndefined(this._i)) {
            this._i = setInterval(function () {
              _this.stop();

              Components.Run.make('>');

              _this.start();
            }, this.time);
          }
        }
      },


      /**
       * Stops autorunning of the glide.
       *
       * @return {Void}
       */
      stop: function stop() {
        this._i = clearInterval(this._i);
      },


      /**
       * Stops autoplaying while mouse is over glide's area.
       *
       * @return {Void}
       */
      bind: function bind() {
        var _this2 = this;

        Binder.on('mouseover', Components.Html.root, function () {
          _this2.stop();
        });

        Binder.on('mouseout', Components.Html.root, function () {
          _this2.start();
        });
      },


      /**
       * Unbind mouseover events.
       *
       * @returns {Void}
       */
      unbind: function unbind() {
        Binder.off(['mouseover', 'mouseout'], Components.Html.root);
      }
    };

    define(Autoplay, 'time', {
      /**
       * Gets time period value for the autoplay interval. Prioritizes
       * times in `data-glide-autoplay` attrubutes over options.
       *
       * @return {Number}
       */
      get: function get() {
        var autoplay = Components.Html.slides[Glide.index].getAttribute('data-glide-autoplay');

        if (autoplay) {
          return toInt(autoplay);
        }

        return toInt(Glide.settings.autoplay);
      }
    });

    /**
     * Stop autoplaying and unbind events:
     * - on destroying, to clear defined interval
     * - on updating via API to reset interval that may changed
     */
    Events.on(['destroy', 'update'], function () {
      Autoplay.unbind();
    });

    /**
     * Stop autoplaying:
     * - before each run, to restart autoplaying
     * - on pausing via API
     * - on destroying, to clear defined interval
     * - while starting a swipe
     * - on updating via API to reset interval that may changed
     */
    Events.on(['run.before', 'pause', 'destroy', 'swipe.start', 'update'], function () {
      Autoplay.stop();
    });

    /**
     * Start autoplaying:
     * - after each run, to restart autoplaying
     * - on playing via API
     * - while ending a swipe
     */
    Events.on(['run.after', 'play', 'swipe.end'], function () {
      Autoplay.start();
    });

    /**
     * Remount autoplaying:
     * - on updating via API to reset interval that may changed
     */
    Events.on('update', function () {
      Autoplay.mount();
    });

    /**
     * Destroy a binder:
     * - on destroying glide instance to clearup listeners
     */
    Events.on('destroy', function () {
      Binder.destroy();
    });

    return Autoplay;
  }

  /**
   * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
   *
   * @param {Object} points
   * @returns {Object}
   */
  function sortBreakpoints(points) {
    if (isObject(points)) {
      return sortKeys(points);
    } else {
      warn('Breakpoints option must be an object');
    }

    return {};
  }

  function Breakpoints (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    /**
     * Holds reference to settings.
     *
     * @type {Object}
     */
    var settings = Glide.settings;

    /**
     * Holds reference to breakpoints object in settings. Sorts breakpoints
     * from smaller to larger. It is required in order to proper
     * matching currently active breakpoint settings.
     *
     * @type {Object}
     */
    var points = sortBreakpoints(settings.breakpoints);

    /**
     * Cache initial settings before overwritting.
     *
     * @type {Object}
     */
    var defaults = _extends({}, settings);

    var Breakpoints = {
      /**
       * Matches settings for currectly matching media breakpoint.
       *
       * @param {Object} points
       * @returns {Object}
       */
      match: function match(points) {
        if (typeof window.matchMedia !== 'undefined') {
          for (var point in points) {
            if (points.hasOwnProperty(point)) {
              if (window.matchMedia('(max-width: ' + point + 'px)').matches) {
                return points[point];
              }
            }
          }
        }

        return defaults;
      }
    };

    /**
     * Overwrite instance settings with currently matching breakpoint settings.
     * This happens right after component initialization.
     */
    _extends(settings, Breakpoints.match(points));

    /**
     * Update glide with settings of matched brekpoint:
     * - window resize to update slider
     */
    Binder.on('resize', window, throttle(function () {
      Glide.settings = mergeOptions(settings, Breakpoints.match(points));
    }, Glide.settings.throttle));

    /**
     * Resort and update default settings:
     * - on reinit via API, so breakpoint matching will be performed with options
     */
    Events.on('update', function () {
      points = sortBreakpoints(points);

      defaults = _extends({}, settings);
    });

    /**
     * Unbind resize listener:
     * - on destroying, to bring markup to its initial state
     */
    Events.on('destroy', function () {
      Binder.off('resize', window);
    });

    return Breakpoints;
  }

  var COMPONENTS = {
    // Required
    Html: Html,
    Translate: Translate,
    Transition: Transition,
    Direction: Direction,
    Peek: Peek,
    Sizes: Sizes,
    Gaps: Gaps,
    Move: Move,
    Clones: Clones,
    Resize: Resize,
    Build: Build,
    Run: Run,

    // Optional
    Swipe: Swipe,
    Images: Images,
    Anchors: Anchors,
    Controls: Controls,
    Keyboard: Keyboard,
    Autoplay: Autoplay,
    Breakpoints: Breakpoints
  };

  var Glide$1 = function (_Core) {
    inherits(Glide$$1, _Core);

    function Glide$$1() {
      classCallCheck(this, Glide$$1);
      return possibleConstructorReturn(this, (Glide$$1.__proto__ || Object.getPrototypeOf(Glide$$1)).apply(this, arguments));
    }

    createClass(Glide$$1, [{
      key: 'mount',
      value: function mount() {
        var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return get(Glide$$1.prototype.__proto__ || Object.getPrototypeOf(Glide$$1.prototype), 'mount', this).call(this, _extends({}, COMPONENTS, extensions));
      }
    }]);
    return Glide$$1;
  }(Glide);

  return Glide$1;

})));


/***/ }),

/***/ "/aJY":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@w2m/ngx-components/__ivy_ngcc__/fesm2015/w2m-ngx-components-w2m-slider.js ***!
  \*************************************************************************************************/
/*! exports provided: SlideArrowComponent, SliderComponent, SliderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideArrowComponent", function() { return SlideArrowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderModule", function() { return SliderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_glide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-glide */ "nZCN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





/* eslint import/no-extraneous-dependencies : 0  */





function SlideArrowComponent_ng_container_0_em_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "em", 5);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.slideArrow.icon);
} }
function SlideArrowComponent_ng_container_0_em_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "em", 5);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.slideArrow.icon);
} }
function SlideArrowComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SlideArrowComponent_ng_container_0_em_2_Template, 1, 1, "em", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SlideArrowComponent_ng_container_0_em_5_Template, 1, 1, "em", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.right);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.slideArrow.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.right);
} }
function SlideArrowComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "em", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.slideArrow == null ? null : ctx_r2.slideArrow.icon);
} }
function SliderComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "w2m-slide-arrow", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.sliderConfig.customArrows.position)("slideArrow", ctx_r1.sliderConfig.customArrows.left);
} }
function SliderComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "w2m-slide-arrow", 5);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.sliderConfig.customArrows.position)("slideArrow", ctx_r3.sliderConfig.customArrows.right)("right", true);
} }
const _c0 = [[["", 8, "slide"]]];
const _c1 = [".slide"];
class SlideArrowComponent {
}
SlideArrowComponent.ɵfac = function SlideArrowComponent_Factory(t) { return new (t || SlideArrowComponent)(); };
SlideArrowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SlideArrowComponent, selectors: [["w2m-slide-arrow"]], inputs: { slideArrow: "slideArrow", right: "right" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["buttonIcon", ""], ["mat-raised-button", "", "color", "primary", 1, "w2m-slide-arrow__button"], ["class", "far fa-fw", 3, "ngClass", 4, "ngIf"], [1, "w2m-slide-arrow__button--text"], [1, "far", "fa-fw", 3, "ngClass"], ["mat-mini-fab", "", "color", "primary", 1, "w2m-slide-arrow__button"]], template: function SlideArrowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SlideArrowComponent_ng_container_0_Template, 6, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SlideArrowComponent_ng_template_1_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.slideArrow == null ? null : ctx.slideArrow.icon) && (ctx.slideArrow == null ? null : ctx.slideArrow.label))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".w2m-slide-arrow__button[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center}.w2m-slide-arrow__button--text[_ngcontent-%COMP%]{margin:0 .5rem}"] });
SlideArrowComponent.propDecorators = {
    slideArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    right: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideArrowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'w2m-slide-arrow',
                template: "<ng-container *ngIf=\"slideArrow?.icon && slideArrow?.label; else buttonIcon\">\r\n  <button class=\"w2m-slide-arrow__button\"\r\n          mat-raised-button color=\"primary\">\r\n    <em *ngIf=\"!right\" class=\"far fa-fw\"\r\n        [ngClass]=\"slideArrow.icon\"></em>\r\n    <span class=\"w2m-slide-arrow__button--text\">\r\n      {{slideArrow.label}}\r\n    </span>\r\n    <em *ngIf=\"right\" class=\"far fa-fw\"\r\n        [ngClass]=\"slideArrow.icon\"></em>\r\n  </button>\r\n</ng-container>\r\n\r\n\r\n<ng-template #buttonIcon>\r\n  <button class=\"w2m-slide-arrow__button\"\r\n          mat-mini-fab color=\"primary\">\r\n    <em class=\"far fa-fw\" [ngClass]=\"slideArrow?.icon\"></em>\r\n  </button>\r\n</ng-template>\r\n",
                styles: [".w2m-slide-arrow__button{align-items:center;display:flex;justify-content:center}.w2m-slide-arrow__button--text{margin:0 .5rem}"]
            }]
    }], null, { slideArrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], right: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/* eslint import/no-extraneous-dependencies : 0  */
class SliderComponent {
    constructor(slider) {
        this.slider = slider;
        this.DEFAULT_CONFIG = {
            type: 'carousel',
            direction: 'ltr',
            perView: 3,
            showCustomArrows: false,
            showArrows: true,
            showBullets: true,
            arrowLeftLabel: '',
            arrowRightLabel: '',
            startAt: 0,
            isCenter: true,
            focusAt: 0.5,
            gap: 5,
            isAutoplay: true,
            autoplay: 5000,
            hoverPause: true,
            keyboard: true,
            bound: false,
            touchRatio: 0.5,
            isSwipeThreshold: true,
            swipeThreshold: 80,
            isDragThreshold: true,
            dragThreshold: 120,
            isPerTouch: false,
            perTouch: 3,
            touchAngle: 45,
            animationDuration: 600,
            rewind: false,
            rewindDuration: 5000,
            animationTimingFunc: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
        };
    }
    get sliderConfig() {
        return this.sliderConfiguration;
    }
    set sliderConfig(sliderConfig) {
        this.sliderConfiguration = Object.assign(Object.assign({}, this.DEFAULT_CONFIG), sliderConfig);
    }
    ngAfterViewInit() {
        this.setBullets();
    }
    // To do: Update bullets using to Renderer2
    setBullets() {
        const bulletContainer = this.slider.nativeElement
            .querySelector('.glide__bullets');
        if (this.sliderConfig.alignBullets) {
            bulletContainer.classList.add(this.sliderConfig.alignBullets);
        }
        if (this.sliderConfig.positionBullets) {
            bulletContainer.classList.add(this.sliderConfig.positionBullets);
        }
        if (this.sliderConfig.customBulletHTML) {
            const bullets = Array.from(bulletContainer.querySelectorAll('.glide__bullet'));
            bullets.forEach((bullet) => {
                const bulletModified = bullet;
                bulletModified.classList.add('custom-bullet');
                bulletModified.innerHTML = this.sliderConfig.customBulletHTML;
                return bulletModified;
            });
        }
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["w2m-slider"]], inputs: { sliderConfig: "sliderConfig" }, ngContentSelectors: _c1, decls: 7, vars: 27, consts: [[1, "w2m-slider"], [1, "w2m-slider-container", 3, "showArrows", "showBullets", "arrowLeftLabel", "arrowRightLabel", "type", "startAt", "perView", "focusAt", "gap", "autoplay", "hoverpause", "keyboard", "bound", "swipeThreshold", "dragThreshold", "perTouch", "touchRatio", "touchAngle", "animationDuration", "rewind", "rewindDuration", "animationTimingFunc", "direction", "listenToEvents", "breakpoints", "arrowLeftTemplate", "arrowRightTemplate"], ["arrowLeftTemplate", ""], ["arrowRightTemplate", ""], [1, "w2m-slide-arrow", "w2m-slide-arrow--left", 3, "ngClass", "slideArrow"], [1, "w2m-slide-arrow", "w2m-slide-arrow--right", 3, "ngClass", "slideArrow", "right"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-glide", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SliderComponent_ng_template_3_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SliderComponent_ng_template_5_Template, 1, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showArrows", ctx.sliderConfig.showArrows)("showBullets", ctx.sliderConfig.showBullets)("arrowLeftLabel", ctx.sliderConfig.arrowLeftLabel)("arrowRightLabel", ctx.sliderConfig.arrowRightLabel)("type", ctx.sliderConfig.type)("startAt", ctx.sliderConfig.startAt)("perView", ctx.sliderConfig.perView)("focusAt", ctx.sliderConfig.isCenter ? "center" : ctx.sliderConfig.focusAt)("gap", ctx.sliderConfig.gap)("autoplay", ctx.sliderConfig.isAutoplay ? ctx.sliderConfig.autoplay : false)("hoverpause", ctx.sliderConfig.hoverPause)("keyboard", ctx.sliderConfig.keyboard)("bound", ctx.sliderConfig.bound)("swipeThreshold", ctx.sliderConfig.isSwipeThreshold ? ctx.sliderConfig.swipeThreshold : false)("dragThreshold", ctx.sliderConfig.isDragThreshold ? ctx.sliderConfig.dragThreshold : false)("perTouch", ctx.sliderConfig.isPerTouch ? ctx.sliderConfig.perTouch : false)("touchRatio", ctx.sliderConfig.touchRatio)("touchAngle", ctx.sliderConfig.touchAngle)("animationDuration", ctx.sliderConfig.animationDuration)("rewind", ctx.sliderConfig.rewind)("rewindDuration", ctx.sliderConfig.rewindDuration)("animationTimingFunc", ctx.sliderConfig.animationTimingFunc)("direction", ctx.sliderConfig.direction)("listenToEvents", true)("breakpoints", ctx.sliderConfig.breakpoints)("arrowLeftTemplate", ctx.sliderConfig.showCustomArrows && _r0)("arrowRightTemplate", ctx.sliderConfig.showCustomArrows && _r2);
    } }, directives: [ngx_glide__WEBPACK_IMPORTED_MODULE_2__["NgxGlideComponent"], SlideArrowComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".glide{box-sizing:border-box;position:relative;width:100%}.glide *{box-sizing:inherit}.glide__slides,.glide__track{overflow:hidden}.glide__slides{-webkit-backface-visibility:hidden;backface-visibility:hidden;display:flex;flex-wrap:nowrap;list-style:none;padding:0;position:relative;touch-action:pan-Y;transform-style:preserve-3d;white-space:nowrap;width:100%;will-change:transform}.glide__slide,.glide__slides--dragging{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none}.glide__slide{-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;flex-shrink:0;height:100%;white-space:normal;width:100%}.glide__slide a{-moz-user-select:none;-ms-user-select:none;-webkit-user-drag:none;-webkit-user-select:none;user-select:none}.glide__arrows,.glide__bullets{-moz-user-select:none;-ms-user-select:none;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}.glide__arrow{background-color:transparent;border:2px solid hsla(0,0%,100%,.5);border-radius:4px;box-shadow:0 .25em .5em 0 rgba(0,0,0,.1);color:#fff;cursor:pointer;display:block;line-height:1;opacity:1;padding:9px 12px;position:absolute;text-shadow:0 .25em .5em rgba(0,0,0,.1);text-transform:uppercase;top:50%;transform:translateY(-50%);transition:opacity .15s ease,border .3s ease-in-out;z-index:2}.glide__arrow:focus{outline:none}.glide__arrow:hover{border-color:#fff}.glide__arrow--left{left:2em}.glide__arrow--right{right:2em}.glide__arrow--disabled{opacity:.33}.glide__bullets{bottom:2em;display:inline-flex;left:50%;list-style:none;position:absolute;transform:translateX(-50%);z-index:2}.glide__bullet{background-color:hsla(0,0%,100%,.5);border:2px solid transparent;border-radius:50%;box-shadow:0 .25em .5em 0 rgba(0,0,0,.1);cursor:pointer;height:9px;line-height:0;margin:0 .25em;padding:0;transition:all .3s ease-in-out;width:9px}.glide__bullet:focus{outline:none}.glide__bullet:focus,.glide__bullet:hover{background-color:hsla(0,0%,100%,.5);border:2px solid #fff}.glide__bullet--active{background-color:#fff}.glide--swipeable{cursor:grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-webkit-grabbing}.glide__bullets.left{left:10%!important;right:unset}.glide__bullets.right{left:unset!important;right:-5rem!important}.glide__bullets.top{bottom:unset!important;top:3rem!important}.glide__bullets.outer{bottom:-4.5rem!important}.glide__bullet{margin:0 .45rem!important}.glide__bullet .dot{background:hsla(0,0%,100%,.5);border-radius:50%;display:inline-block;height:.625rem;width:.625rem}.glide__bullet .dot--dark{background:rgba(0,0,0,.5)}.glide__bullet.custom-bullet{background-color:transparent;border:unset!important;border-radius:unset!important;box-shadow:none!important;cursor:pointer!important}.glide__bullet--active.custom-bullet{background-color:transparent;color:#fff!important;left:-1rem;margin:0 0 0 1rem!important;position:relative}.glide__bullet--active.custom-bullet .dot{background:#fff;height:.5rem;padding:.3125rem;width:.5rem}.glide__bullet--active.custom-bullet .dot--dark{background:#000}.glide__bullet--active.custom-bullet .dot-outline{align-items:center;border:.125rem solid #fff;border-radius:50%;display:flex;height:1.5rem;justify-content:center;width:1.5rem}.glide__bullet--active.custom-bullet .dot-outline--dark{border:.125rem solid #000}.w2m-slide-arrow{position:absolute!important}.w2m-slide-arrow--left{left:-1%}.w2m-slide-arrow--right{right:-1%}.w2m-slide-arrow.center{top:50%}.w2m-slide-arrow.top{top:-5%}.w2m-slide-arrow.bottom{bottom:-5%}"], encapsulation: 2 });
SliderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
SliderComponent.propDecorators = {
    sliderConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'w2m-slider',
                template: "<div class=\"w2m-slider\">\r\n  <ngx-glide class=\"w2m-slider-container\"\r\n             [showArrows]=\"sliderConfig.showArrows\"\r\n             [showBullets]=\"sliderConfig.showBullets\"\r\n             [arrowLeftLabel]=\"sliderConfig.arrowLeftLabel\"\r\n             [arrowRightLabel]=\"sliderConfig.arrowRightLabel\"\r\n             [type]=\"sliderConfig.type\"\r\n             [startAt]=\"sliderConfig.startAt\"\r\n             [perView]=\"sliderConfig.perView\"\r\n             [focusAt]=\"sliderConfig.isCenter ? 'center' : sliderConfig.focusAt\"\r\n             [gap]=\"sliderConfig.gap\"\r\n             [autoplay]=\"sliderConfig.isAutoplay? sliderConfig.autoplay:false\"\r\n             [hoverpause]=\"sliderConfig.hoverPause\"\r\n             [keyboard]=\"sliderConfig.keyboard\"\r\n             [bound]=\"sliderConfig.bound\"\r\n             [swipeThreshold]=\"sliderConfig.isSwipeThreshold ? sliderConfig.swipeThreshold : false\"\r\n             [dragThreshold]=\" sliderConfig.isDragThreshold ? sliderConfig.dragThreshold : false\"\r\n             [perTouch]=\"sliderConfig.isPerTouch ? sliderConfig.perTouch : false\"\r\n             [touchRatio]=\"sliderConfig.touchRatio\"\r\n             [touchAngle]=\"sliderConfig.touchAngle\"\r\n             [animationDuration]=\"sliderConfig.animationDuration\"\r\n             [rewind]=\"sliderConfig.rewind\"\r\n             [rewindDuration]=\"sliderConfig.rewindDuration\"\r\n             [animationTimingFunc]=\"sliderConfig.animationTimingFunc\"\r\n             [direction]=\"sliderConfig.direction\"\r\n             [listenToEvents]=\"true\"\r\n             [breakpoints]=\"sliderConfig.breakpoints\"\r\n             [arrowLeftTemplate]=\"sliderConfig.showCustomArrows && arrowLeftTemplate\"\r\n             [arrowRightTemplate]=\"sliderConfig.showCustomArrows && arrowRightTemplate\">\r\n    <ng-content select='.slide'></ng-content>\r\n  </ngx-glide>\r\n</div>\r\n\r\n<ng-template #arrowLeftTemplate>\r\n    <w2m-slide-arrow class=\"w2m-slide-arrow w2m-slide-arrow--left\"\r\n                     [ngClass]=\"sliderConfig.customArrows.position\"\r\n                     [slideArrow]=\"sliderConfig.customArrows.left\">\r\n    </w2m-slide-arrow>\r\n</ng-template>\r\n<ng-template #arrowRightTemplate>\r\n    <w2m-slide-arrow class=\"w2m-slide-arrow w2m-slide-arrow--right\"\r\n                     [ngClass]=\"sliderConfig.customArrows.position\"\r\n                     [slideArrow]=\"sliderConfig.customArrows.right\" [right]=\"true\">\r\n    </w2m-slide-arrow>\r\n</ng-template>\r\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [".glide{box-sizing:border-box;position:relative;width:100%}.glide *{box-sizing:inherit}.glide__slides,.glide__track{overflow:hidden}.glide__slides{-webkit-backface-visibility:hidden;backface-visibility:hidden;display:flex;flex-wrap:nowrap;list-style:none;padding:0;position:relative;touch-action:pan-Y;transform-style:preserve-3d;white-space:nowrap;width:100%;will-change:transform}.glide__slide,.glide__slides--dragging{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none}.glide__slide{-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;flex-shrink:0;height:100%;white-space:normal;width:100%}.glide__slide a{-moz-user-select:none;-ms-user-select:none;-webkit-user-drag:none;-webkit-user-select:none;user-select:none}.glide__arrows,.glide__bullets{-moz-user-select:none;-ms-user-select:none;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}.glide__arrow{background-color:transparent;border:2px solid hsla(0,0%,100%,.5);border-radius:4px;box-shadow:0 .25em .5em 0 rgba(0,0,0,.1);color:#fff;cursor:pointer;display:block;line-height:1;opacity:1;padding:9px 12px;position:absolute;text-shadow:0 .25em .5em rgba(0,0,0,.1);text-transform:uppercase;top:50%;transform:translateY(-50%);transition:opacity .15s ease,border .3s ease-in-out;z-index:2}.glide__arrow:focus{outline:none}.glide__arrow:hover{border-color:#fff}.glide__arrow--left{left:2em}.glide__arrow--right{right:2em}.glide__arrow--disabled{opacity:.33}.glide__bullets{bottom:2em;display:inline-flex;left:50%;list-style:none;position:absolute;transform:translateX(-50%);z-index:2}.glide__bullet{background-color:hsla(0,0%,100%,.5);border:2px solid transparent;border-radius:50%;box-shadow:0 .25em .5em 0 rgba(0,0,0,.1);cursor:pointer;height:9px;line-height:0;margin:0 .25em;padding:0;transition:all .3s ease-in-out;width:9px}.glide__bullet:focus{outline:none}.glide__bullet:focus,.glide__bullet:hover{background-color:hsla(0,0%,100%,.5);border:2px solid #fff}.glide__bullet--active{background-color:#fff}.glide--swipeable{cursor:grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-webkit-grabbing}.glide__bullets.left{left:10%!important;right:unset}.glide__bullets.right{left:unset!important;right:-5rem!important}.glide__bullets.top{bottom:unset!important;top:3rem!important}.glide__bullets.outer{bottom:-4.5rem!important}.glide__bullet{margin:0 .45rem!important}.glide__bullet .dot{background:hsla(0,0%,100%,.5);border-radius:50%;display:inline-block;height:.625rem;width:.625rem}.glide__bullet .dot--dark{background:rgba(0,0,0,.5)}.glide__bullet.custom-bullet{background-color:transparent;border:unset!important;border-radius:unset!important;box-shadow:none!important;cursor:pointer!important}.glide__bullet--active.custom-bullet{background-color:transparent;color:#fff!important;left:-1rem;margin:0 0 0 1rem!important;position:relative}.glide__bullet--active.custom-bullet .dot{background:#fff;height:.5rem;padding:.3125rem;width:.5rem}.glide__bullet--active.custom-bullet .dot--dark{background:#000}.glide__bullet--active.custom-bullet .dot-outline{align-items:center;border:.125rem solid #fff;border-radius:50%;display:flex;height:1.5rem;justify-content:center;width:1.5rem}.glide__bullet--active.custom-bullet .dot-outline--dark{border:.125rem solid #000}.w2m-slide-arrow{position:absolute!important}.w2m-slide-arrow--left{left:-1%}.w2m-slide-arrow--right{right:-1%}.w2m-slide-arrow.center{top:50%}.w2m-slide-arrow.top{top:-5%}.w2m-slide-arrow.bottom{bottom:-5%}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { sliderConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/* eslint import/no-extraneous-dependencies : 0  */
class SliderModule {
}
SliderModule.ɵfac = function SliderModule_Factory(t) { return new (t || SliderModule)(); };
SliderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SliderModule });
SliderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_glide__WEBPACK_IMPORTED_MODULE_2__["NgxGlideModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SliderModule, { declarations: function () { return [SlideArrowComponent, SliderComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ngx_glide__WEBPACK_IMPORTED_MODULE_2__["NgxGlideModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]]; }, exports: function () { return [SliderComponent, SlideArrowComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    SlideArrowComponent,
                    SliderComponent,
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_glide__WEBPACK_IMPORTED_MODULE_2__["NgxGlideModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                ],
                exports: [
                    SliderComponent,
                    SlideArrowComponent,
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of components
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=w2m-ngx-components-w2m-slider.js.map

/***/ }),

/***/ "nZCN":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-glide/__ivy_ngcc__/fesm2015/ngx-glide.js ***!
  \*******************************************************************/
/*! exports provided: NgxGlideComponent, NgxGlideModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxGlideComponent", function() { return NgxGlideComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxGlideModule", function() { return NgxGlideModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide */ "+dTB");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide__WEBPACK_IMPORTED_MODULE_2__);







const _c0 = ["glideEl"];
const _c1 = ["glideSlidesEl"];
function NgxGlideComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function NgxGlideComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function NgxGlideComponent_ng_container_16_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 14);
} if (rf & 2) {
    const glideBullet_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-glide-dir", "=" + glideBullet_r6);
} }
function NgxGlideComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxGlideComponent_ng_container_16_button_1_Template, 1, 1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.glideBullets);
} }
const _c2 = ["*"];
const defaultSettings = {
    type: 'slider',
    startAt: 0,
    perView: 1,
    focusAt: 0,
    gap: 10,
    autoplay: false,
    hoverpause: true,
    keyboard: true,
    bound: false,
    swipeThreshold: 80,
    dragThreshold: 120,
    perTouch: false,
    touchRatio: 0.5,
    touchAngle: 45,
    animationDuration: 400,
    rewind: true,
    rewindDuration: 800,
    animationTimingFunc: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
    direction: 'ltr',
    peek: 0,
    breakpoints: {},
    classes: {
        direction: {
            ltr: 'glide--ltr',
            rtl: 'glide--rtl',
        },
        slider: 'glide--slider',
        carousel: 'glide--carousel',
        swipeable: 'glide--swipeable',
        dragging: 'glide--dragging',
        cloneSlide: 'glide__slide--clone',
        activeNav: 'glide__bullet--active',
        activeSlide: 'glide__slide--active',
        disabledArrow: 'glide__arrow--disabled',
    },
    throttle: 25,
};

const defaultExtraSettings = {
    showArrows: true,
    showBullets: true,
    arrowLeftLabel: 'left',
    arrowRightLabel: 'right',
    listenToEvents: false,
};

// noinspection TypeScriptFieldCanBeMadeReadonly,DuplicatedCode
class NgxGlideComponent {
    constructor(changeDetectorRef, platformId) {
        this.changeDetectorRef = changeDetectorRef;
        this.platformId = platformId;
        this.showArrows = defaultExtraSettings.showArrows;
        this.showBullets = defaultExtraSettings.showBullets;
        this.arrowLeftLabel = defaultExtraSettings.arrowLeftLabel;
        this.arrowRightLabel = defaultExtraSettings.arrowRightLabel;
        this.listenToEvents = defaultExtraSettings.listenToEvents;
        this.type = defaultSettings.type;
        this.startAt = defaultSettings.startAt;
        this.perView = defaultSettings.perView;
        this.focusAt = defaultSettings.focusAt;
        this.gap = defaultSettings.gap;
        this.autoplay = defaultSettings.autoplay;
        this.hoverpause = defaultSettings.hoverpause;
        this.keyboard = defaultSettings.keyboard;
        this.bound = defaultSettings.bound;
        this.swipeThreshold = defaultSettings.swipeThreshold;
        this.dragThreshold = defaultSettings.dragThreshold;
        this.perTouch = defaultSettings.perTouch;
        this.touchRatio = defaultSettings.touchRatio;
        this.touchAngle = defaultSettings.touchAngle;
        this.animationDuration = defaultSettings.animationDuration;
        this.rewind = defaultSettings.rewind;
        this.rewindDuration = defaultSettings.rewindDuration;
        this.animationTimingFunc = defaultSettings.animationTimingFunc;
        this.direction = defaultSettings.direction;
        this.peek = defaultSettings.peek;
        this.breakpoints = defaultSettings.breakpoints;
        this.classes = defaultSettings.classes;
        this.throttle = defaultSettings.throttle;
        this.mountedBefore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mountedAfter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.played = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.paused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.buildedBefore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.buildedAfter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ranBefore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ran = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ranAfter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ranOffset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.runStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.runEnded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.moved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.movedAfter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resized = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.swipeStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.swipeMoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.swipeEnded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.translateJumped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    static getGlideUpdateSettings(changes) {
        const settings = {};
        for (const key in changes) {
            if (!changes.hasOwnProperty(key)) {
                continue;
            }
            if (!defaultSettings.hasOwnProperty(key)) {
                continue;
            }
            const change = changes[key];
            if (change.previousValue !== change.currentValue) {
                settings[key] = change.currentValue;
            }
        }
        return settings;
    }
    ngOnChanges(changes) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId) && changes && this.glide) {
            this.update(NgxGlideComponent.getGlideUpdateSettings(changes));
        }
    }
    ngAfterViewInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.initGlideBullets();
            this.glide = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2___default.a(this.glideEl.nativeElement, this.getGlideInitSettings());
            this.initGlideEvents();
            this.mount();
            this.changeDetectorRef.detectChanges();
        }
    }
    ngOnDestroy() {
        this.destroy();
    }
    getStyleDisplay(condition) {
        return condition ? 'block' : 'none';
    }
    getIndex() {
        if (this.glide) {
            return this.glide.index;
        }
    }
    // noinspection JSUnusedGlobalSymbols
    getSettings() {
        if (this.glide) {
            return this.glide.settings;
        }
    }
    // noinspection JSUnusedGlobalSymbols
    getType() {
        if (this.glide) {
            return this.glide.type;
        }
    }
    // noinspection JSUnusedGlobalSymbols
    isDisabled() {
        if (this.glide) {
            return this.glide.disabled;
        }
    }
    mount() {
        if (this.glide) {
            this.glide.mount();
        }
    }
    update(settings) {
        if (this.glide) {
            this.glide.update(settings);
            this.changeDetectorRef.detectChanges();
        }
    }
    destroy() {
        if (this.glide) {
            this.glide.destroy();
        }
    }
    // noinspection JSUnusedGlobalSymbols
    go(pattern) {
        if (this.glide) {
            this.glide.go(pattern);
        }
    }
    pause() {
        if (this.glide) {
            this.glide.pause();
        }
    }
    play(force) {
        if (this.glide) {
            if (typeof force === 'number') {
                this.glide.play(force);
            }
            else {
                this.glide.play();
            }
        }
    }
    disable() {
        if (this.glide) {
            this.glide.disable();
        }
    }
    enable() {
        if (this.glide) {
            this.glide.enable();
        }
    }
    isType(type) {
        if (this.glide) {
            return this.glide.isType(type);
        }
    }
    initGlideBullets() {
        const glideSlidesNativeElement = this.glideSlidesEl.nativeElement;
        const childrenLength = glideSlidesNativeElement.children.length;
        this.glideBullets = [...new Array(childrenLength).keys()];
        this.changeDetectorRef.detectChanges();
    }
    initGlideEvents() {
        if (!this.glide || !this.listenToEvents) {
            return;
        }
        this.glide.on('mount.before', () => this.mountedBefore.emit());
        this.glide.on('mount.after', () => this.mountedAfter.emit());
        this.glide.on('update', () => this.updated.emit());
        this.glide.on('play', () => this.played.emit());
        this.glide.on('pause', () => this.paused.emit());
        this.glide.on('build.before', () => this.buildedBefore.emit());
        this.glide.on('build.after', () => this.buildedAfter.emit());
        this.glide.on('run.before', (move) => this.ranBefore.emit(move));
        this.glide.on('run', (move) => this.ran.emit(move));
        this.glide.on('run.after', (move) => this.ranAfter.emit(move));
        this.glide.on('run.offset', (move) => this.ranOffset.emit(move));
        this.glide.on('run.start', (move) => this.runStarted.emit(move));
        this.glide.on('run.end', (move) => this.runEnded.emit(move));
        this.glide.on('move', (movement) => this.moved.emit(movement));
        this.glide.on('move.after', (movement) => this.movedAfter.emit(movement));
        this.glide.on('resize', () => this.resized.emit());
        this.glide.on('swipe.start', () => this.swipeStarted.emit());
        this.glide.on('swipe.move', () => this.swipeMoved.emit());
        this.glide.on('swipe.end', () => this.swipeEnded.emit());
        this.glide.on('translate.jump', (movement) => this.translateJumped.emit(movement));
    }
    getGlideInitSettings() {
        return {
            type: this.type,
            startAt: this.startAt,
            perView: this.perView,
            focusAt: this.focusAt,
            gap: this.gap,
            autoplay: this.autoplay,
            hoverpause: this.hoverpause,
            keyboard: this.keyboard,
            bound: this.bound,
            swipeThreshold: this.swipeThreshold,
            dragThreshold: this.dragThreshold,
            perTouch: this.perTouch,
            touchRatio: this.touchRatio,
            touchAngle: this.touchAngle,
            animationDuration: this.animationDuration,
            rewind: this.rewind,
            rewindDuration: this.rewindDuration,
            animationTimingFunc: this.animationTimingFunc,
            direction: this.direction,
            peek: this.peek,
            breakpoints: this.breakpoints,
            classes: this.classes,
            throttle: this.throttle,
        };
    }
}
NgxGlideComponent.ɵfac = function NgxGlideComponent_Factory(t) { return new (t || NgxGlideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
NgxGlideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxGlideComponent, selectors: [["ngx-glide"]], viewQuery: function NgxGlideComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.glideEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.glideSlidesEl = _t.first);
    } }, inputs: { showArrows: "showArrows", showBullets: "showBullets", arrowLeftLabel: "arrowLeftLabel", arrowRightLabel: "arrowRightLabel", listenToEvents: "listenToEvents", type: "type", startAt: "startAt", perView: "perView", focusAt: "focusAt", gap: "gap", autoplay: "autoplay", hoverpause: "hoverpause", keyboard: "keyboard", bound: "bound", swipeThreshold: "swipeThreshold", dragThreshold: "dragThreshold", perTouch: "perTouch", touchRatio: "touchRatio", touchAngle: "touchAngle", animationDuration: "animationDuration", rewind: "rewind", rewindDuration: "rewindDuration", animationTimingFunc: "animationTimingFunc", direction: "direction", peek: "peek", breakpoints: "breakpoints", classes: "classes", throttle: "throttle", arrowLeftTemplate: "arrowLeftTemplate", arrowRightTemplate: "arrowRightTemplate" }, outputs: { mountedBefore: "mountedBefore", mountedAfter: "mountedAfter", updated: "updated", played: "played", paused: "paused", buildedBefore: "buildedBefore", buildedAfter: "buildedAfter", ranBefore: "ranBefore", ran: "ran", ranAfter: "ranAfter", ranOffset: "ranOffset", runStarted: "runStarted", runEnded: "runEnded", moved: "moved", movedAfter: "movedAfter", resized: "resized", swipeStarted: "swipeStarted", swipeMoved: "swipeMoved", swipeEnded: "swipeEnded", translateJumped: "translateJumped" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c2, decls: 17, vars: 17, consts: [[1, "glide"], ["glideEl", ""], ["data-glide-el", "track", 1, "glide__track"], [1, "glide__slides"], ["glideSlidesEl", ""], ["data-glide-el", "controls", 1, "glide__arrows"], ["data-glide-dir", "<", 1, "glide__arrow", "glide__arrow--left"], ["data-glide-dir", ">", 1, "glide__arrow", "glide__arrow--right"], ["data-glide-dir", "<"], [4, "ngTemplateOutlet"], ["data-glide-dir", ">"], ["data-glide-el", "controls[nav]", 1, "glide__bullets"], [4, "ngIf"], ["class", "glide__bullet", 4, "ngFor", "ngForOf"], [1, "glide__bullet"]], template: function NgxGlideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NgxGlideComponent_ng_container_12_Template, 1, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NgxGlideComponent_ng_container_14_Template, 1, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NgxGlideComponent_ng_container_16_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.showArrows ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.getStyleDisplay(!ctx.arrowLeftTemplate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.arrowLeftLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.getStyleDisplay(!ctx.arrowRightTemplate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.arrowRightLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.getStyleDisplay(!!ctx.arrowLeftTemplate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.arrowLeftTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.getStyleDisplay(!!ctx.arrowRightTemplate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.arrowRightTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.showBullets ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.glideBullets);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], encapsulation: 2, changeDetection: 0 });
NgxGlideComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
];
NgxGlideComponent.propDecorators = {
    showArrows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showBullets: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    arrowLeftLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    arrowLeftTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    arrowRightLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    arrowRightTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    listenToEvents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    startAt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    perView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    focusAt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    gap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    autoplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hoverpause: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    keyboard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    bound: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    swipeThreshold: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dragThreshold: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    perTouch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    touchRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    touchAngle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animationDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rewind: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rewindDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animationTimingFunc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    peek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    breakpoints: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    throttle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    mountedBefore: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mountedAfter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    updated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    played: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    paused: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    buildedBefore: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    buildedAfter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    ranBefore: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    ran: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    ranAfter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    ranOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    runStarted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    runEnded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    moved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    movedAfter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    resized: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    swipeStarted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    swipeMoved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    swipeEnded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    translateJumped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    glideEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['glideEl', { static: false },] }],
    glideSlidesEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['glideSlidesEl', { static: false },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxGlideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-glide',
                template: "<div class=\"glide\" #glideEl>\n  <div class=\"glide__track\" data-glide-el=\"track\">\n    <div class=\"glide__slides\" #glideSlidesEl>\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div class=\"glide__arrows\" data-glide-el=\"controls\" [style.display]=\"showArrows ? 'block' : 'none'\">\n    <button class=\"glide__arrow glide__arrow--left\" data-glide-dir=\"<\" [style.display]=\"getStyleDisplay(!arrowLeftTemplate)\">{{ arrowLeftLabel }}</button>\n    <button class=\"glide__arrow glide__arrow--right\" data-glide-dir=\">\" [style.display]=\"getStyleDisplay(!arrowRightTemplate)\">{{ arrowRightLabel }}</button>\n    <div data-glide-dir=\"<\" [style.display]=\"getStyleDisplay(!!arrowLeftTemplate)\">\n      <ng-container *ngTemplateOutlet=\"arrowLeftTemplate\"></ng-container>\n    </div>\n    <div data-glide-dir=\">\" [style.display]=\"getStyleDisplay(!!arrowRightTemplate)\">\n      <ng-container *ngTemplateOutlet=\"arrowRightTemplate\"></ng-container>\n    </div>\n  </div>\n  <div class=\"glide__bullets\" data-glide-el=\"controls[nav]\" [style.display]=\"showBullets ? 'block' : 'none'\">\n    <ng-container *ngIf=\"glideBullets\">\n      <button class=\"glide__bullet\" *ngFor=\"let glideBullet of glideBullets\" [attr.data-glide-dir]=\"'=' + glideBullet\"></button>\n    </ng-container>\n  </div>\n</div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, { showArrows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showBullets: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], arrowLeftLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], arrowRightLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listenToEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], startAt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], perView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], focusAt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hoverpause: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], keyboard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bound: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], swipeThreshold: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dragThreshold: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], perTouch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], touchRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], touchAngle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], animationDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rewind: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rewindDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], animationTimingFunc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], peek: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], breakpoints: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], throttle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mountedBefore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mountedAfter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], updated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], played: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], paused: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], buildedBefore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], buildedAfter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ranBefore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ran: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ranAfter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ranOffset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], runStarted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], runEnded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], moved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], movedAfter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], resized: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], swipeStarted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], swipeMoved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], swipeEnded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], translateJumped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], arrowLeftTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], arrowRightTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], glideEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['glideEl', { static: false }]
        }], glideSlidesEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['glideSlidesEl', { static: false }]
        }] }); })();

class NgxGlideModule {
}
NgxGlideModule.ɵfac = function NgxGlideModule_Factory(t) { return new (t || NgxGlideModule)(); };
NgxGlideModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxGlideModule });
NgxGlideModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxGlideModule, { declarations: function () { return [NgxGlideComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [NgxGlideComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxGlideModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [NgxGlideComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [NgxGlideComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-glide
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-glide.js.map

/***/ })

};;
//# sourceMappingURL=vendors~section-hero-section-hero-module.js.map