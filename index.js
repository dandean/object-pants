;(function() {
  'use strict';

  function getType(object) {
    return Object.prototype.toString.call(object);
  }

  /**
   * values(object) -> Array
   *
   * Returns an array of all values on the object for its enumerable keys.
  **/
  function values(object) {
    return Object.keys(object).map(function(key) {
      return object[key];
    });
  }

  /**
   * extend(destination, source) -> undefined
   *
   * Copies every member from `source` to `destination`.
  **/
  function extend(destination, source) {
    for (var property in source)
      destination[property] = source[property];
  }
  
  /**
   * isString(object) -> Boolean
   *
   * Checks if `object` is a `String`.
  **/
  function isString(object) {
    return getType(object) === "[object String]";
  }
  
  /**
   * isNumber(object) -> Boolean
   *
   * Checks if `object` is a `Number`.
  **/
  function isNumber(object) {
    return getType(object) === "[object Number]";
  }
  
  /**
   * isDate(object) -> Boolean
   *
   * Checks if `object` is a `Date`.
  **/
  function isDate(object) {
    return getType(object) === "[object Date]";
  }
  
  /**
   * isUndefined(object) -> Boolean
   *
   * Checks if `object` is `undefined`.
  **/
  function isUndefined(object) {
    return typeof object === "undefined";
  }
  
  /**
   * isFunction(object) -> Boolean
   *
   * Checks if `object` is a `Function`.
  **/
  function isFunction(object) {
    return getType(object) === "[object Function]";
  }

  var Extensions = {
    values: values,
    extend: extend,
    isString: isString,
    isNumber: isNumber,
    isDate: isDate,
    isUndefined: isUndefined,
    isFunction: isFunction
  };

  /**
   * install([debug]) -> undefined
   * - debug (Boolean): If debug messages should printed when a function is installed on `Object`.
   *
   * Installs all module functions (except Module.install) on the global `Object` object.
  **/
  Extensions.install = function(debug) {
    Object.keys(Extensions).forEach(function(name) {
      if (name != 'install' && !Object.hasOwnProperty(name)) {
        Object.defineProperty(Object, name, {
          value: Extensions[name],
          enumerable: false,
          configurable: true,
          writable: true
        });
        if (debug && console) console.log("Installed Object." + name + "()");
      }
    });
  };

  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // RequireJS
    define(function() { return Extensions; });

  } else if (typeof module == 'object') {
    // CommonJS
    module.exports = Extensions;

  } else if (typeof window == 'object') {
    // No module system
    Extensions.install();
  }

}(this));
