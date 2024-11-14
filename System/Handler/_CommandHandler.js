import { notfound } from '../Commands/notfound.js';
import { clear } from '../Commands/clear.js';
import { cd } from '../Commands/cd.js';
import { mkdir } from '../Commands/mkdir.js';
import { ls } from '../Commands/ls.js';
import { code } from '../Commands/code.js';
import { help } from '../Commands/help.js';

const commandMap = {
    clear: clear,
    cd: cd,
    mkdir: mkdir,
    ls: ls,
    code: code,
    help: help
};

export function RunCommand(user, command) {
    if (!command) return;

    const args = extractArgs(command);
    const cmdKey = command.split(" ")[0];
    const commandToRun = commandMap[cmdKey];

    if (commandToRun) {
        commandToRun.run(user, args);
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