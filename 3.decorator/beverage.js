"use strict";
exports.__esModule = true;
exports.Beverage = void 0;
var Beverage = /** @class */ (function () {
    function Beverage(size) {
        this.size = size;
    }
    Beverage.prototype.getDescription = function () {
        return this.description;
    };
    Beverage.prototype.cost = function () {
        return 0;
    };
    return Beverage;
}());
exports.Beverage = Beverage;
