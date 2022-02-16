import { Beverage } from "./beverage";
import { Size } from "./size";

export abstract class CondimentDecorator extends Beverage {

    beverage: Beverage

    constructor (beverage: Beverage) {
        super(beverage.size)
        this.beverage = beverage
    }

    public abstract getDescription(): string
}