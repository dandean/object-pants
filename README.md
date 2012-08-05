Object Pants
================================================================================

**Object Pants** is a set `Object` utility methods. This package plays nice with others by not forcing you to "pollute" the global `Object` object. On the other hand, it provides a means to add them to the global `Object` object, if that's how you roll.

If you opt-in to adding these methods to the global `Object` object, each of them will only be added if members don't already exist with their given name.

The current suite includes:

* `isString`
* `isNumber`
* `isUndefined`
* `isDate`
* `isFunction`
* `extend`
* `values`

Usage
--------------------------------------------------------------------------------

To get a reference to the pants, while NOT modifying the global `Object` object, just require the package:

    var pants = require("object-pants");
    pants.isString("hi");
    // -> true

If, on the other hand, you _want_ to just add these to the global `Object` object, call the `install` method:

    require("object-pants").install();
    Object.isString("hi");
    // -> true

These pants are inspired (and sometimes directly copied from) Prototype.js

Installation
--------------------------------------------------------------------------------

Grab a copy of the source, and require it in your app:

    require("./path/to/object-pants").install();

Or install it with NPM:

    $ npm install object-pants

Then require it in your app: 

    require("object-pants").install();
