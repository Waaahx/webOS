import {test} from '../Commands/test.js'
import { notfound } from '../Commands/notfound.js';
import { clear } from '../Commands/clear.js';
import { cd } from '../Commands/cd.js';
import { mkdir } from '../Commands/mkdir.js';
import { ls } from '../Commands/ls.js';

export function RunCommand(user, command) {
    let args = extractArgs(command);
    if (command == null) {
        return
    } else if (command.startsWith("test")) {
        test.run(user, args);
    } else if (command.startsWith("clear")) {
        clear.run(user, args);
    } else if (command.startsWith("cd")) {
        cd.run(user, args);
    } else if (command.startsWith("mkdir")) {
        mkdir.run(user, args);
    } else if (command.startsWith("ls")) {
        ls.run(user, args);
    } else {
        notfound.run(user, args);
    }
}

function extractArgs(command) {
    const args = command.split(" ").filter(Boolean);

    if (args.length > 1) {
        return args.slice(0); 
    } else {
        return [command]; 
    }
}