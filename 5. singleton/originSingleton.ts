export class OriginSingleton {
  private static uniqueInstance: OriginSingleton;

  private constructor() {}

  static getInstance(): OriginSingleton {
    if (this.uniqueInstance === null) {
      this.uniqueInstance = new OriginSingleton();
    }
    return this.uniqueInstance;
  }
}
