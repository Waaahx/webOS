import { Command } from "../_Command.js";
import { Message } from "../_Display.js";

export const test = new Command((user, arg) => {
    const message = new Message("Test worked succesfully.");
    message.display();
});