"use strict";
exports.__esModule = true;
exports.ValuePair = void 0;
var ValuePair = /** @class */ (function () {
    function ValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    ValuePair.prototype.toString = function () {
        return "[#" + this.key + ":" + this.value + "]";
    };
    return ValuePair;
}());
exports.ValuePair = ValuePair;
