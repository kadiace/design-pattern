import { Beverage } from "./beverage";
import { CondimentDecorator } from "./condiment";

export class Mocha extends CondimentDecorator {
    beverage: Beverage

    public getDescription(): string {
        return this.beverage.getDescription() + " 모카"
    }

    public cost(): number {
        return 0.2 + this.beverage.cost()
    }
}