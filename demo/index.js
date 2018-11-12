(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
typeof define === 'function' && define.amd ? define(factory) :
(factory());
}(this, (function () {
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/**
 * Check if a value is a function.
 *
 * @param {*} obj The value to check.
 * @return {Boolean}
 */
function isFunction(obj) {
  return typeof obj === 'function';
}
/**
 * Check if a value is a string.
 *
 * @param {*} obj The value to check.
 * @return {Boolean}
 */

function isString(obj) {
  return typeof obj === 'string';
}
/**
 * Check if a value is a number.
 *
 * @param {*} obj The value to check.
 * @return {Boolean}
 */

function isNumber(obj) {
  return typeof obj === 'number' && !isNaN(obj);
}
/**
 * Check if a value is a date.
 *
 * @param {*} obj The value to check.
 * @return {Boolean}
 */

function isDate(obj) {
  return obj instanceof Date;
}
/**
 * Check if a value is an object.
 *
 * @param {*} obj The value to check.
 * @return {Boolean}
 */

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
/**
 * Check if a value is undefined.
 *
 * @param {*} obj The value to check.
 * @return {Boolean}
 */

function isUndefined(obj) {
  return typeof obj === 'undefined';
}
/**
 * Check if a value is an array.
 *
 * @param {*} obj The value to check.
 * @return {Boolean}
 */

function isArray(obj) {
  return Array.isArray(obj);
}
/**
 * Check if falsy value.
 *
 * @param {*} obj The value to check.
 * @return {Boolean}
 */

function isFalsy(obj) {
  return isUndefined(obj) || obj === null || obj === false || typeof obj === 'number' && isNaN(obj);
}

/**
 * @module Proto
 */
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var create = Object.create;
/**
 * Iterate all prototype chain of a class.
 * @memberof Proto
 *
 * @param {Function} Ctr The class to iterate.
 * @param {Function} [callback] A callback function for each prototype.
 * @return {Array<string>}
 */

function walk(Ctr, callback) {
  var proto = Ctr.prototype;

  while (proto) {
    callback(proto);
    proto = Object.getPrototypeOf(proto.constructor).prototype;
  }
}
/**
 * Get all definitions for a given property in the prototype chain.
 * @memberof Proto
 *
 * @param {Function} Ctr The class to analyze.
 * @param {string} property The property name to collect.
 * @return {Array<Object>}
 */

function reduce(Ctr, property) {
  var res = [];
  walk(Ctr, function (proto) {
    var descriptor = getOwnPropertyDescriptor(proto, property);

    if (descriptor) {
      res.push(descriptor);
    }
  });
  return res;
}
/**
 * Check if a method or a property is in the prototype chain.
 * @memberof Proto
 *
 * @param {Function} Ctr The class to analyze.
 * @param {string} property The property name to verify.
 * @return {Boolean}
 */

function has(Ctr, property) {
  return !!reduce(Ctr, property).length;
}
/**
 * Retrieve prototype of an object.
 * @memberof Proto
 *
 * @param {Object} Ctr The object to analyze.
 * @return {Object} The prototype.
 */

function get(Ctr) {
  if (Object.getPrototypeOf) {
    return Object.getPrototypeOf(Ctr);
  }

  if (isObject(Ctr.__proto__)) {
    return Ctr.__proto__;
  }

  return Ctr.constructor.prototype;
}
/**
 * Set prototype to an object.
 * @memberof Proto
 *
 * @param {Object} Ctr The object to update.
 * @param {Object|Function} proto The prototype or the class to use.
 */

function set$1(obj, proto) {
  if (!isFunction(obj) && isFunction(proto)) {
    proto = proto.prototype;
  }

  Object.setPrototypeOf ? Object.setPrototypeOf(obj, proto) : obj.__proto__ = proto;
}
/**
 * Extend a prototype.
 * @memberof Proto
 *
 * @param {Object} proto1 The prototype to extend.
 * @param {Object} proto2 The prototype to use.
 * @return {Object} The new prototype.
 */

function extend(proto1, proto2) {
  if (isFunction(proto1)) {
    proto1 = proto1.prototype;
  }

  if (isFunction(proto2)) {
    proto2 = proto2.prototype;
  }

  return create(proto1, proto2);
}
/**
 * Create a new instance of an object without constructor.
 * @memberof Proto
 *
 * @param {Function|Object} Ctr The class or the prototype to reconstruct.
 * @return {Object} The new instance.
 */

function reconstruct(Ctr) {
  if (isFunction(Ctr)) {
    return create(Ctr.prototype);
  } else if (Ctr === Array.prototype) {
    return [];
  }

  return create(Ctr);
}

/**
 * Useless callback function.
 * @private
 *
 * @param {*} scope The current object.
 * @param {string} key The current key.
 * @param {*} prop The current value.
 */

function noop(scope, key, prop) {
  return prop;
}
/**
 * Clone an object.
 *
 * @method clone
 * @param {*} obj The instance to clone.
 * @param {Function} [callback] A modifier function for each property.
 * @param {Array} [cache] The cache array for circular references.
 * @return {*} The clone of the object.
 */


function clone(obj) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
  var cache = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (isArray(obj)) {
    return obj.map(function (entry, index) {
      entry = callback(obj, index, entry);
      return clone(entry, callback, cache);
    });
  } else if (isObject(obj)) {
    var cached = cache.indexOf(obj);

    if (cached !== -1) {
      return cache[cached + 1];
    }

    var res = reconstruct(get(obj));
    cache.push(obj, res);
    Object.keys(obj).forEach(function (k) {
      var val = callback(obj, k, obj[k]);
      res[k] = clone(val, callback, cache);
    });
    return res;
  } else if (isDate(obj)) {
    return new Date(obj.getTime());
  } else if (isFunction(obj)) {
    return obj;
  }

  return obj;
}

var defaults = {
  mergeObjects: true,
  joinArrays: false,
  strictMerge: false
};
/**
 * Merge two objects into a new one.
 *
 * @method merge
 * @param {...Object|Array} objects The objects to merge.
 * @return {Object} The merged object.
 */

function merge() {
  var _this = this;

  var options = this.options || defaults;

  for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
    objects[_key] = arguments[_key];
  }

  var first = objects.shift();
  var res = clone(first);
  objects.forEach(function (obj2) {
    if (isObject(res) && isObject(obj2)) {
      Object.keys(obj2).forEach(function (key) {
        if (!options.strictMerge || first.hasOwnProperty(key)) {
          var entry = obj2[key];

          if (isObject(entry) && isObject(res[key]) && options.mergeObjects) {
            res[key] = merge.call(_this, res[key], entry);
          } else if (isArray(entry) && isArray(res[key]) && options.joinArrays) {
            res[key] = merge.call(_this, res[key], entry);
          } else {
            res[key] = clone(obj2[key]);
          }
        }
      });
    } else if (isArray(first) && isArray(obj2)) {
      obj2.forEach(function (val) {
        if (first.indexOf(val) === -1) {
          res.push(clone(val));
        }
      });
    } else {
      throw 'incompatible types';
    }
  });
  return res;
}
/**
 * Create a new Merge function with passed options.
 *
 * @method config
 * @memberof merge
 * @param {Object} options Merge options.
 * @param {Boolean} options.mergeObjects Should merge objects keys.
 * @param {Boolean} options.joinArrays Should join arrays instead of update keys.
 * @param {Boolean} options.strictMerge Should merge only keys which already are in the first object.
 * @return {Function} The new merge function.
 */

merge.config = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return merge.call.apply(merge, [{
      options: merge(defaults, options)
    }].concat(args));
  };
};

var support = typeof Symbol === 'function';
/**
 * Polyfill registry for symbols.
 * @private
 * @type {Array}
 */

var registry = [];
/**
 * Polyfill for Symbol.
 * @class SymbolPolyfill
 * @private
 *
 * @param {string} property The Symbol name.
 */

var SymbolPolyfill =
/*#__PURE__*/
function () {
  function SymbolPolyfill(property) {
    _classCallCheck(this, SymbolPolyfill);

    var sym = this.SYM = "__".concat(property, "_").concat(registry.length);
    registry.push(sym);
    Object.defineProperty(Object.prototype, sym, {
      configurable: true,
      enumerable: false,
      set: function set(x) {
        Object.defineProperty(this, sym, {
          configurable: true,
          enumerable: false,
          writable: true,
          value: x
        });
      }
    });
  }

  _createClass(SymbolPolyfill, [{
    key: "toString",
    value: function toString() {
      return this.SYM;
    }
  }]);

  return SymbolPolyfill;
}();
/**
 * Create a symbolic key for objects's properties.
 *
 * @param {string} property The Symbol name.
 * @return {Symbol|Symbolic}
 */


function Symbolic(property) {
  if (support) {
    // native Symbol support.
    var sym = Symbol(property);
    registry.push(sym);
    return sym;
  }

  return new SymbolPolyfill(property);
}
/**
 * Check if an instance is a Symbol.
 * @param {Symbol|Symbolic} sym The symbol to check.
 * @return {Boolean}
 */

Symbolic.isSymbolic = function (sym) {
  if (sym instanceof SymbolPolyfill) {
    return true;
  }

  return sym && support && registry.indexOf(sym) !== -1;
};

var MIXINS_SYM = Symbolic('mixins');
/**
 * Mix a class with a mixin.
 * Inspired by Justin Fagnani (https://github.com/justinfagnani).
 *
 * @method mix
 * @param {Function} SuperClass The class to extend.
 * @return {MixinScope} A MixinScope instance.
 * @module mix
 */

function mix(SuperClass) {
  return new MixinScope(SuperClass);
}
/**
 * A Mixin helper class.
 * @class MixinScope
 * @memberof mix
 */

var MixinScope =
/*#__PURE__*/
function () {
  /**
   * Create a mixable class.
   * @private
   * @param {Function} superClass The class to extend.
   */
  function MixinScope(superClass) {
    _classCallCheck(this, MixinScope);

    this.superClass = superClass ||
    /*#__PURE__*/
    function () {
      function _class() {
        _classCallCheck(this, _class);
      }

      return _class;
    }();
  }
  /**
   * Mix the super class with a list of mixins.
   * @memberof mix.MixinScope
   *
   * @param {...Function} mixins *N* mixin functions.
   * @return {Function} The extended class.
   */


  _createClass(MixinScope, [{
    key: "with",
    value: function _with() {
      var _this = this,
          _Class$MIXINS_SYM;

      var Class = this.superClass;

      for (var _len = arguments.length, mixins = new Array(_len), _key = 0; _key < _len; _key++) {
        mixins[_key] = arguments[_key];
      }

      mixins.forEach(function (mixin) {
        if (!_this.has(mixin)) {
          Class = mixin(Class);
        }
      });
      Class[MIXINS_SYM] = Class.hasOwnProperty(MIXINS_SYM) ? Class[MIXINS_SYM] : [];

      (_Class$MIXINS_SYM = Class[MIXINS_SYM]).push.apply(_Class$MIXINS_SYM, mixins);

      return Class;
    }
    /**
     * Check if the SuperClass has been already mixed with a mixin function.
     * @memberof mix.MixinScope
     *
     * @param {Function} mixin The mixin function.
     * @return {Boolean}
     */

  }, {
    key: "has",
    value: function has(mixin) {
      var Class = this.superClass;

      while (Class && Class !== Object) {
        var attached = Class[MIXINS_SYM] || [];

        if (attached.indexOf(mixin) !== -1) {
          return true;
        }

        Class = Object.getPrototypeOf(Class);
      }

      return false;
    }
  }]);

  return MixinScope;
}();

/**
 * Assert scope object is a valid object.
 * @private
 *
 * @param {*} obj The object to check
 * @return {boolean} The object is valid or not
 */

function assertObject(obj) {
  return !isFalsy(obj) && _typeof(obj) === 'object';
}
/**
 * Assert scope object and path are valid
 * @private
 *
 * @param {*} obj The object to check
 * @param {*} path The property path
 * @return {void}
 * @throws {Error} throw error when object scope is invalid undefined
 * @throws {Error} throw error when paths is invalid or undefined
 */


function assertArgs(obj, path) {
  if (!assertObject(obj)) {
    throw new Error('invalid scope');
  }

  if (isFalsy(path) || isArray(path) && path.length === 0) {
    throw new Error('invalid path');
  }
}
/**
 * Normalize path argument in an array of paths
 * @private
 *
 * @param {Array|string|number} path The argument to normalize
 * @return {Array} An array of paths
 */


function pathToArray(path) {
  if (isString(path)) {
    return path.split('.');
  }

  if (isNumber(path)) {
    return ["".concat(path)];
  }

  if (isArray(path)) {
    return path.slice(0);
  }

  return path;
}
/**
 * Get a deep property of an object using paths
 * @function get
 * @memberof keypath
 * 
 * @param {Object} obj The object scope
 * @param {String|Array} path The path of the property to retrieve
 * @return {*} The property value
 * @throws {Error} throw error when object scope is undefined
 * @throws {Error} throw error when paths is invalid or undefined
 */


function get$1(obj, path) {
  assertArgs(obj, path);

  if (!has$1(obj, path)) {
    return undefined;
  }

  var value = obj;
  path = pathToArray(path);
  path.forEach(function (prop) {
    value = value[prop];
  });
  return value;
}
/**
 * Set a deep property of an object using paths
 * @memberof keypath
 *
 * @param {Object} obj The object scope
 * @param {String|Array} path The path of the property to set
 * @param {*} value The value to set
 * @param {boolean} [ensure=true] Create path if does not exists
 * @return {*} The property value
 * @throws {Error} throw error when object scope is invalid undefined
 * @throws {Error} throw error when paths is invalid or undefined
 */

function set$2(obj, path, value) {
  var ensure = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  assertArgs(obj, path);
  path = pathToArray(path);

  if (path.length === 1) {
    if (isArray(obj) && path[0] === '') {
      obj.push(value);
    } else {
      obj[path[0]] = value;
    }

    return value;
  }

  var current = path.shift();
  var currentObj;

  if (!obj.hasOwnProperty(current)) {
    if (ensure) {
      var next = path[0];

      if (isNaN(next) && next !== '') {
        currentObj = obj[current] = {};
      } else {
        currentObj = obj[current] = [];
      }
    }
  } else {
    currentObj = obj[current];
  }

  return set$2(currentObj, path, value, ensure);
}
/**
 * Check deep object property existence using paths
 * @memberof keypath
 *
 * @param {Object} obj The object scope
 * @param {String|Array} path The path of the property to retrieve
 * @return {boolean} The property exists or not
 * @throws {Error} throw error when object scope is invalid undefined
 * @throws {Error} throw error when paths is invalid or undefined
 */

function has$1(obj, path) {
  if (!assertObject(obj)) {
    return false;
  }

  assertArgs(obj, path);
  path = pathToArray(path);
  var current = path.shift();

  if (isArray(obj) && !isNaN(current)) {
    current = parseInt(current);

    if (obj.length > current) {
      if (path.length === 0) {
        return true;
      }

      return has$1(obj[current], path);
    }
  }

  if (current in obj || obj.hasOwnProperty(current)) {
    if (path.length === 0) {
      return true;
    }

    return has$1(obj[current], path);
  }

  return false;
}

var SYM = Symbolic('listeners');
/**
 * Add a callback for the specified trigger.
 *
 * @param {Object} scope The event scope
 * @param {String} name The event name
 * @param {Function} callback The callback function
 * @return {Function} Destroy created listener with this function
 */

function on(scope, name, callback) {
  if (!isFunction(callback)) {
    throw new TypeError('callback is not a function');
  }

  scope[SYM] = scope[SYM] || {};
  var callbacks = scope[SYM];
  var evtCallbacks = callbacks[name] = callbacks[name] || [];
  evtCallbacks.push(callback);
  return off.bind(null, scope, name, callback);
}
/**
 * Remove one or multiple listeners.
 *
 * @param {Object} scope The event scope
 * @param {String} [name] Optional event name to reset
 * @param {Function} [callback] Callback to remove (empty, removes all listeners).
 */

function off(scope, name, callback) {
  if (callback) {
    var callbacks = scope[SYM];

    if (callbacks) {
      var evtCallbacks = callbacks[name] = callbacks[name] || [];
      var io = evtCallbacks.indexOf(callback);

      if (io !== -1) {
        evtCallbacks.splice(io, 1);
      }
    }
  } else if (name) {
    var _callbacks = scope[SYM];

    if (_callbacks) {
      delete _callbacks[name];
    }
  } else {
    scope[SYM] = {};
  }
}
/**
 * Queue event callbacks.
 * @private
 *
 * @param {Array<Function>} registered A list of registered callbacks.
 * @param {Array<Function>} callbacks A list of callbacks to exec.
 * @param {integer} index The callbacks iterator.
 * @param {*} res The previous callback response.
 * @param {*} context The callback context.
 * @param {*} args A list of arguments for the callback.
 */

function flush(registered, callbacks, index, res, context) {
  for (var _len = arguments.length, args = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
    args[_key - 5] = arguments[_key];
  }

  if (index === callbacks.length) {
    return res instanceof Promise ? res : Promise.resolve(res);
  }

  var callback = callbacks[index];

  if (registered.indexOf(callback) !== -1) {
    res = callback.call.apply(callback, [context].concat(args));
  }

  if (res instanceof Promise) {
    return res.then(function () {
      return flush.apply(void 0, [registered, callbacks, index + 1, res, context].concat(args));
    });
  }

  return flush.apply(void 0, [registered, callbacks, index + 1, res, context].concat(args));
}
/**
 * Trigger a callback.
 *
 * @param {Object} scope The event scope
 * @param {String} name Event name
 * @param {...*} [args] Arguments to pass to callbacks
 * @return {Promise} The final Promise of the callbacks chain
 */


function trigger(scope, name) {
  if (scope.hasOwnProperty(SYM) && scope[SYM].hasOwnProperty(name)) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    return flush.apply(void 0, [scope[SYM][name], scope[SYM][name].slice(0), 0, null, scope].concat(args));
  }
}

var FACTORY_SYM = Symbolic('fsymbol');
/**
 * Symbol for Factory context.
 * @memberof Factory
 * @type {Symbolic}
 */

var CONTEXT_SYM = Symbolic('context');
/**
 * Symbol for Factory configuration.
 * @memberof Factory
 * @type {Symbolic}
 */

var CONFIG_SYM = Symbolic('config');
/**
 * Symbol for Factory listeners.
 * @memberof Factory
 * @type {Symbolic}
 */

var LISTENERS_SYM = Symbolic('listeners');
var context;
var FACTORY_SYMBOLS = {};
/**
 * Base Factory mixin.
 * @memberof Factory
 * @mixin FactoryMixin
 *
 * @param {Function} SuperClass The class to mix.
 * @return {Function} A base Factory constructor.
 */

var FactoryMixin = function FactoryMixin(SuperClass) {
  return (
    /*#__PURE__*/
    function (_SuperClass) {
      _inherits(_class, _SuperClass);

      _createClass(_class, null, [{
        key: "SYM",

        /**
         * A symbolic defintion for the Factory constructor.
         * @name BaseFactory.SYM
         * @type {Symbolic}
         * @memberof Factory.BaseFactory
         */
        get: function get$$1() {
          if (!this.hasOwnProperty(FACTORY_SYM)) {
            var sym = Symbolic(this.name);
            FACTORY_SYMBOLS[sym] = this;
            this[FACTORY_SYM] = sym;
          }

          return this[FACTORY_SYM];
        }
      }]);

      function _class() {
        var _getPrototypeOf2, _this2;

        var _this;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_class)).call.apply(_getPrototypeOf2, [this].concat(args)));

        (_this2 = _this).initialize.apply(_this2, args);

        return _this;
      }
      /**
       * @class BaseFactory
       * @memberof Factory
       *
       * @param {...*} [args] Arguments for super initialize.
       */


      _createClass(_class, [{
        key: "initialize",
        value: function initialize() {
          var _get2;

          if (!this[CONTEXT_SYM]) {
            this[CONTEXT_SYM] = context || this;
          }

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return has(SuperClass, 'initialize') && (_get2 = _get(_getPrototypeOf(_class.prototype), "initialize", this)).call.apply(_get2, [this].concat(args));
        }
        /**
         * Init a new Factory with the same context.
         * @memberof Factory.BaseFactory
         *
         * @param {Function} Factory The Factory constructor.
         * @param {...*} args A list of arguments for the constructor.
         * @return {Object} The new instance.
         */

      }, {
        key: "init",
        value: function init(Factory) {
          context = this[CONTEXT_SYM];

          for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args[_key3 - 1] = arguments[_key3];
          }

          var res = _construct(Factory, args);

          context = null;
          return res;
        }
        /**
         * Clear the context.
         * @memberof Factory.BaseFactory
         */

      }, {
        key: "destroy",
        value: function destroy() {
          delete this[CONTEXT_SYM];
          return has(SuperClass, 'destroy') && _get(_getPrototypeOf(_class.prototype), "destroy", this).call(this);
        }
      }]);

      return _class;
    }(SuperClass)
  );
};
/**
 * Events emitter mixin.
 * @memberof Factory
 * @mixin EmitterMixin
 *
 * @param {Function} SuperClass The class to mix.
 * @return {Function} A Emitter constructor.
 */

var EmitterMixin = function EmitterMixin(SuperClass) {
  return (
    /*#__PURE__*/
    function (_mix$with) {
      _inherits(_class2, _mix$with);

      function _class2() {
        _classCallCheck(this, _class2);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class2).apply(this, arguments));
      }

      _createClass(_class2, [{
        key: "initialize",

        /**
         * @class Emitter
         * @memberof Factory
         * @implements FactoryMixin
         *
         * @param {...*} [args] Arguments for the constructor.
         */
        value: function initialize() {
          var _get3;

          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          (_get3 = _get(_getPrototypeOf(_class2.prototype), "initialize", this)).call.apply(_get3, [this].concat(args));

          if (!this[LISTENERS_SYM]) {
            this[LISTENERS_SYM] = [];
          }
        }
        /**
         * Add an event listener.
         * @memberof Factory.Emitter
         *
         * @param {string} name The event name.
         * @param {Function} callback The callback to exec for the event.
         * @return {Function} A listener destroyer.
         */

      }, {
        key: "on",
        value: function on$$1(name, callback) {
          return on(this, name, callback);
        }
        /**
         * Remove an event(s) listener(s).
         * @memberof Factory.Emitter
         *
         * @param {string} [name] The event name.
         * @param {Function} [callback] The optional callback to remove.
         */

      }, {
        key: "off",
        value: function off$$1(name, callback) {
          return off(this, name, callback);
        }
        /**
         * Dispatch an event.
         * @memberof Factory.Emitter
         *
         * @param {string} name The event name.
         * @param {...*} args A list of arguments to pass to listeners.
         * @return {Promise} It resolves when all listeners have been triggered.
         */

      }, {
        key: "trigger",
        value: function trigger$$1(name) {
          for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
            args[_key5 - 1] = arguments[_key5];
          }

          return trigger.apply(void 0, [this, name].concat(args));
        }
        /**
         * Listen events from another object.
         * @memberof Factory.Emitter
         *
         * @param {Object} obj The object to listen.
         * @param {string} name The event name.
         * @param {Function} callback The callback to exec for the event.
         * @return {Function} A listener destroyer.
         */

      }, {
        key: "listen",
        value: function listen(obj, name, callback) {
          var destroyer = on(obj, name, callback);

          this[LISTENERS_SYM].push(destroyer);
          return destroyer;
        }
        /**
         * Unlisten event(s) from another object(s).
         * @memberof Factory.Emitter
         *
         * @param {Object} [obj] The object to unlisten.
         * @param {string} [name] The event name.
         * @param {Function} [callback] The callback to exec for the event.
         * @return {Function} A listener destroyer.
         */

      }, {
        key: "unlisten",
        value: function unlisten(obj, name, callback) {
          if (obj) {
            off(obj, name, callback);
          } else {
            this[LISTENERS_SYM].forEach(function (offListener) {
              return offListener();
            });
            this[LISTENERS_SYM] = [];
          }
        }
        /**
         * Clear all listeners.
         * @memberof Factory.Emitter
         */

      }, {
        key: "destroy",
        value: function destroy() {
          this.off();
          this.unlisten();
          return _get(_getPrototypeOf(_class2.prototype), "destroy", this).call(this);
        }
      }]);

      return _class2;
    }(mix(SuperClass).with(FactoryMixin))
  );
};
/**
 * Configurable mixin.
 * @memberof Factory
 * @mixin ConfigurableMixin
 *
 * @param {Function} SuperClass The class to mix.
 * @return {Function} A Configurable constructor.
 */

var ConfigurableMixin = function ConfigurableMixin(SuperClass) {
  return (
    /*#__PURE__*/
    function (_mix$with2) {
      _inherits(_class3, _mix$with2);

      function _class3() {
        _classCallCheck(this, _class3);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class3).apply(this, arguments));
      }

      _createClass(_class3, [{
        key: "initialize",

        /**
         * @class Configurable
         * @memberof Factory
         * @implements FactoryMixin
         *
         * @property {Object} defaultConfig Default config object.
         *
         * @param {Object} [config] The instance configuration object.
         * @param {...*} [args] Other arguments for the super constructor.
         */
        value: function initialize(config) {
          var _get4;

          for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
            args[_key6 - 1] = arguments[_key6];
          }

          (_get4 = _get(_getPrototypeOf(_class3.prototype), "initialize", this)).call.apply(_get4, [this, config].concat(args));

          if (!this[CONFIG_SYM]) {
            this[CONFIG_SYM] = clone(this.defaultConfig || {});

            if (config) {
              this.config(config);
            }
          }
        }
      }, {
        key: "config",

        /**
         * Update instance configuration.
         * @memberof Factory.Configurable
         *
         * @param {Object|string} config The configuration to update (or the path of the configuration property).
         * @param {*} [value] The value to update for the given config name.
         * @return {Object} Final configuration of the instance.
         */
        value: function config(_config) {
          var current = this[CONFIG_SYM];

          if ((arguments.length <= 1 ? 0 : arguments.length - 1) === 0 && isString(_config)) {
            return get$1(current, _config);
          }

          var value = arguments.length <= 1 ? undefined : arguments[1];

          if (isString(_config)) {
            var oldValue = get$1(current, _config);

            if (oldValue !== value) {
              set$2(current, _config, value);
              this.trigger('config:changed', _config, oldValue, value);
            }
          }

          if (isObject(_config)) {
            current = merge(current, _config);
          }

          this[CONFIG_SYM] = current;
          return current;
        }
        /**
         * Clear the configuration.
         * @memberof Factory.Configurable
         */

      }, {
        key: "destroy",
        value: function destroy() {
          delete this[CONFIG_SYM];
          return _get(_getPrototypeOf(_class3.prototype), "destroy", this).call(this);
        }
      }, {
        key: "defaultConfig",
        get: function get$$1() {
          return {};
        }
      }]);

      return _class3;
    }(mix(SuperClass).with(FactoryMixin))
  );
};
/**
 * Mixin for other multiple injections.
 * @memberof Factory
 * @mixin InjectableMixin
 *
 * @param {Function} SuperClass The class to mix.
 * @return {Function} A Factory constructor.
 */

var InjectableMixin = function InjectableMixin(SuperClass) {
  return (
    /*#__PURE__*/
    function (_mix$with3) {
      _inherits(_class4, _mix$with3);

      function _class4() {
        _classCallCheck(this, _class4);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class4).apply(this, arguments));
      }

      _createClass(_class4, [{
        key: "initialize",

        /**
         * @class Factory
         * @memberof Factory
         * @implements FactoryMixin
         * @implements ConfigurableMixin
         * @implements EmitterMixin
         *
         * @property {Array} inject A default list of injections.
         *
         * @param {...*} [args] Arguments for the constructor.
         */
        value: function initialize() {
          var _get5,
              _this3 = this;

          for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
          }

          (_get5 = _get(_getPrototypeOf(_class4.prototype), "initialize", this)).call.apply(_get5, [this].concat(args));

          var ctx = this[CONTEXT_SYM];
          this.inject.forEach(function (Injector) {
            if (Symbolic.isSymbolic(Injector)) {
              Injector = FACTORY_SYMBOLS[Injector];
            }

            if (!_this3[Injector.SYM]) {
              if (ctx) {
                _this3[Injector.SYM] = ctx[Injector.SYM] = ctx[Injector.SYM] || _this3.init(Injector);
              } else {
                _this3[Injector.SYM] = _this3.init(Injector);
              }
            }
          });
        }
      }, {
        key: "destroy",

        /**
         * Clear injected methods.
         * @memberof Factory.Factory
         */
        value: function destroy() {
          var _this4 = this;

          this.inject.forEach(function (Injector) {
            var SYM = Symbolic.isSymbolic(Injector) ? Injector : Injector.SYM;
            delete _this4[SYM];
          });
          return _get(_getPrototypeOf(_class4.prototype), "destroy", this).call(this);
        }
      }, {
        key: "inject",
        get: function get$$1() {
          return [];
        }
      }]);

      return _class4;
    }(mix(SuperClass).with(FactoryMixin))
  );
};
var BaseFactory =
/*#__PURE__*/
function (_mix$with4) {
  _inherits(BaseFactory, _mix$with4);

  function BaseFactory() {
    _classCallCheck(this, BaseFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(BaseFactory).apply(this, arguments));
  }

  return BaseFactory;
}(mix().with(FactoryMixin));
var Emitter =
/*#__PURE__*/
function (_mix$with5) {
  _inherits(Emitter, _mix$with5);

  function Emitter() {
    _classCallCheck(this, Emitter);

    return _possibleConstructorReturn(this, _getPrototypeOf(Emitter).apply(this, arguments));
  }

  return Emitter;
}(mix().with(EmitterMixin));
var Configurable =
/*#__PURE__*/
function (_mix$with6) {
  _inherits(Configurable, _mix$with6);

  function Configurable() {
    _classCallCheck(this, Configurable);

    return _possibleConstructorReturn(this, _getPrototypeOf(Configurable).apply(this, arguments));
  }

  return Configurable;
}(mix().with(ConfigurableMixin));
var Factory =
/*#__PURE__*/
function (_mix$with7) {
  _inherits(Factory, _mix$with7);

  function Factory() {
    _classCallCheck(this, Factory);

    return _possibleConstructorReturn(this, _getPrototypeOf(Factory).apply(this, arguments));
  }

  return Factory;
}(mix().with(EmitterMixin, ConfigurableMixin, InjectableMixin));

/**
 * @typedef ChangeSet
 * @property {String} property The path to the changed property.
 * @property {*} oldValue The old value for the property.
 * @property {*} newValue The new value for the property.
 * @property {Array} added A list of added items to an array.
 * @property {Array} remove A list of remove items from an array.
 */

/**
 * Observable Symbol.
 * @type {Symbolic}
 * @private
 */

var OBSERVABLE_SYM = Symbolic('observable');
/**
 * Array prototype shortcut.
 * @type {Object}
 * @private
 */

var ARRAY_PROTO = Array.prototype;
/**
 * Object.prototype.hasOwnProperty shortcut.
 * @type {Function}
 * @private
 */

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Micro Proxy polyfill.
 * @private
 */

var ProxyHelper = typeof Proxy !== 'undefined' ? Proxy :
/*#__PURE__*/
function () {
  function _class(data, handler) {
    var _this = this;

    _classCallCheck(this, _class);

    var res = reconstruct(get(data));
    Object.keys(data).forEach(function (key) {
      _this.define(res, data, key, handler);
    });

    if (isArray(data)) {
      var lastLength = data.length;
      res.on('change', function () {
        if (data.length !== lastLength) {
          Object.keys(data).forEach(function (key) {
            if (key !== OBSERVABLE_SYM) {
              _this.define(res, data, key, handler);
            }
          });
          lastLength = data.length;
        }
      });
      this.define(res, data, 'length', {
        get: function get$$1() {
          return lastLength;
        }
      });
    }

    res[OBSERVABLE_SYM] = data[OBSERVABLE_SYM];
    return res;
  }

  _createClass(_class, [{
    key: "define",
    value: function define(res, data, property, handler) {
      var desc = {
        configurable: true
      };

      if (handler.get) {
        desc.get = function () {
          return handler.get(data, property);
        };
      }

      if (handler.set) {
        desc.set = function (val) {
          return handler.set(data, property, val);
        };
      }

      Object.defineProperty(res, property, desc);
    }
  }]);

  return _class;
}();
/**
 * Trigger object changes.
 * @private
 *
 * @param {Object|Array} scope The updated object.
 * @param {ChangeSet} changeset The changes descriptor.
 */

function triggerChanges(scope, changeset) {
  return scope[OBSERVABLE_SYM].trigger('change', changeset);
}
/**
 * Wrap Array prototype methods for changes triggering.
 * @type {Object}
 * @private
 */


var ARRAY_PROTO_WRAP = {
  push: function push() {
    var _this2 = this,
        _ARRAY_PROTO$push;

    for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
      items[_key] = arguments[_key];
    }

    var length = this.length;
    items = items.map(function (item, index) {
      return subobserve(_this2, length + index, item);
    });

    var res = (_ARRAY_PROTO$push = ARRAY_PROTO.push).call.apply(_ARRAY_PROTO$push, [this].concat(_toConsumableArray(items)));

    triggerChanges(this, {
      property: length,
      added: items,
      removed: []
    });
    return res;
  },
  unshift: function unshift(item) {
    var res = ARRAY_PROTO.unshift.call(this, item);
    subobserve(this, 0, item);
    triggerChanges(this, {
      property: 0,
      added: [item],
      removed: []
    });
    return res;
  },
  pop: function pop() {
    var res = ARRAY_PROTO.pop.call(this);
    triggerChanges(this, {
      property: this.length,
      added: [],
      removed: [res]
    });
    return res;
  },
  shift: function shift() {
    var res = ARRAY_PROTO.shift.call(this);
    triggerChanges(this, {
      property: 0,
      added: [],
      removed: [res]
    });
    return res;
  },
  splice: function splice(index, count) {
    var _this3 = this,
        _ARRAY_PROTO$splice;

    for (var _len2 = arguments.length, items = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      items[_key2 - 2] = arguments[_key2];
    }

    items = items.map(function (item, index) {
      return subobserve(_this3, length + index, item);
    });

    var res = (_ARRAY_PROTO$splice = ARRAY_PROTO.splice).call.apply(_ARRAY_PROTO$splice, [this, index, count].concat(_toConsumableArray(items)));

    triggerChanges(this, {
      property: index,
      added: items,
      removed: [res]
    });
    return res;
  }
};
/**
 * Subobserve objects.
 * @private
 *
 * @param {Object|Array} target The root object.
 * @param {String} name The root object property name
 * @param {Object|Array} value The sub object to observe.
 * @return {Observable} The Observable instance for the sub object.
 */

function subobserve(target, name, value) {
  if (isObject(value) || isArray(value)) {
    value = new Observable(value);
    value.on('change', function (changeset) {
      name = isArray(target) ? target.indexOf(value) : name;
      var changes = {
        property: "".concat(name, ".").concat(changeset.property)
      };

      if (hasOwnProperty.call(changeset, 'value')) {
        changes.oldValue = changeset.oldValue;
        changes.value = changeset.value;
      } else if (hasOwnProperty.call(changeset, 'added')) {
        changes.added = changeset.added;
        changes.removed = changeset.removed;
      }

      triggerChanges(target, changes);
    });
  }

  return value;
}
/**
 * ES6 Proxy handler.
 * @type {Object}
 * @private
 */


var handler = {
  get: function get$$1(target, name) {
    return target[name];
  },
  set: function set(target, name, value) {
    if (Symbolic.isSymbolic(name)) {
      return target[name] = value;
    }

    var oldValue = target[name];

    if (target[name] !== value) {
      value = subobserve(target, name, value);
      target[name] = value;
      triggerChanges(target, {
        property: name,
        oldValue: oldValue,
        value: value
      });
    }

    return true;
  }
};
/**
 * Create an Observable object for a set of data or an array.
 *
 * @param {Object|Array} data The object to observe.
 * @return {Proxy} The observed object proxy.
 */

var Observable =
/*#__PURE__*/
function () {
  function Observable(data) {
    _classCallCheck(this, Observable);

    if (_typeof(data) !== 'object') {
      throw new Error('Cannot observe this value.');
    }

    var emitter = data[OBSERVABLE_SYM] || new Emitter();

    if (emitter.proxy) {
      return emitter.proxy;
    }

    var proto = {
      on: {
        value: emitter.on.bind(emitter)
      },
      off: {
        value: emitter.off.bind(emitter)
      },
      trigger: {
        value: emitter.trigger.bind(emitter)
      }
    };

    if (isArray(data)) {
      proto.push = {
        get: function get$$1() {
          return ARRAY_PROTO_WRAP.push.bind(data);
        }
      };
      proto.unshift = {
        get: function get$$1() {
          return ARRAY_PROTO_WRAP.unshift.bind(data);
        }
      };
      proto.pop = {
        get: function get$$1() {
          return ARRAY_PROTO_WRAP.pop.bind(data);
        }
      };
      proto.shift = {
        get: function get$$1() {
          return ARRAY_PROTO_WRAP.shift.bind(data);
        }
      };
      proto.splice = {
        get: function get$$1() {
          return ARRAY_PROTO_WRAP.splice.bind(data);
        }
      };
    }

    data[OBSERVABLE_SYM] = emitter;
    set$1(data, extend(get(data), proto));
    emitter.proxy = new ProxyHelper(data, handler);
    Object.keys(data).forEach(function (key) {
      if (key !== OBSERVABLE_SYM) {
        data[key] = subobserve(data, key, data[key]);
      }
    });
    return emitter.proxy;
  }
  /**
   * Re-observe an array or an object after adding a property.
   * 
   * You should invoke this static method only after adding a new property
   * to an object, and only if you wish to support browsers that do not have
   * native Proxy object. This is required because it is impossible to
   * intercept new properties added to an existing object from the polyfill.
   * 
   * ## Example
   * 
   * ```js
   * const myObservable = new Observable({ foo: 'foo' });
   * 
   * // This is not enough to trigger changes in older browsers!
   * myObservable.bar = 'bar';
   * 
   * // So, you should invoke this immediately after:
   * Observable.reobserve(myObservable);
   * ```
   * 
   * @param {Object|Array} data Data to be re-observed.
   * @return {void}
   */


  _createClass(Observable, null, [{
    key: "reobserve",
    value: function reobserve(data) {
      if (typeof Proxy !== 'undefined') {
        // Native proxy support. We're good.
        return;
      } // Ensure `data` is an observable.


      new Observable(data);
      Object.keys(data).forEach(function (key) {
        if (key !== OBSERVABLE_SYM && !data[key][OBSERVABLE_SYM]) {
          // Key has been added and is not yet observed. Big Brother is on its way.
          data[key] = subobserve(data, key, data[key]);
          triggerChanges(data, {
            property: key,
            oldValue: undefined,
            value: data[key]
          });
        }
      });
    }
  }]);

  return Observable;
}();

var REF_SYM = Symbolic('ref');
var URL_REGEX = /((?:^(?:[a-z]+:))|^)?(?:\/\/)?([^?/$]*)([^?]*)?(\?.*)?/i;
var PORT_REGEX = /:\d*$/;
/**
 * Parse and split an url in its components.
 * @memberof Url
 *
 * @param {string} url The url to parse.
 * @return {Object} The url properties.
 */

function parse() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var hashSplit = url.split('#');
  var hash = hashSplit.length > 1 ? hashSplit.pop() : undefined;
  url = hashSplit.join('#');
  var match = url.match(URL_REGEX);
  var res = {
    host: undefined,
    hostname: undefined,
    port: undefined,
    username: undefined,
    password: undefined,
    hash: hash
  };

  if (match) {
    res.protocol = match[1];

    if (match[2]) {
      var host = match[2];
      res.host = host;
      var port = host.match(PORT_REGEX);

      if (port) {
        res.port = port[0].substring(1);
        host = host.replace(port[0], '');
      }

      var authSplit = host.split('@');
      res.hostname = authSplit.pop();
      var authChunk = authSplit.join('@').split(':');
      res.username = authChunk.shift();
      res.password = authChunk.join(':');
    }

    res.pathname = match[3];
    res.search = match[4];
  }

  if (!match || res.port && !res.hostname || res.protocol && res.protocol !== 'file:' && !res.hostname || res.search && !res.hostname && !res.pathname || res.password && !res.username) {
    throw new SyntaxError('invalid url');
  }

  if (res.host && res.pathname === '/') {
    res.pathname = '';
  }

  if (res.hostname) {
    var origin = res.protocol ? "".concat(res.protocol, "//") : '';
    origin += res.hostname;
    origin += res.port ? ":".concat(res.port) : '';
    res.origin = origin;
  }

  return res;
}
/**
 * Serialize a key/value pair matching differente operators.
 * @private
 *
 * @param {string} key The pair key.
 * @param {string} val The pair value.
 * @return {string} A serialized string of key/value pair.
 */

function chunk(key, val) {
  if (val) {
    return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(val));
  }

  return "".concat(encodeURIComponent(key));
}
/**
 * Serialize an object in FormData format.
 * @memberof Url
 *
 * @param {Object} obj The object to convert.
 * @param {string} prefix The prefix to use in case of recursion.
 * @param {Function} [chunkFn] The callback function to use for chunking a key/value pair.
 * @return {string} An object to serialize.
 */


function serialize(obj, prefix) {
  var chunkFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : chunk;
  var str = [];
  var keys = Object.keys(obj);

  if (keys.length) {
    for (var p in obj) {
      if (obj.hasOwnProperty(p) && obj[p] !== undefined) {
        var k = prefix ? "".concat(prefix, "[").concat(p, "]") : p;
        var v = obj[p];

        if (v instanceof Date) {
          v = v.toISOString();
        }

        str.push(v !== null && _typeof(v) === 'object' ? serialize(v, k) : chunkFn(k, "".concat(v)));
      }
    }
  } else if (prefix) {
    str.push(chunkFn(prefix));
  }

  return str.join('&');
}
/**
 * Unserialize a string in FormData format to an object.
 * @memberof Url
 *
 * @param {string} str A search string to unserialize.
 * @return {object} The unserialized object.
 */

function unserialize(str) {
  str = decodeURI(str);
  var chunks = str.split('&');
  var res = {};

  for (var i = 0, len = chunks.length; i < len; i++) {
    var _chunk = chunks[i].split('=');

    if (_chunk[0] && _chunk[1]) {
      var key = _chunk[0].replace(/\[(.*?)\]/g, '.$1');

      var val = decodeURIComponent(_chunk[1]);
      set$2(res, key, val);
    }
  }

  return res;
}
/**
 * Join url paths.
 * @memberof Url
 *
 * @param {...string} paths A list of paths to join.
 * @return {string} The final joint string.
 */

function _join() {
  for (var _len = arguments.length, paths = new Array(_len), _key = 0; _key < _len; _key++) {
    paths[_key] = arguments[_key];
  }

  var len = paths.length - 1;
  return paths.filter(function (path) {
    return !!path;
  }).map(function (path, index) {
    if (index === 0) {
      return path.replace(/\/*$/, '');
    } else if (index === len) {
      return path.replace(/^\/*/, '');
    }

    return path.replace(/^\/*/, '').replace(/\/*$/, '');
  }).join('/');
}

function _resolve(base, relative) {
  if (relative[0] === '/') {
    var baseInfo = parse(base);

    if (!baseInfo.origin) {
      throw new Error('base url is not an absolute url');
    }

    base = "".concat(baseInfo.origin, "/");
  }

  var stack = base.split('/');
  var parts = relative.split('/').filter(function (part) {
    return part !== '';
  });

  if (stack.length > 1) {
    stack.pop();
  }

  for (var i = 0; i < parts.length; i++) {
    if (parts[i] === '.') {
      continue;
    } else if (parts[i] === '..') {
      stack.pop();
    } else {
      stack.push(parts[i]);
    }
  }

  return stack.join('/');
}

function _isAbsoluteUrl(url) {
  return !!parse(url).protocol;
}

function _isDataUrl(url) {
  return parse(url).protocol === 'data:';
}

function _isLocalUrl(url) {
  return parse(url).protocol === 'file:';
}

function updateSearchPath(url, path) {
  var href = url.href.split('?')[0];
  url.href = "".concat(href, "?").concat(path);
}
/**
 * Convert search params entries to a query string.
 * @private
 *
 * @param {Array} entries Search params entries.
 * @return {string} The query string.
 */


function entriesToString(entries) {
  var unserialized = {};
  entries.forEach(function (entry) {
    unserialized[entry[0]] = entry[1];
  });
  return serialize(unserialized);
}
/**
 * Search params interface for Url.
 * @class SearchParams
 * @memberof Url
 * @property {Url} url The referenced Url.
 *
 * @param {Url} ref The referenced Url instance.
 */


var SearchParams =
/*#__PURE__*/
function () {
  function SearchParams(ref) {
    _classCallCheck(this, SearchParams);

    this[REF_SYM] = ref;
  }

  _createClass(SearchParams, [{
    key: "keys",

    /**
     * List all entry keys.
     * @memberof Url.SearchParams
     *
     * @return {Array} Entry keys list.
     */
    value: function keys() {
      return this.entries().map(function (entry) {
        return entry[0];
      });
    }
    /**
     * List all entry values.
     * @memberof Url.SearchParams
     *
     * @return {Array} Entry values list.
     */

  }, {
    key: "values",
    value: function values() {
      return this.entries().map(function (entry) {
        return entry[1];
      });
    }
    /**
     * List all entries.
     * @memberof Url.SearchParams
     *
     * @return {Array} Entries list in format [[key, value], [...]].
     */

  }, {
    key: "entries",
    value: function entries() {
      var search = this.url.search.substring(1);
      var unserialized = unserialize(search);
      return Object.keys(unserialized).map(function (key) {
        return [key, unserialized[key]];
      });
    }
    /**
     * Retrieve an entry.
     * @memberof Url.SearchParams
     *
     * @param {string} name The entity name to get.
     * @return {*} The entity value.
     */

  }, {
    key: "get",
    value: function get(name) {
      var entries = this.entries();

      for (var i = 0, len = entries.length; i < len; i++) {
        if (entries[i][0] === name) {
          return entries[i][1];
        }
      }
    }
    /**
     * Check if entity is defined.
     * @memberof Url.SearchParams
     *
     * @param {string} name The entity name to check.
     * @return {Boolean}
     */

  }, {
    key: "has",
    value: function has(name) {
      return !!this.get(name);
    }
    /**
     * Set an entry value.
     * @memberof Url.SearchParams
     *
     * @param {string} name The entity name to set.
     * @param {*} value The entity value to set
     */

  }, {
    key: "set",
    value: function set(name, value) {
      this.delete(name);
      var entries = this.entries();
      entries.push([name, value]);
      updateSearchPath(this.url, entriesToString(entries));
    }
    /**
     * Remove an entity from the search params.
     * @memberof Url.SearchParams
     *
     * @param {string} name The entity name to remove.
     */

  }, {
    key: "delete",
    value: function _delete(name) {
      updateSearchPath(this.url, entriesToString(this.entries().filter(function (entry) {
        return entry[0] !== name;
      })));
    }
    /**
     * Sort entities by keys names.
     * @memberof Url.SearchParams
     */

  }, {
    key: "sort",
    value: function sort() {
      var entries = this.entries();
      entries.sort(function (entry1, entry2) {
        var key1 = entry1[0];
        var key2 = entry2[0];

        if (key1 < key2) {
          return -1;
        } else if (key1 > key2) {
          return 1;
        }

        return 0;
      });
      updateSearchPath(this.url, entriesToString(entries));
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.url.search;
    }
  }, {
    key: "url",
    get: function get() {
      return this[REF_SYM];
    }
  }]);

  return SearchParams;
}();
/**
 * Url helper class.
 * @class Url
 * @memberof Url
 * @property {SearchParams} searchParams The url query string interface.
 * @property {string} href The full url string.
 * @property {string} protocol The url's protocol (if defined).
 * @property {string} username The username used (if defined).
 * @property {string} password The password used (if defined).
 * @property {string} host The url's host.
 * @property {string} hostname The url's hostname.
 * @property {string} port The url's port (if defined).
 * @property {string} search The url's query params.
 * @property {string} hash The url's hash.
 *
 * @param {string} path The url to handle.
 * @param {string} [baseUrl] The optional base url. 
 */

var Url =
/*#__PURE__*/
function () {
  function Url(path, baseUrl) {
    _classCallCheck(this, Url);

    if (baseUrl) {
      this.href = _resolve(baseUrl, path);
    } else {
      this.href = path;
    }

    this.searchParams = new SearchParams(this);
  }

  _createClass(Url, [{
    key: "join",

    /**
     * Join current Url with paths.
     * @memberof Url.Url
     *
     * @param {...string} paths A list of paths to join.
     * @return {Url} A new url instance.
     */
    value: function join() {
      for (var _len2 = arguments.length, paths = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        paths[_key2] = arguments[_key2];
      }

      return new Url(_join.apply(void 0, [this.href].concat(paths)));
    }
    /**
     * Resolve a path relative to the current Url.
     * @memberof Url.Url
     *
     * @param {string} path The relative path.
     * @return {Url} A new url instance.
     */

  }, {
    key: "resolve",
    value: function resolve(path) {
      return new Url(_resolve(this.href, path));
    }
    /**
     * Check if current Url is absolute.
     * @memberof Url.Url
     *
     * @return {Boolean}
     */

  }, {
    key: "isAbsoluteUrl",
    value: function isAbsoluteUrl() {
      return _isAbsoluteUrl(this.href);
    }
    /**
     * Check if current Url is a data url.
     * @memberof Url.Url
     *
     * @return {Boolean}
     */

  }, {
    key: "isDataUrl",
    value: function isDataUrl() {
      return _isDataUrl(this.href);
    }
    /**
     * Check if current Url points to local file.
     * @memberof Url.Url
     *
     * @return {Boolean}
     */

  }, {
    key: "isLocalUrl",
    value: function isLocalUrl() {
      return _isLocalUrl(this.href);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.href;
    }
  }, {
    key: "href",
    get: function get() {
      return this[REF_SYM];
    },
    set: function set(href) {
      var info = parse(href);
      this[REF_SYM] = href;

      for (var k in info) {
        this[k] = info[k];
      }
    }
  }]);

  return Url;
}();

/**
 * Proteins
 *
 * (c) 2017 Chialab (http://www.chialab.it) <dev@chialab.io>
 * http://chialab.io
 *
 * A primer for JavaScript libraries and frameworks development.
 */

var SELECTORS = ['button', 'a[href]', 'input', 'select', 'textarea', '[tabindex]'];
var TIME_BETWEEN_KEYDOWNS = 150;
/**
 * Loock context class.
 */

var LoockContext =
/*#__PURE__*/
function (_Factory$Emitter) {
  _inherits(LoockContext, _Factory$Emitter);

  /**
   * @constructor
   */
  function LoockContext(element) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, LoockContext);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoockContext).call(this));
    _this.root = element;
    _this.options = options;
    _this.isActive = false;
    _this.currentElement = null;
    _this.ignore = _this.options.ignore;
    _this.lastKeydownTime = Date.now();

    if (!element.hasAttribute('tabindex')) {
      element.setAttribute('tabindex', '0');
    }

    if (!element.hasAttribute('aria-label')) {
      // eslint-disable-next-line
      console.warn('created a LoockContext without aria-label', _assertThisInitialized(_assertThisInitialized(_this)));
    }

    return _this;
  }
  /**
   * Returns focusable children elements.
   *
   * @returns {Array<HTMLElement>} focusable children of root element.
   */


  _createClass(LoockContext, [{
    key: "findFocusableChildren",
    value: function findFocusableChildren() {
      var elements = _toConsumableArray(this.root.querySelectorAll(SELECTORS.map(function (selector) {
        return "".concat(selector, ":not([tabindex=\"-1\"]):not([disabled]):not([aria-hidden])");
      }).join(', ')));

      var ignore = this.ignore ? _toConsumableArray(this.root.querySelectorAll(this.ignore)) : [];
      return elements.filter(function (elem) {
        var rect = elem.getBoundingClientRect();
        return rect.height && rect.width;
      }).filter(function (elem) {
        return !ignore.some(function (area) {
          return elem === area || area.contains(elem);
        });
      });
    }
    /**
     * Active previous focusable element.
     *
     * @returns {void}
     */

  }, {
    key: "prev",
    value: function prev() {
      var children = this.findFocusableChildren();

      if (!children.length) {
        this.restore();
        return;
      }

      var io = children.indexOf(this.currentElement);

      if (io === 0) {
        io = children.length - 1;
      } else if (io !== -1) {
        io = io - 1;
      } else {
        io = 0;
      }

      this.currentElement = children[io];
      this.currentElement.focus();
    }
    /**
     * Active next focusable element.
     *
     * @returns {void}
     */

  }, {
    key: "next",
    value: function next() {
      var children = this.findFocusableChildren();

      if (!children.length) {
        this.restore();
        return;
      }

      var io = children.indexOf(this.currentElement);

      if (io === children.length - 1) {
        io = 0;
      } else if (io !== -1) {
        io = io + 1;
      } else {
        io = 0;
      }

      this.currentElement = children[io];
      this.currentElement.focus();
    }
    /**
     * Entering the context.
     *
     * @returns {void}
     */

  }, {
    key: "enter",
    value: function enter() {
      if (this.isActive) {
        return;
      }

      this.isActive = true;
      this.trigger('enter');
      this.restore();
    }
    /**
     * Restore the focus on the last element.
     * @return {void}
     */

  }, {
    key: "restore",
    value: function restore() {
      if (this.currentElement) {
        this.currentElement.focus();
      } else {
        this.root.focus();
      }
    }
    /**
     * Exit from the context.
     *
     * @returns {void}
     */

  }, {
    key: "exit",
    value: function exit() {
      if (!this.isActive) {
        return;
      }

      this.isActive = false;
      this.currentElement = null;
      this.trigger('exit');
    }
  }]);

  return LoockContext;
}(Emitter);
/**
 * A manager for Loock contexts.
 */


var Loock =
/*#__PURE__*/
function () {
  /**
   * @constructor
   */
  function Loock() {
    var _this2 = this;

    var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

    _classCallCheck(this, Loock);

    this.contexts = [];
    this.actives = [];
    root.addEventListener('keydown', function (event) {
      // prevent compulsively key holding down in all browsers.
      if (Date.now() - _this2.lastKeydownTime < TIME_BETWEEN_KEYDOWNS) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      _this2.lastKeydownTime = Date.now();

      if (!_this2.activeContext) {
        return;
      }

      if (event.key == 'Escape' || event.key == 'Esc') {
        event.preventDefault();
        event.stopPropagation();

        _this2.activeContext.exit();
      }

      if (event.keyCode == '9') {
        event.preventDefault();
        event.stopPropagation();

        var elements = _this2.activeContext.findFocusableChildren();

        if (elements.length === 0) {
          _this2.activeContext.exit();

          return;
        }

        if (event.shiftKey) {
          _this2.activeContext.prev();
        } else {
          _this2.activeContext.next();
        }
      }
    });
    root.addEventListener('focusin', function (_ref) {
      var target = _ref.target;

      var context = _this2.contexts.find(function (_ref2) {
        var root = _ref2.root;
        return root === target;
      });

      if (context && !context.isActive) {
        context.enter();
        return;
      }

      if (!_this2.activeContext) {
        return;
      }

      if (target === _this2.activeContext.root) {
        _this2.activeContext.currentElement = null;
        return;
      }

      var elements = _this2.activeContext.findFocusableChildren();

      if (elements.indexOf(target) !== -1) {
        _this2.activeContext.currentElement = target;
      }
    });
  }
  /**
   * Creates a default context.
   *
   * @param {HTMLElement} element
   * @param {Object} options
   * @returns {LoockContext} new context
   */


  _createClass(Loock, [{
    key: "createDefaultContext",
    value: function createDefaultContext(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.defaultContext = this.createContext(element, options);
      this.defaultContext.enter();
      this.contexts.push(this.defaultContext);
      return this.defaultContext;
    }
    /**
     * Creates new context.
     *
     * @param {HTMLElement} element
     * @param {Object} options
     * @returns {LoockContext} new context
     */

  }, {
    key: "createContext",
    value: function createContext(element) {
      var _this3 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var context = new LoockContext(element, options);
      this.contexts.push(context);
      context.on('enter', function () {
        _this3.activeContext = context;

        _this3.actives.push(context);
      });
      context.on('exit', function () {
        var isActiveContext = context === _this3.activeContext;

        var io = _this3.actives.indexOf(context);

        _this3.actives.splice(io, 1);

        if (!isActiveContext) {
          return;
        }

        if (_this3.actives.length) {
          _this3.activeContext = _this3.actives[_this3.actives.length - 1];

          _this3.activeContext.restore();

          return;
        }

        delete _this3.activeContext;

        if (_this3.defaultContext) {
          _this3.defaultContext.enter();
        }
      });
      return context;
    }
  }]);

  return Loock;
}();

var loock = new Loock();
var context$1 = loock.createContext(document.querySelector('.a11y-bar'));
var MAX_FONT_SIZE = 24;
var MIN_FONT_SIZE = 12;
var textContent = document.querySelector('.text-content');
var currentFontSize; // a11ybar listeners

document.querySelector('button[name="buttonChangeFont"]').addEventListener('click', function () {
  var font = textContent.style.fontFamily;
  var newFontFamily = font === 'sans-serif' ? 'Monospace' : 'sans-serif';
  textContent.style.fontFamily = newFontFamily;
});

var handleButtonStates = function handleButtonStates() {
  if (currentFontSize === MAX_FONT_SIZE) {
    buttonZoomIn.setAttribute('disabled', true);
    buttonZoomIn.classList.add('disabled');
  } else {
    buttonZoomIn.removeAttribute('disabled');
    buttonZoomIn.classList.remove('disabled');
  }

  if (currentFontSize === MIN_FONT_SIZE) {
    buttonZoomOut.setAttribute('disabled', true);
    buttonZoomOut.classList.add('disabled');
  } else {
    buttonZoomOut.removeAttribute('disabled');
    buttonZoomOut.classList.remove('disabled');
  }
};

var buttonZoomIn = document.querySelector('button[name="buttonZoomIn"]');
buttonZoomIn.addEventListener('click', function () {
  currentFontSize = parseInt(window.getComputedStyle(textContent).fontSize);

  if (currentFontSize === MAX_FONT_SIZE) {
    return;
  }

  textContent.style.fontSize = "".concat(++currentFontSize, "px");
  currentFontSize = parseInt(window.getComputedStyle(textContent).fontSize);
  handleButtonStates();
});
var buttonZoomOut = document.querySelector('button[name="buttonZoomOut"]');
buttonZoomOut.addEventListener('click', function () {
  currentFontSize = parseInt(window.getComputedStyle(textContent).fontSize);

  if (currentFontSize === MIN_FONT_SIZE) {
    return;
  }

  textContent.style.fontSize = "".concat(--currentFontSize, "px");
  currentFontSize = parseInt(window.getComputedStyle(textContent).fontSize);
  handleButtonStates();
});
var opened = false;
document.querySelector('button[name="show"]').addEventListener('click', function () {
  var element = document.querySelector('.a11y-bar');

  if (!element) {
    return;
  }

  if (opened) {
    close(element);
  } else {
    open(element);
  }
}); // context listeners

context$1.on('exit', function () {
  var element = document.querySelector('.a11y-bar');

  if (!element) {
    return;
  }

  close(element);
});

var open = function open(element) {
  opened = true;
  element.classList.add('active');
  context$1.enter();
};

var close = function close(element) {
  opened = false;

  if (element.classList.contains('active')) {
    element.classList.remove('active');
  }

  context$1.exit();
};

var content = document.querySelector('.content');
loock.createDefaultContext(content);

})));
//# sourceMappingURL=index.js.map
