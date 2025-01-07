export const suggestions = [
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