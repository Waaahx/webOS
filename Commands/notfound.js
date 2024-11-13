import { Command } from "../_Command.js";
import { Message } from "../_Display.js";

export const notfound = new Command((user, arg) => {
    const message = new Message(`${arg} is not a valid command.`);
    message.display();
});