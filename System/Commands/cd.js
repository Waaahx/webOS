import { Command } from "../Processes/_Command.js";
import { __Folders__ } from "../Processes/_Folder.js";

export const cd = new Command((user, args) => {
    const argument = args[1]
    if (noArgs(args)) { return; }
    if (isRoot(user.path) && isBackOriented(argument)) { return; }
    if (isBackOriented(argument)) {
        let count = countBackOriented(argument);
        let path = user.path.split("/");
        path.splice(path.length - count, count);
        move(user, path.join("/"));
        return;
    }
    if (isRoot(argument)) {
        move(user, "/");
        return; 
    }
    for (let i = 0; i < __Folders__.length; i++) {
        if (__Folders__[i].name === argument) {
            if ((__Folders__[i].path + argument) == (user.path + argument)) {
                if (isRoot(user.path)) {
                    move(user, user.path + argument);
                } else {
                    move(user, user.path + "/" + argument);
                }
            }
        }
    }
});

function move(user, path) {
    user.move(path);
    document.getElementById("path").innerHTML = `${user.name}~${user.path}$`;
}

function isRoot(path) {
    return path === "/";
}

function isBackOriented(path) {
    return path.startsWith("..");
}

function noArgs(args) {
    return args.length < 1 || args == null || Array.isArray(args) == false;
}

function countBackOriented(path) {
    return path.split("..").length - 1;
}