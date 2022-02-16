import { Beverage } from "./beverage";
import { Size } from "./size";

export class Espresso extends Beverage {

    constructor (size) {
        super(size)
        this.description = "에스프레소"
    }

    public cost(): number {
        switch(this.size) {
            case Size.tall: {
                return 1.99
            }
            case Size.benti: {
                return 2.19
            }
            case Size.grande: {
                return 2.39
            }
        }
    }
}