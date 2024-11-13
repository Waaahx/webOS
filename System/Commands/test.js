import { Command } from "../Processes/_Command.js";
import { Message } from "../Processes/_Display.js";

export const test = new Command((user, arg) => {
    const message = new Message("Test worked succesfully.");
    message.display();
});