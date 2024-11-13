import { RunCommand } from "./System/Handler/_CommandHandler.js";
import { User, __Users__ } from "./System/Processes/_User.js";

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    const user = new User("VOID", "VOID", false, false, false, false);
    inputField.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            RunCommand(user, inputField.value);
        }
    });
});