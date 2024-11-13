export class User {
    constructor(name, password, parent, read, write, execute, owner) {
        this.name = name;
        this.password = password;
        this.parent = parent;
        this.permisisonsRead = read;
        this.permisisonsWrite = write;
        this.permisisonsExecute = execute;
        this.permisisonsOwner = owner;
        this.path = "/"
    }

    get() {
        return this;
    }

    move(path) {
        this.path = path;
    }

    rename(name) {
        this.name = name;
    }
    
}

export var __Users__ = []; 
