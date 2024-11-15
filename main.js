import { User, __Users__ } from "./System/Processes/_User.js";
import { System_Tab } from "./System/Browser/Tab.js";
import { System_Terminal } from "./System/Browser/Terminal.js";


document.addEventListener("DOMContentLoaded", () => {
    const user = new User("Admin", "ROOT", true, true, true, true);
    const init_tab = new System_Tab("Terminal", "cmd");
    const init_terminal = new System_Terminal();
    init_terminal.display(user);
    init_terminal.initPath(user);
    init_tab.display();
});