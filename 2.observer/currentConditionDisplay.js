"use strict";
exports.__esModule = true;
var CurrentConditionDisplay = /** @class */ (function () {
    function CurrentConditionDisplay(weatherData) {
        this.temperature = 2;
        this.humidity = 2;
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }
    CurrentConditionDisplay.prototype.update = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    };
    CurrentConditionDisplay.prototype.display = function () {
        console.log("Current conditions: ".concat(this.temperature, "C degrees and ").concat(this.humidity, "% humidity"));
    };
    return CurrentConditionDisplay;
}());
exports["default"] = CurrentConditionDisplay;
