import { Beverage } from "./beverage";
import { CondimentDecorator } from "./condiment";
import { Size } from "./size";

export class Steam extends CondimentDecorator {
    beverage: Beverage

    public getDescription(): string {
        return this.beverage.getDescription() + " 스팀우유"
    }

    public cost(): number {
        switch(this.size) {
            case Size.tall: {
                return 0.2 + this.beverage.cost()
            }
            case Size.benti: {
                return 0.25 + this.beverage.cost()
            }
            case Size.grande: {
                return 0.3 + this.beverage.cost()
            }
        }
    }
}