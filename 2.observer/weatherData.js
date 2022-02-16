"use strict";
exports.__esModule = true;
var WeatherData = /** @class */ (function () {
    function WeatherData() {
        this.observers = [];
        this.temperature = 4;
        this.humidity = 20;
        this.pressure = 100;
    }
    WeatherData.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherData.prototype.removeObserver = function (o) {
        this.observers = this.observers.filter(function (element) { return element !== o; });
    };
    WeatherData.prototype.notifyObservers = function () {
        var _this = this;
        console.log(this.observers);
        this.observers.forEach(function (observer) {
            observer.update(_this.temperature, _this.humidity, _this.pressure);
        });
    };
    WeatherData.prototype.measurementsChanged = function () {
        this.notifyObservers();
    };
    WeatherData.prototype.setMeasurements = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    };
    return WeatherData;
}());
exports["default"] = WeatherData;
