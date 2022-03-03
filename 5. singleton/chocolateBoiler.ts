export class ChocolateBoiler {
  private empty: boolean;
  private boiled: boolean;
  private instance: ChocolateBoiler = new ChocolateBoiler();

  private constructor() {
    this.empty = true;
    this.boiled = false;
  }

  public getInstance() {
    return this.instance;
  }
}
