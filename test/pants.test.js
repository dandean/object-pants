if (typeof window === 'undefined') {
  var assert = require("assert");
  var pants = require("../index");
}

describe('Module', function() {

  if (typeof pants != 'undefined') {
    it('should not install until install() is called', function() {
      assert.ok(typeof Object.extend === 'undefined');
      pants.install();
      assert.ok(Object.extend == pants.extend);
    });
  }

  describe('extend', function() {
    it('should extend an object', function() {
      var original = {"wow": "cool"};
      var newProps = {"whatever": "lame"};
      Object.extend(original, newProps);
      assert.ok('wow' in original);
      assert.ok('whatever' in original);
    });

    it('should return undefined', function() {
      assert.ok(Object.extend({}, {}) === undefined);
    });
  });

  it('should list an object\'s enumerable values', function() {
    var object = {"wow": "cool", "whatever": "lame"};
    assert.deepEqual(Object.values(object), ["cool", "lame"]);
  });

  it('should NOT list an object\'s non-enumerable values', function() {
    var object = {"wow": "cool", "whatever": "lame"};
    Object.defineProperty(object, 'nope', {
      enumerable: false
    });
    assert.deepEqual(Object.values(object), ["cool", "lame"]);
  });

  it('should be able to tell if something is or is not a Number', function() {
    assert.ok(Object.isNumber(5));
    assert.ok(!Object.isNumber('5'));
    assert.ok(!Object.isNumber([5]));
    assert.ok(!Object.isNumber(false));
    assert.ok(!Object.isNumber(true));
    assert.ok(!Object.isNumber(null));
    assert.ok(!Object.isNumber(Number));
    assert.ok(!Object.isNumber(new Date));
  });

  it('should be able to tell if something is or is not a Date', function() {
    assert.ok(!Object.isDate(5));
    assert.ok(!Object.isDate('5'));
    assert.ok(!Object.isDate([5]));
    assert.ok(!Object.isDate(false));
    assert.ok(!Object.isDate(true));
    assert.ok(!Object.isDate(null));
    assert.ok(!Object.isDate(Number));
    assert.ok(Object.isDate(new Date));
    assert.ok(!Object.isDate(undefined));
  });

  it('should be able to tell if something is or is not a undefined', function() {
    assert.ok(!Object.isUndefined(5));
    assert.ok(!Object.isUndefined('5'));
    assert.ok(!Object.isUndefined([5]));
    assert.ok(!Object.isUndefined(false));
    assert.ok(!Object.isUndefined(true));
    assert.ok(!Object.isUndefined(null));
    assert.ok(!Object.isUndefined(Number));
    assert.ok(!Object.isUndefined(new Date));
    assert.ok(Object.isUndefined(undefined));
    assert.ok(Object.isUndefined((function(){})()));
  });

  it('should be able to tell if something is or is not a String', function() {
    assert.ok(!Object.isString(5));
    assert.ok(Object.isString('5'));
    assert.ok(!Object.isString([5]));
    assert.ok(!Object.isString(false));
    assert.ok(!Object.isString(true));
    assert.ok(!Object.isString(null));
    assert.ok(!Object.isString(Number));
    assert.ok(!Object.isString(new Date));
    assert.ok(!Object.isString(undefined));
    assert.ok(!Object.isString((function(){})()));
  });

  it('should be able to tell if something is or is not a Function', function() {
    assert.ok(!Object.isFunction(5));
    assert.ok(!Object.isFunction('5'));
    assert.ok(!Object.isFunction([5]));
    assert.ok(!Object.isFunction(false));
    assert.ok(!Object.isFunction(true));
    assert.ok(!Object.isFunction(null));
    assert.ok(Object.isFunction(Number));
    assert.ok(Object.isFunction(function(){}));
    assert.ok(!Object.isFunction(new Date));
    assert.ok(!Object.isFunction(undefined));
    assert.ok(!Object.isFunction((function(){})()));
  });
});
