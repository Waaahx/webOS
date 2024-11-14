export class File {
    constructor(name, path, user) {
        this.name = name;
        this.date = new Date();
        this.path = path;
        this.content = "";
        this.permissions = "000";
        this.author = user;
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

    write(content) {
        console.log(content);
        this.content = content;
    }

    read() {
        return this.content;
    }

    setPermissions(permissions) {
        this.permissions = permissions;
    }

    transfer(author) {
        this.author = author;
    }


}

export var __Files__ = [];
