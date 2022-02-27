import { Pizza } from "./pizza";

export class ChicagoStyleCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = "Chicago Style Sauce and Cheese Pizza";
    this.dough = "Extra Thick Crust Dough";
    this.sauce = "Plum Sauce";
    this.toppings.push("Shredded Mozzarella Cheese");
  }
  prepare(): void {}
  cut() {
    console.log("Cutting the pizza into square slices");
  }
}
