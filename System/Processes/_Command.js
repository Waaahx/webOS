import { Print } from "./_Display.js";

export class Command {
    constructor(method) {
        this.method = method;
    }

    run(user, args) {

        let command = args.join(" ");

        const message = new Print(`${command}`, user);
        message.displayDone();
        this.method(user, args);
    }

    get() {
        return this;
    }
}

