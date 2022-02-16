import { Beverage } from "./beverage";
import { Size } from "./size";

export class HouseBlend extends Beverage {
    
    constructor (size) {
        super(size)
        this.description = "하우스 블렌드 커피"
    }

    public cost(): number {
        switch(this.size) {
            case Size.tall: {
                return 1.89
            }
            case Size.benti: {
                return 2.09
            }
            case Size.grande: {
                return 2.29
            }
        }
    }
}