import { Command } from "../_Command.js";
import { Message } from "../_Display.js";

export const clear = new Command((user, arg) => {
    const message = new Message(``).clear();
});