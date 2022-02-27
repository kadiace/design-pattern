import { ChicagoStyleCheesePizza } from "../pizza/ChicagoStylePizza";
import { Pizza } from "../pizza/pizza";
import { PizzaStore } from "./pizzaStore";

export class ChicagoPizzaStore extends PizzaStore {
  createPizza(item: String): Pizza {
    if (item === "cheese") return new ChicagoStyleCheesePizza();
    else return null;
  }
}
