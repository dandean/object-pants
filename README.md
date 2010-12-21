Object Additions
================================================================================

Object additions adds methods to the `Object` class if not already present. The current suite includes:

* `isString`
* `isNumber`
* `isUndefined`
* `isDate`
* `isFunction`
* `extend`
* `values`

Usage
--------------------------------------------------------------------------------

To get a reference to the additions, while NOT modifying the global `Object` object, just require the package:

    var additions = require("object-additions").object;
    additions.isString("hi");
    // -> true

If, on the other hand, you _want_ to just add these to the global `Object` object, call the `add` method:

    require("object-additions").add();
    Object.isString("hi");
    // -> true

These additions are inspired (and sometimes directly copied from) Prototype.js