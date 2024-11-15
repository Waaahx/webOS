export class Command {
    constructor(method) {
        this.method = method;
    }

    run(user, output, args) {
        this.method(user, output, args);
    }

    get() {
        return this;
    }
}

