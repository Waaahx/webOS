export class Command {
    constructor(method) {
        this.method = method;
    }

    run(user, output, args) {

        let command = args.join(" ");

        this.method(user, output, args);
    }

    get() {
        return this;
    }
}

