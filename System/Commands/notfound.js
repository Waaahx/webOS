import { Command } from "../Processes/_Command.js";

export const notfound = new Command((user, output, arg) => {
    if (arg[0] == '') {
        return;
    }
    output.print(`${arg.join(" ")} is not a valid command.`);
});