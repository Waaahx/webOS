import { Command } from "../Processes/_Command.js";
import { Print } from "../Processes/_Display.js";

export const notfound = new Command((user, arg) => {
    if (arg[0] == '') {
        return;
    }
    const message = new Print(`${arg} is not a valid command.`, user);
    message.display();
});