export class CommandMessage {
    constructor(text, author, path) {
        this.author = author;
        this.path = path;
        this.message = text;
    }

    display() {
        document.getElementById("historic").innerHTML += `<p><span class="path">${this.author}:~${this.path}$</span> ${this.message}</p>`;
        document.getElementById("input").value = ``;
    }
}

export class Message {
    constructor(text, author, path) {
        this.author = author;
        this.path = path;
        this.message = text;
    }

    display() {
        document.getElementById("historic").innerHTML += `<p>${this.message}</p>`;
    }

    clear() {
        document.getElementById("historic").innerHTML = ``;
    }
}