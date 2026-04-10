const fs = require('fs');

let algo = fs.readFileSync('/homecrc/users/adalberto.nobre/Documentos/divinity/algo.html', 'utf8');

// Find all script tags
let scripts = [...algo.matchAll(/<script>([\s\S]*?)<\/script>/g)];

let i = 1;
for (let script of scripts) {
    try {
        console.log(`Evaluating script block ${i}...`);
        new Function(script[1]);
        console.log(`Script block ${i} is syntactically valid.`);
    } catch(e) {
        console.error(`SYNTAX ERROR in script block ${i}:`, e.message);
    }
    i++;
}
