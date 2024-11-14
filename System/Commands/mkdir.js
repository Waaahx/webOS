import { Command } from "../Processes/_Command.js";
import { Folder, __Folders__ } from "../Processes/_Folder.js";
import { Print } from "../Processes/_Display.js";

export const mkdir = new Command((user, arg) => {
    if (arg.length < 2) {
        const message = new Print('Cannot create directory without a name.', user);
        message.display();
        return;
    }
    const folder = new Folder(arg[1], user.path);
    __Folders__.push(folder);
});