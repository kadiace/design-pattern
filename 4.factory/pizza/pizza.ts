export abstract class Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: string[] = [];

  abstract prepare(): void;

  bake() {
    console.log("Bake for 25 minutes at 350");
  }

  cut() {
    console.log("Cutting the pizza into diagonal slices");
  }

  box() {
    console.log("Place pizza in official PizzaStore box");
  }

  getName(): string {
    return this.name;
  }
}
