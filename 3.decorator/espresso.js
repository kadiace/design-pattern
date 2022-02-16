"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Espresso = void 0;
var beverage_1 = require("./beverage");
var size_1 = require("./size");
var Espresso = /** @class */ (function (_super) {
    __extends(Espresso, _super);
    function Espresso(size) {
        var _this = _super.call(this, size) || this;
        _this.description = "에스프레소";
        return _this;
    }
    Espresso.prototype.cost = function () {
        switch (this.size) {
            case size_1.Size.tall: {
                return 1.99;
            }
            case size_1.Size.benti: {
                return 2.19;
            }
            case size_1.Size.grande: {
                return 2.39;
            }
        }
    };
    return Espresso;
}(beverage_1.Beverage));
exports.Espresso = Espresso;
