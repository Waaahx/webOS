import { notfound } from '../Commands/notfound.js';
import { clear } from '../Commands/clear.js';
import { cd } from '../Commands/cd.js';
import { mkdir } from '../Commands/mkdir.js';
import { ls } from '../Commands/ls.js';
import { code } from '../Commands/code.js';
import { help } from '../Commands/help.js';
import { exec } from '../Commands/exec.js';
import { cat } from '../Commands/cat.js';
import { echo } from '../Commands/echo.js';
import { whoami } from '../Commands/whoami.js';

const commandMap = {
    clear: clear,
    cd: cd,
    mkdir: mkdir,
    ls: ls,
    code: code,
    help: help,
    exec: exec,
    cat: cat,
    echo: echo,
    whoami: whoami
};

export function RunCommand(user, output, command) {
    if (!command) return;

    const args = extractArgs(command);
    const cmdKey = command.split(" ")[0];
    const commandToRun = commandMap[cmdKey];
    output.printCommand(user, args.join(" "));
    if (commandToRun) {
        commandToRun.run(user, output, args);
    } else {
        notfound.run(user, output, args);
    }
    output.initPath(user, command);
}

function extractArgs(command) {
    const args = command.split(" ").filter(Boolean);

    if (args.length > 1) {
        return args.slice(0);
    } else {
        return [command];

    }
}