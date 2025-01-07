import { Command } from "../Processes/_Command.js";
import { _Files_ } from "../Browser/File.js";

export const exec = new Command((user, output, arg) => {
    if (arg[1] === '' || arg[1] === null) {
        output.print('You must specify a file to run.');
        return;
    }

    for (let i = 0; i < _Files_.length; i++) {
        if (_Files_[i].name === arg[1] && _Files_[i].path === user.path) {
            try {
                const logs = []; 
                const originalLog = console.log; 

                console.log = (...args) => {
                    logs.push(args.join(' '));
                };

                eval(_Files_[i].content);

                console.log = originalLog;

                if (logs.length > 0) {
                    logs.forEach((log, index) => output.print(`${log}`));
                }

            } catch (error) {
                output.print(`Error during execution: ${error.message}`);
            }
            return;
        }
    }

    output.print('File not found or you do not have access to it.');
});
