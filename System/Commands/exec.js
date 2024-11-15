import { Command } from "../Processes/_Command.js";
import { _Files_ } from "../Browser/File.js";

export const exec = new Command((user, output, arg) => {
    if (arg[1] == '' || arg[1] == null) {
        output.print('You must specify a file to run.');
        return;
    }
    for (let i = 0; i < _Files_.length; i++) {
        if (_Files_[i].name === arg[1] && _Files_[i].path === user.path) {
            eval(_Files_[i].content);
            return;
        }
    }
});