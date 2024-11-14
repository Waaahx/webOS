export class Tab {

    static id = 0;

    constructor(name, extension) {
        this.id = ++Tab.id;
        this.name = name;
        this.extension = extension;
        this.historic = ""
    }

    get() {
        return this;
    }

    display() {
        let tab = document.createElement("div");
        tab.id = `tab-${this.id}`;
        tab.classList.add("tab");
        tab.classList.add(`ext-${this.extension}`);
        tab.innerHTML = `<span>${this.name}</span>`;
        document.getElementById("tabs").appendChild(tab);
    }

    rename(name) {
        this.name = name;
        document.getElementById(`tab-${this.id}`).innerHTML = `<span>${name}</span>`;
    }

    setExtension(extension) {
        this.extension = extension;
    }

    setHistoric(historic) {
        this.historic = historic;
    }

    remove() {
        document.getElementById(`tab-${this.id}`).remove();
    }




}