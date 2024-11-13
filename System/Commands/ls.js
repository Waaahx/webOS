import { Command } from "../Processes/_Command.js";
import { Message } from "../Processes/_Display.js";
import { Folder, __Folders__ } from "../Processes/_Folder.js";

export const ls = new Command((user, args) => {
    let _path = user.path;
    if (args.length > 2 && args != null) {
        _path = args[1];
    }
    for (let i = 0; i < __Folders__.length; i++) {
        if (__Folders__[i].path === _path) {
            const message = new Message(`${__Folders__[i].name}/`);
            message.display();
        }
    }
});