import { Command } from "../Processes/_Command.js";
import { Print } from "../Processes/_Display.js";

export const clear = new Command((user, arg) => {
    document.getElementById("historic").innerHTML = '';
});