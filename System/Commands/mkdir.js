import { Command } from "../Processes/_Command.js";
import { Folder, __Folders__ } from "../Processes/_Folder.js";

export const mkdir = new Command((user, output, arg) => {
    if (arg.length < 2) {
        output.print('Cannot create directory without a name.');
        return;
    }
    const folder = new Folder(arg[1], user.path);
    __Folders__.push(folder);
});