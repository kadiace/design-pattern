import { Size } from "./size"

export class Beverage {

    description: String
    size: Size

    constructor(size: Size) {
        this.size = size
    }

    public getDescription() {
        return this.description
    }

    public cost(): number {
        return 0
    }
}