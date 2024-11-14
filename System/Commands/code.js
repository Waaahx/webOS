import { Command } from "../Processes/_Command.js";
import { File, __Files__ } from "../Processes/_File.js";
import { Print } from "../Processes/_Display.js";
import { Tab } from "../Browser/Tab.js";

export const code = new Command((user, arg) => {
    if (arg.length < 2) {
        const message = new Print('Cannot create file without a name.', user);
        message.display();
        return;
    }
    for (let i = 0; i < __Files__.length; i++) {
        if (__Files__[i].name === arg[1] && __Files__[i].path === user.path) {
            editFile(__Files__[i], user);
            return;
        }
    }
    const file = new File(arg[1], user.path);
    __Files__.push(file);
    editFile(file, user);
});


const editFile = (file, user) => {
    const tab = new Tab(file.name, "js");
    tab.display();
    console.log(file);
    user.setEditing(true);
    document.getElementById("historic").innerHTML = '';
    document.getElementById("input").value = file.content;
    document.getElementById("path").innerHTML = '';
    document.getElementById("input").addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            user.setEditing(false);
            file.write(document.getElementById("input").value);
            tab.rename(`${file.name} - saving...`);
            setTimeout(() => {
                document.getElementById("historic").innerHTML = '';
                document.getElementById("input").value = '';
                document.getElementById("path").innerHTML = `<span class="GREEN">${user.name}~${user.path}</span>`;
                tab.remove();
            }, 2000);
            return
        }
    });
    return;
}