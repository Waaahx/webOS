import { Command } from "../Processes/_Command.js";
import { Folder, __Folders__ } from "../Processes/_Folder.js";
import { _Files_ } from "../Browser/File.js";

export const ls = new Command((user, output, args) => {
    let _path = user.path;
    if (args.length > 2 && args != null) {
        _path = args[1];
    }
    for (let i = 0; i < __Folders__.length; i++) {
        if (__Folders__[i].path === _path) {
            output.print(`${__Folders__[i].name}/`);
        }
    }
    for (let i = 0; i < _Files_.length; i++) {
        if (_Files_[i].path === _path) {
           output.print(`${_Files_[i].name}`);
        }
    }
});