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
exports.Steam = void 0;
var condiment_1 = require("./condiment");
var Steam = /** @class */ (function (_super) {
    __extends(Steam, _super);
    function Steam() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Steam.prototype.getDescription = function () {
        return this.beverage.getDescription() + " 스팀우유";
    };
    Steam.prototype.cost = function () {
        return 0.2 + this.beverage.cost();
    };
    return Steam;
}(condiment_1.CondimentDecorator));
exports.Steam = Steam;
