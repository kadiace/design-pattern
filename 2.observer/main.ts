
import CurrentConditionDisplay from "./currentConditionDisplay"
import WeatherData from "./weatherData"


console.log('hello world')

const weatherData: WeatherData = new WeatherData()
const currentDisplay: CurrentConditionDisplay = new CurrentConditionDisplay(weatherData)

weatherData.setMeasurements(15, 40, 30)