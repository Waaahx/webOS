import { Command } from "../Processes/_Command.js";
import { _Files_ } from "../Browser/File.js";

export const cat = new Command((user, output, arg) => {
    if (arg.length < 2) {
        output.print('Cannot cat file without a name.');
        return;
    }
    for (let i = 0; i < _Files_.length; i++) {
        if (_Files_[i].name === arg[1] && _Files_[i].path === user.path) {
            output.print(_Files_[i].content);
            return;
        }
    }

});