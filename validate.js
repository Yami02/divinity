const fs = require('fs');
const js = fs.readFileSync('/homecrc/users/adalberto.nobre/Documentos/divinity/banco_xml.js', 'utf-8');
const xml = js.match(/const BANCO_XML_RAW = `([\s\S]*?)`;/)[1];

const skills = [...xml.matchAll(/<Skill([^>]*)>/g)];
let missingOrigin = 0;
let origins = new Set();

skills.forEach(sm => {
    let attrs = sm[1];
    let orgMatch = attrs.match(/origin="([^"]*)"/);
    if (!orgMatch) {
       console.log("Missing origin:", attrs);
       missingOrigin++;
    } else {
       origins.add(orgMatch[1]);
    }
});

console.log("Total missing origin:", missingOrigin);
console.log("Origins found:", [...origins]);
