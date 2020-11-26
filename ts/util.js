"use strict";
exports.__esModule = true;
exports.defaultCompare = exports.Compare = exports.defaultToString = exports.defaultEquals = void 0;
// 等于 函数
function defaultEquals(a, b) {
    return a === b;
}
exports.defaultEquals = defaultEquals;
function defaultToString(item) {
    if (item === null) {
        return 'NUll';
    }
    else if (item === undefined) {
        return 'UNDEFINED';
    }
    else if (typeof item === 'string' || item instanceof String) {
        return "" + item;
    }
    return item.toString();
}
exports.defaultToString = defaultToString;
var Compare;
(function (Compare) {
    Compare[Compare["LESS_THAN"] = -1] = "LESS_THAN";
    Compare[Compare["BIGGER_THAN"] = 1] = "BIGGER_THAN";
    Compare[Compare["EQUALS"] = 0] = "EQUALS";
})(Compare = exports.Compare || (exports.Compare = {}));
function defaultCompare(a, b) {
    if (a === b) {
        return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
exports.defaultCompare = defaultCompare;
