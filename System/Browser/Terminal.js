import { RunCommand } from "../Handler/_CommandHandler.js";

export class System_Terminal {
    static id = 0;
    static output = document.getElementById("output");

    constructor() {
        this.id = ++System_Terminal.id;
        this.historic = "";
    }

    get() {
        return this;
    }

    display(user) {
        const historicDiv = this.createHistoricSection();
        const inputSectionDiv = this.createInputSection(user);

        System_Terminal.output.appendChild(historicDiv);
        System_Terminal.output.appendChild(inputSectionDiv);
    }

    setHistoric(historic) {
        this.historic = historic;
    }
    getHistoric() {
        return this.historic;
    }
    clear(user) {
        System_Terminal.output.innerHTML = "";
        this.display(user);
    }
    
    print(text) {
        const historic = document.getElementById("historic");
        if (historic) {
            const line = document.createElement("p");
            line.textContent = text;
            historic.appendChild(line);
        }
    }
    printCommand(user, command) {
        const historic = document.getElementById("historic");
        if (historic) {
            const line = document.createElement("p");
            line.innerHTML = "<span class='GREEN'>" + user.name + "~" + user.path + "</span> " + command;
            historic.appendChild(line);
        }
    }
    initPath(user) {
        const path = document.getElementById("path");
        if (path) {
            path.innerHTML = "<span class='GREEN'>" + user.name + "~" + user.path + "</span> ";
        }
    }
    save() {
        const historic = document.getElementById("historic");
        if (historic) {
            this.historic = historic.innerHTML;
        }
    }

    createHistoricSection() {
        const historicDiv = document.createElement("div");
        historicDiv.id = "historic";
        historicDiv.innerHTML = this.historic;
        return historicDiv;
    }

    createInputSection(user) {
        const inputSectionDiv = document.createElement("div");
        inputSectionDiv.id = "input_section";

        const pathLabel = this.createPathLabel();
        const inputField = this.createInputField(user);

        inputSectionDiv.appendChild(pathLabel);
        inputSectionDiv.appendChild(inputField);

        return inputSectionDiv;
    }

    createPathLabel() {
        const pathLabel = document.createElement("label");
        pathLabel.id = "path";
        pathLabel.htmlFor = "input";
        pathLabel.className = "GREEN";
        return pathLabel;
    }

    createInputField(user) {
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.id = "input";
        inputField.name = "input";

        inputField.addEventListener("keydown", (event) => {
            if (event.key === "Enter" && !user.editing) {
                RunCommand(user, this, inputField.value);
                inputField.value = "";
            }
        });

        return inputField;
    }
}
