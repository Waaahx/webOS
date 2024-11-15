import { Command } from "../Processes/_Command.js";
import { System_Tab } from "../Browser/Tab.js";
import { _Files_, System_File } from "../Browser/File.js";

export const echo = new Command((user, output, arg) => {
    output.print(arg.slice(1).join(" "));
});


