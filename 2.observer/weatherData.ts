import { Observer, Subject } from "./interface"

export default class WeatherData implements Subject {
    observers: Observer[]
    temperature: number
    humidity: number
    pressure: number

    constructor() {
        this.observers = []
        this.temperature = 4
        this.humidity = 20
        this.pressure = 100
    }
    registerObserver(o: Observer): void {
        this.observers.push(o)
    }
    removeObserver(o: Observer): void {
        this.observers = this.observers.filter((element) => element !== o)
    }
    notifyObservers(): void {
        console.log(this.observers)
        this.observers.forEach((observer) => {
                observer.update(this.temperature, this.humidity, this.pressure)
        })
    }
    measurementsChanged() {
        this.notifyObservers()
    }
    setMeasurements(temperature: number, humidity: number, pressure: number) {
        this.temperature = temperature
        this.humidity = humidity
        this.pressure = pressure
        this.measurementsChanged()
    }
}