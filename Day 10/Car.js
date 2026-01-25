import { Vehical } from "./Vehical.js";

export class Car extends Vehical {
  constructor(model, widht, hegiht, capacity) {
    super(model, widht, hegiht);
    this.capacity = capacity;
  }

  display() {
    console.log("Hello from the Car");
  }
}



