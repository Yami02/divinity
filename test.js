const fs = require('fs');
let text = fs.readFileSync('/homecrc/users/adalberto.nobre/Documentos/divinity/banco_xml.js', 'utf-8');

// Strip out the first and last backticks which are valid syntax.
let inner = text.substring(text.indexOf('`') + 1, text.lastIndexOf('`'));

if (inner.includes('`')) {
    console.log("FOUND UNESCAPED BACKTICKS IN XML STRING!");
    console.log("Count:", [...inner.matchAll(/`/g)].length);
    let index = inner.indexOf('`');
    console.log("Snippet near first backtick: ", inner.substring(index - 50, index + 50));
} else {
    console.log("No extra backticks found.");
}
