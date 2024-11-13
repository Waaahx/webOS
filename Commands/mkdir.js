import { Command } from "../_Command.js";
import { Folder, __Folders__ } from "../_Folder.js";
import { Message } from "../_Display.js";

export const mkdir = new Command((user, arg) => {
    if (arg.length < 2) {
        const message = new Message('Cannot create directory without a name.');
        message.display();
        return;
    }
    const folder = new Folder(arg[1], user.path);
    __Folders__.push(folder);
});