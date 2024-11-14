export class Print {

    static id = 0;

    constructor(text, user) {
        this.id = ++Print.id;
        this.author = user;
        this.text = text;
    }
    
    remove() {
        document.getElementById(`message-${this.id}`).remove();
    }

    update(text) {
        this.text = text;
        this.display();
    }
    
    display() {
        INPUT.value = '';
        HISTORIC.innerHTML += `<p>${this.text}</p>`

    }

    displayDone() {
        INPUT.value = '';
        HISTORIC.innerHTML += `<p><span class="GREEN">${this.author.name}~${this.author.path}</span> ${this.text}</p>`
        PATH.innerHTML = `${this.author.name}~${this.author.path}$`;
    }
}

const HISTORIC = document.getElementById("historic");
const INPUT = document.getElementById("input");
const PATH = document.getElementById("path");