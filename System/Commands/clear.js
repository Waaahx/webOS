import { Command } from "../Processes/_Command.js";

export const clear = new Command((user, output, arg) => {
    output.clear(user);
});