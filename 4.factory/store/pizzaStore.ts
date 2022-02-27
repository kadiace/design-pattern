import { Pizza } from "../pizza/pizza";

export abstract class PizzaStore {
  orderPizza(type: String): Pizza {
    let pizza: Pizza;

    pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
  protected abstract createPizza(type: String): Pizza;
}
