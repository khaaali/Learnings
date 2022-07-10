class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter((f) => {
            return f !== fn;
        })
    }

    notifyAll(value) {
        this.observers.forEach((observer) => {
            observer(value);
        })
    }
}

export default new Observable();