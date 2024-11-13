import { CommandMessage } from "./_Display.js";

export class Command {
    constructor(method) {
        this.method = method;
    }

    run(user, args) {
        let command = args;
        if (args != null && args.length > 1 && Array.isArray(args)) {
            command = args.join(" ");
        }
        const message = new CommandMessage(`${command}`, user.name, user.path);
        message.display();
        this.method(user, args);
    }
    
    get() {
        return this;
    }
}

