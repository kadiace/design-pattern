import { Beverage } from "./beverage";
import { CondimentDecorator } from "./condiment";
import { Size } from "./size";

export class Soy extends CondimentDecorator {
    beverage: Beverage

    public getDescription(): string {
        return this.beverage.getDescription() + " 두유"
    }

    public cost(): number {
        switch(this.size) {
            case Size.tall: {
                return 0.25 + this.beverage.cost()
            }
            case Size.benti: {
                return 0.3 + this.beverage.cost()
            }
            case Size.grande: {
                return 0.35 + this.beverage.cost()
            }
        }
    }
}