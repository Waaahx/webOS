import { RunCommand } from "./_CommandHandler.js";
import { User } from "./_User.js";

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    const user = new User("Admin", "root", true, true, true, true);
    inputField.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            RunCommand(user, inputField.value);
        }
    });
});