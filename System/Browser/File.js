import { applySyntaxHighlighting } from "../Code/JS/color_syntaxe.js";

export class System_File {
    static id = 0;
    static output = document.getElementById("output");

    constructor(name, user) {
        this.id = ++System_File.id;
        this.name = name;
        this.content = "";
        this.path = user.path;
        this.date = new Date();
        this.author = user;
    }

    get() {
        return this;
    }

    display(user, tab, output) {
        this.clear(user, tab);
        const content = this.createEditor(user, tab, output);
        System_File.output.appendChild(content);
    }

    clear() {
        System_File.output.innerHTML = "";
    }

    write(content) {
        this.content = content;
    }

    createEditor(user, tab, output) {
        const editorContainer = document.createElement("div");
        editorContainer.classList.add("editor-container");

        const syntaxHighlighter = document.createElement("div");
        syntaxHighlighter.classList.add("syntax-highlighter");

        const contentArea = document.createElement("textarea");
        contentArea.classList.add("content-area");
        contentArea.value = this.content;
        contentArea.setAttribute("spellcheck", "false");

        const autocompleteContainer = document.createElement("div");
        autocompleteContainer.classList.add("autocomplete-container");

        const updateHighlighting = () => {
            syntaxHighlighter.innerHTML = applySyntaxHighlighting(contentArea.value);
        };

        const extractUserDefinitions = (content) => {
            const userDefinitions = [];
            const variableRegex = /\b(const|let|var)\s+(\w+)/g;
            const functionRegex = /\bfunction\s+(\w+)/g;
            const classRegex = /\bclass\s+(\w+)/g;
        
            let match;
            while ((match = variableRegex.exec(content)) !== null) {
                userDefinitions.push({ word: match[2], type: "Variable" });
            }
            while ((match = functionRegex.exec(content)) !== null) {
                userDefinitions.push({ word: match[1], type: "Function" });
            }
            while ((match = classRegex.exec(content)) !== null) {
                userDefinitions.push({ word: match[1], type: "Class" });
            }
        
            return userDefinitions;
        };
        

        const suggestions = [
            // Keywords
            "break", "case", "catch", "class", "const", "continue", "debugger", "default",
            "delete", "do", "else", "export", "extends", "finally", "for", "function",
            "if", "import", "in", "instanceof", "let", "new", "return", "super",
            "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "yield",
        
            // Global Objects
            "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean",
            "DataView", "Date", "Error", "EvalError", "Float32Array", "Float64Array", "Function",
            "Generator", "GeneratorFunction", "Infinity", "Int16Array", "Int32Array", "Int8Array",
            "Intl", "JSON", "Map", "Math", "NaN", "Number", "Object", "Promise", "Proxy",
            "RangeError", "ReferenceError", "Reflect", "RegExp", "Set", "SharedArrayBuffer",
            "String", "Symbol", "SyntaxError", "TypeError", "URIError", "Uint16Array",
            "Uint32Array", "Uint8Array", "Uint8ClampedArray", "WeakMap", "WeakSet", "WebAssembly",
        
            // Global Functions
            "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent",
            "encodeURI", "encodeURIComponent", "escape", "unescape",
        
            // Math Methods
            "abs", "acos", "acosh", "asin", "asinh", "atan", "atan2", "atanh", "cbrt",
            "ceil", "clz32", "cos", "cosh", "exp", "expm1", "floor", "fround", "hypot",
            "imul", "log", "log10", "log1p", "log2", "max", "min", "pow", "random",
            "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc",
        
            // String Methods
            "charAt", "charCodeAt", "concat", "endsWith", "fromCharCode", "includes", "indexOf",
            "lastIndexOf", "localeCompare", "match", "matchAll", "normalize", "padEnd", "padStart",
            "repeat", "replace", "replaceAll", "search", "slice", "split", "startsWith",
            "substr", "substring", "toLocaleLowerCase", "toLocaleUpperCase", "toLowerCase",
            "toString", "toUpperCase", "trim", "trimEnd", "trimStart", "valueOf",
        
            // Array Methods
            "at", "concat", "copyWithin", "entries", "every", "fill", "filter", "find",
            "findIndex", "flat", "flatMap", "forEach", "includes", "indexOf", "join",
            "keys", "lastIndexOf", "map", "pop", "push", "reduce", "reduceRight", "reverse",
            "shift", "slice", "some", "sort", "splice", "toLocaleString", "toString",
            "unshift", "values",
        
            // JSON Methods
            "parse", "stringify",
        
            // Promise Methods
            "all", "allSettled", "any", "race", "reject", "resolve",
        
            // Object Methods
            "assign", "create", "defineProperties", "defineProperty", "entries", "freeze",
            "fromEntries", "getOwnPropertyDescriptor", "getOwnPropertyDescriptors",
            "getOwnPropertyNames", "getOwnPropertySymbols", "getPrototypeOf", "is",
            "isExtensible", "isFrozen", "isSealed", "keys", "preventExtensions",
            "seal", "setPrototypeOf", "values",
        
            // Console Methods
            "assert", "clear", "count", "countReset", "debug", "dir", "dirxml", "error",
            "group", "groupCollapsed", "groupEnd", "info", "log", "table", "time",
            "timeEnd", "timeLog", "trace", "warn",
        
            // DOM Methods (Commonly Used)
            "addEventListener", "appendChild", "attachShadow", "blur", "click", "cloneNode",
            "closest", "contains", "createElement", "dispatchEvent", "focus", "getAttribute",
            "getElementById", "getElementsByClassName", "getElementsByTagName", "hasAttribute",
            "insertAdjacentElement", "insertAdjacentHTML", "insertAdjacentText", "remove",
            "removeAttribute", "removeChild", "replaceChild", "setAttribute",
            "querySelector", "querySelectorAll",
        
            // Web APIs
            "fetch", "XMLHttpRequest", "localStorage", "sessionStorage", "setTimeout",
            "setInterval", "clearTimeout", "clearInterval", "requestAnimationFrame",
            "cancelAnimationFrame", "alert", "confirm", "prompt", "Navigator", "Window",
            "Document", "Event", "History", "Location"
        ];
        
        const updateAutocomplete = () => {
            const cursorPos = contentArea.selectionStart;
            const textUpToCursor = contentArea.value.substring(0, cursorPos);
            const match = /\b(\w+)$/.exec(textUpToCursor);
        
            if (match) {
                const keyword = match[1];
                const userDefinedSuggestions = extractUserDefinitions(contentArea.value); // Extraire les définitions utilisateur
                const allSuggestions = [
                    ...suggestions.map(word => ({ word, type: "Built-in" })),
                    ...userDefinedSuggestions,
                ];
        
                const matchedSuggestions = allSuggestions.filter(s => s.word.startsWith(keyword));
        
                if (matchedSuggestions.length > 0) {
                    autocompleteContainer.innerHTML = "";
                    matchedSuggestions.forEach(({ word, type }) => {
                        const item = document.createElement("div");
                        item.classList.add("autocomplete-item");
        
                        const label = document.createElement("span");
                        label.textContent = word;
                        label.classList.add("autocomplete-word");
        
                        const source = document.createElement("span");
                        source.textContent = ` (${type})`;
                        source.classList.add("autocomplete-source");
        
                        item.appendChild(label);
                        item.appendChild(source);
        
                        item.addEventListener("mousedown", () => {
                            const beforeCursor = textUpToCursor.slice(0, -keyword.length);
                            contentArea.value = beforeCursor + word + contentArea.value.substring(cursorPos);
                            contentArea.selectionStart = contentArea.selectionEnd = beforeCursor.length + word.length;
                            updateHighlighting();
                            autocompleteContainer.style.display = "none";
                        });
        
                        autocompleteContainer.appendChild(item);
                    });
        
                    const { left, top } = contentArea.getBoundingClientRect();
                    const lineHeight = 20; // Approximate line height in pixels
                    const offset = 5; // Extra space between the cursor and the autocomplete container
        
                    autocompleteContainer.style.left = `${left}px`;
                    autocompleteContainer.style.top = `${top + lineHeight + offset}px`;
                    autocompleteContainer.style.width = "auto";
                    autocompleteContainer.style.display = "block";
                } else {
                    autocompleteContainer.style.display = "none";
                }
            } else {
                autocompleteContainer.style.display = "none";
            }
        };
        


        contentArea.addEventListener("input", () => {
            updateHighlighting();
            updateAutocomplete();
        });

        contentArea.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                user.setEditing(false);
                this.write(contentArea.value);
                tab.rename(`${this.name} - saving...`);
                setTimeout(() => {
                    tab.remove();
                    this.clear();
                    output.display(user);
                    output.initPath(user);
                }, 2000);
                return;
            }
        });

        contentArea.addEventListener("scroll", () => {
            syntaxHighlighter.scrollTop = contentArea.scrollTop;
        });

        updateHighlighting();

        editorContainer.appendChild(syntaxHighlighter);
        editorContainer.appendChild(contentArea);
        editorContainer.appendChild(autocompleteContainer);

        return editorContainer;
    }
}

export const _Files_ = [];
