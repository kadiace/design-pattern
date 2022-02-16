import { Beverage } from "./beverage"
import { Espresso } from "./espresso"
import { Size } from "./size"
import { Steam } from "./steam"

console.log("hello star buzz!")

const beverage: Beverage = new Espresso(Size.tall)
console.log(`${beverage.getDescription()}, ${beverage.size}, ${beverage.cost()}`)

const latte: Steam = new Steam(beverage)
console.log(`${latte.getDescription()}, ${latte.size}, ${latte.cost()}`)

