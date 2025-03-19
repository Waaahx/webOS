var COLOR = {
    STRING: 'orange',
    NUMBER: 'salmon',
    KEYWORD: 'purple',
    VARIABLE: '#1158a4',
    COMMENT: 'green',
    SPECIAL: 'yellow',
    NATIVE: 'teal'
};



export function applySyntaxHighlighting(text) {
    return text
        // Chaînes de caractères : simples, doubles ou backticks
        .replace(/(["'])(.*?)(\1)/g, '<span style="color: ' + COLOR.STRING + ';">$&</span>')
        // Nombres
        .replace(/\b(\d+(\.\d+)?([eE][-+]?\d+)?)\b/g, '<span style="color: ' + COLOR.NUMBER + ';">$1</span>')
        // Mots-clés JavaScript
        .replace(/\b(abstract|await|boolean|break|byte|case|catch|continue|debugger|default|delete|do|else|enum|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|long|native|new|null|package|private|protected|public|return|short|super|switch|synchronized|throw|throws|transient|true|try|typeof|void|volatile|while|with|yield|console)\b/g, '<span style="color: ' + COLOR.KEYWORD + ';">$1</span>')
        // Variables JavaScript
        .replace(/\b(let|var|const|function|class|static|this)\b/g, '<span style="color: ' + COLOR.VARIABLE + ';">$1</span>')
        // Commentaires multi-lignes
        .replace(/\/\*[\s\S]*?\*\//g, '<span style="color: ' + COLOR.COMMENT + ';">$&</span>')
        // Charactères spéciaux
        .replace(/(\(|\)|\[|\]|\{|\})/g, '<span style="color: ' + COLOR.SPECIAL + ';">$1</span>')
        // Commentaires mono-lignes
        .replace(/\/\/.*$/gm, '<span style="color: ' + COLOR.COMMENT + ';">$&</span>')
        // Identificateurs globaux ou objets natifs JS (comme Math, Date, etc.)
        .replace(/\b(Math|Date|String|RegExp|Array|Object|Function|Boolean|Number|BigInt|Set|Map|WeakSet|WeakMap|Symbol|Promise|JSON|Reflect|Proxy)\b/g, '<span style="color: ' + COLOR.NATIVE + ';">$1</span>');
}