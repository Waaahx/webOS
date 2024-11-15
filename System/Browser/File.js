export class System_File {
    
    static id = 0;
    static output = document.getElementById("output");

    constructor(name, user) {
        this.id = ++System_File.id;
        this.name = name;
        this.content = ""
        this.path = user.path;
        this.date = new Date();
        this.author = user;
    }

    get() {
        return this;
    }

    display(user, tab, output) {
        this.clear(user, tab);
        const content = this.createArea(user, tab, output);
        System_File.output.appendChild(content);
    }

    clear() {
        System_File.output.innerHTML = "";
    }

    write(content) {
        this.content = content;
    }

    createArea(user, tab, output) {
        const content = document.createElement("textarea");
        content.value = this.content;
        content.setAttribute("spellcheck", "false");

        content.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                user.setEditing(false);
                this.write(content.value);
                tab.rename(`${this.name} - saving...`);
                setTimeout(() => {
                    tab.remove();
                    this.clear();
                    output.display(user);
                    output.initPath(user);
                }, 2000);
                return
            }
        });
        return content;
    }

}

export const _Files_ = [];