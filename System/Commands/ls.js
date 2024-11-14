import { Command } from "../Processes/_Command.js";
import { Print } from "../Processes/_Display.js";
import { Folder, __Folders__ } from "../Processes/_Folder.js";
import { File, __Files__ } from "../Processes/_File.js";

export const ls = new Command((user, args) => {
    let _path = user.path;
    if (args.length > 2 && args != null) {
        _path = args[1];
    }
    for (let i = 0; i < __Folders__.length; i++) {
        if (__Folders__[i].path === _path) {
            const message = new Print(`${__Folders__[i].name}/`, user);
            message.display();
        }
    }
    for (let i = 0; i < __Files__.length; i++) {
        if (__Files__[i].path === _path) {
            const message = new Print(`${__Files__[i].name}`, user);
            message.display();
        }
    }
});