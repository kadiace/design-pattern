import { NYStyleCheesPizza } from "../pizza/nyStylePizza";
import { Pizza } from "../pizza/pizza";
import { PizzaStore } from "./pizzaStore";

export class NYPizzaStore extends PizzaStore {
  createPizza(item: String): Pizza {
    if (item === "cheese") return new NYStyleCheesPizza();
    else return null;
  }
}
