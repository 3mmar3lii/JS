export class Vehical {
  constructor(model, widht, hegiht) {
    this.model = model;
    this.widht = widht;
    this.hegiht = hegiht;
  }

  display() {
    console.log("Hello from the Vehical");
  }

  toString() {
    return `Vehicle  - Model: ${this.model}`;
  }
}

