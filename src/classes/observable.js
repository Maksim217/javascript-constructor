export class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(func) {
    this.observers.push(func);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}
