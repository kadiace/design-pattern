"use strict";
exports.__esModule = true;
var currentConditionDisplay_1 = require("./currentConditionDisplay");
var weatherData_1 = require("./weatherData");
console.log('hello world');
var weatherData = new weatherData_1["default"]();
var currentDisplay = new currentConditionDisplay_1["default"](weatherData);
weatherData.setMeasurements(15, 40, 30);
