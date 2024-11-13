import { Command } from "../Processes/_Command.js";

export const cd = new Command((user, args) => {
    if (args.length < 2 || args == null) {
        return;
    }
    user.move(args[1]);
});
