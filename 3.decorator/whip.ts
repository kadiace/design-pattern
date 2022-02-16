import { Beverage } from "./beverage";
import { CondimentDecorator } from "./condiment";
import { Size } from "./size";

export class Whip extends CondimentDecorator {
    beverage: Beverage

    public getDescription(): string {
        return this.beverage.getDescription() + " 휘핑크림"
    }

    public cost(): number {
        switch(this.size) {
            case Size.tall: {
                return 0.15 + this.beverage.cost()
            }
            case Size.benti: {
                return 0.2 + this.beverage.cost()
            }
            case Size.grande: {
                return 0.25 + this.beverage.cost()
            }
        }
    }
}