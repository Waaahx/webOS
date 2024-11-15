import { Command } from "../Processes/_Command.js";

export const help = new Command((user, output, arg) => {
    output.print(`cd - to move in your folders`);
    output.print(`clear - to clear terminal`);
    output.print(`code - to create new JS file`);
    output.print(`ls - to display file`);
    output.print(`mkdir - to create directory`);
    output.print(`inject - to inject JS into another`);
    output.print(`exec - to exec a prog`);
});