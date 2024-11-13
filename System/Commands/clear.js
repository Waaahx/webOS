import { Command } from "../Processes/_Command.js";
import { Message } from "../Processes/_Display.js";

export const clear = new Command((user, arg) => {
    const message = new Message(``).clear();
});