import { Command } from "../Processes/_Command.js";
import { Print } from "../Processes/_Display.js";

export const help = new Command((user, arg) => {
    const line1 = new Print(`cd - to move in your folders`, user);
    const line2 = new Print(`clear - to clear terminal`, user);
    const line3 = new Print(`code - to create new JS file`, user);
    const line4 = new Print(`ls - to display file`, user);
    const line5 = new Print(`mkdir - to create directory`, user);
    const line6 = new Print(`inject - to inject JS into another`, user);
    const line7 = new Print(`js - to run a JS prog`, user);
    line1.display();
    line2.display();
    line3.display();
    line4.display();
    line5.display();
    line6.display();
    line7.display();
});