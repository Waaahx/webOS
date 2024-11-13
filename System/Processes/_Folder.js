export class Folder {
    constructor(name, path) {
        this.name = name;
        this.date = new Date();
        this.path = path;
    }

    get() {
        return this;
    }

    rename(name) {
        this.name = name;
    }

    move(path) {
        this.path = path;
    }
}

export var __Folders__ = []; 
