"use strict";
exports.__esModule = true;
var espresso_1 = require("./espresso");
var size_1 = require("./size");
var steam_1 = require("./steam");
console.log("hello star buzz!");
var beverage = new espresso_1.Espresso(size_1.Size.tall);
console.log("".concat(beverage.getDescription(), ", ").concat(beverage.size, ", ").concat(beverage.cost()));
var latte = new steam_1.Steam(beverage);
console.log("".concat(latte.getDescription(), ", ").concat(latte.size, ", ").concat(latte.cost()));