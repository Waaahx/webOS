import { Command } from "../Processes/_Command.js";
import { _Files_ } from "../Browser/File.js";

export const whoami = new Command((user, output, arg) => {
    output.print(user.name);
});