import { ChicagoPizzaStore } from "./store/chicagoPizzaStore";
import { NYPizzaStore } from "./store/nyPizzaStore";

const nyStore = new NYPizzaStore();
const chicagoStore = new ChicagoPizzaStore();

const pizza1 = nyStore.orderPizza("cheese");
console.log(`Mary ordered a ${pizza1.getName()}\n`);

const pizza2 = chicagoStore.orderPizza("cheese");
console.log(`Woodie orderd a ${pizza2.getName()}`);
