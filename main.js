import { RunCommand } from "./System/Handler/_CommandHandler.js";
import { User, __Users__ } from "./System/Processes/_User.js";
import { Tab } from "./System/Browser/Tab.js";

const INPUT = document.getElementById("input");

document.addEventListener("DOMContentLoaded", () => {
    const user = new User("Admin", "ROOT", true, true, true, true);
    const init_tab = new Tab("Terminal", "cmd");
    init_tab.display();
        INPUT.addEventListener("keydown", (event) => {
            if (event.key === "Enter" && !user.editing) {
                RunCommand(user, INPUT.value);
            }
        });
});