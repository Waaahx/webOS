import { Command } from "../Processes/_Command.js";
import { System_Tab } from "../Browser/Tab.js";
import { _Files_, System_File } from "../Browser/File.js";

export const code = new Command((user, output, arg) => {
    if (arg.length < 2) {
        output.print('Cannot create file without a name.');
        return;
    }
    output.save();
    for (let i = 0; i < _Files_.length; i++) {
        if (_Files_[i].name === arg[1] && _Files_[i].path === user.path) {
            editFile(_Files_[i], user, output);
            return;
        }
    }
    const file = new System_File(arg[1], user);
    _Files_.push(file);
    editFile(file, user, output);
});


const editFile = (file, user, output) => {
    const tab = new System_Tab(file.name, "js");
    tab.display();
    file.display(user, tab, output)
    user.setEditing(true);
    return;
}