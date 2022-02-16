import { DisplayElement, Observer, Subject } from "./interface"


export default class CurrentConditionDisplay implements Observer, DisplayElement {
    temperature: number
    humidity: number
    weatherData: Subject

    constructor(weatherData: Subject) {
        this.temperature = 2
        this.humidity = 2
        this.weatherData = weatherData
        this.weatherData.registerObserver(this);
    }

    update(temperature: number, humidity: number, pressure: number) {
        this.temperature = temperature
        this.humidity = humidity
        this.display()
    }

    display(): void {
        console.log(`Current conditions: ${this.temperature}C degrees and ${this.humidity}% humidity`)
    }

}