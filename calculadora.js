// calculadora.js
// Banco de Dados Central e Matemática Oficial do Divinity Original Sin 2

const tabelaDanoBaseMagia = [0, 7, 9, 11, 13, 16, 19, 23, 27, 31, 36, 42, 49, 57, 66, 78, 93, 110, 139, 166, 199, 239, 289, 349, 423, 513];

// 1. Motor Parse de XML -> JSON para a Interfce consumir sem engasgos
window.CentralDatabase = {};
window.CentralComboList = {};

function initDatabase() {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(BANCO_XML_RAW, "text/xml");
    
    const schools = xmlDoc.getElementsByTagName("School");
    window.CentralDatabase = {};
    window.CentralComboList = {};

    for (let i = 0; i < schools.length; i++) {
        let schoolName = schools[i].getAttribute("name");
        window.CentralDatabase[schoolName] = [];
        window.CentralComboList[schoolName] = [];
        
        let skills = schools[i].querySelectorAll(":scope > Skill");
        skills.forEach(sk => {
            let skObj = extractSkillData(sk);
            window.CentralDatabase[schoolName].push(skObj);
            
            if (skObj.canCombo) {
                window.CentralComboList[schoolName].push(skObj);
            }
        });
    }
}

function extractSkillData(skNode) {
    let subSkillsList = [];
    let subSection = skNode.getElementsByTagName("Subskills");
    if (subSection.length > 0) {
        let subs = subSection[0].getElementsByTagName("Skill");
        for(let s=0; s<subs.length; s++) {
            subSkillsList.push(extractSkillData(subs[s]));
        }
    }
    
    let descNode = skNode.getElementsByTagName("Desc");
    let descText = descNode.length > 0 ? descNode[0].textContent : "";

    return {
        id: skNode.getAttribute("id"),
        name: skNode.getAttribute("name"),
        ap: Number(skNode.getAttribute("ap") || 0),
        cd: Number(skNode.getAttribute("cd") || 0),
        type: skNode.getAttribute("type"),
        mult: Number(skNode.getAttribute("mult") || 0),
        origin: skNode.getAttribute("origin"),
        attr: skNode.getAttribute("attr"),
        esc: skNode.getAttribute("esc"),
        canCombo: skNode.getAttribute("canCombo") === "true",
        ignoreAttr: skNode.getAttribute("ignoreAttr") === "true",
        desc: descText,
        subSkills: subSkillsList
    };
}

// Inicializamos logo na carga os DBs
if(typeof BANCO_XML_RAW !== "undefined") {
    try {
        initDatabase();
    } catch(e) {
        alert("Erro fatal ao processar Banco XML: " + e.message);
    }
} else {
    console.warn("banco_xml.js não carregado antes de calculadora.js");
}

// 2. Motor de Calculo Base - Retorna o Estágio Físico/Aditivo e Escalado de qualquer Ataque
// Usado intensivamente pelas 2 Páginas (A Enciclopédia e o Combo Mestre)
window.CalculateFextralifeFormula = function(skill, stats) {
    // stats = { lvl, str, fin, int, wpMi, wpMa, sWrf, sPyr, sGeo, sHyd, sAer, sSum, wSkp, tMisc }
    let logicLog = "";
    
    if(skill.type === 'buff') {
        return { mi: 0, ma: 0, isBuff: true, log: "Habilidade Especial sem Fórmula Escalada de Dano." };
    }

    let bMi = 0, bMa = 0;
    let multStr = skill.mult / 100;

    // STEP 1: BASE ENGINE
    if(skill.origin === 'Arma') {
        let wMo = (stats.wpMi || 0) + (stats.offMin ? (stats.offMin*0.5) : 0);
        let wMa = (stats.wpMa || 0) + (stats.offMax ? (stats.offMax*0.5) : 0);
        bMi = wMo * multStr; 
        bMa = wMa * multStr;
        logicLog += `Base Arma Atacante (Mult ${skill.mult}%): [${Math.floor(bMi)} ~ ${Math.floor(bMa)}]\n`;
    } else {
        let tb = tabelaDanoBaseMagia[stats.lvl] || 0;
        bMi = tb * 0.95 * multStr;
        bMa = tb * 1.05 * multStr;
        logicLog += `Dano Base Engine Nível ${stats.lvl} (${tb}) * Mult ${skill.mult}%: [${Math.floor(bMi)} ~ ${Math.floor(bMa)}]\n`;
    }

    if(skill.type === 'heal' || skill.type === 'marmor' || skill.type === 'parmor') {
        let schBonus = 0;
        if(skill.type==='marmor'||skill.esc==='Água') schBonus = stats.sHyd||0;
        if(skill.type==='parmor') schBonus = stats.sGeo||0;

        let amount = (tabelaDanoBaseMagia[stats.lvl]||0) * multStr * Math.max(1, (1 + schBonus));
        logicLog += `Escala Purificada Curativa/Protetora: ${Math.floor(amount)}\n`;
        return { mi: amount, ma: amount, log: logicLog };
    }

    // STEP 2: ESCOLAS MULTIPLICATIVAS ELEVADAS
    let mSchool = 0, nSchool = "Nenhuma/Isolado";
    if(skill.origin === 'Summon') {
        mSchool = stats.sSum || 0; nSchool = "Summoning Ability";
    } else {
        if(skill.type==='phys'||skill.type==='pierce'||skill.type==='Físico'||skill.type==='Perfurante'){mSchool=stats.sWrf||0; nSchool="Warfare";}
        else if(skill.esc==='Fogo'||skill.type==='Fogo'){mSchool=stats.sPyr||0; nSchool="Pyrokinetic";}
        else if(skill.esc==='Veneno'||skill.esc==='Terra'||skill.type==='Veneno'||skill.type==='Terra'){mSchool=stats.sGeo||0; nSchool="Geomancer";}
        else if(skill.esc==='Água'||skill.type==='Água'){mSchool=stats.sHyd||0; nSchool="Hydrosophist";}
        else if(skill.esc==='Ar'||skill.type==='Ar'){mSchool=stats.sAer||0; nSchool="Aerotheurge";}
    }
    logicLog += `Escala ${nSchool}: x ${(1+mSchool).toFixed(2)}\n`;

    // STEP 3: ADITIVOS PRINCIPAIS
    let addV = 1; let tM = stats.tMisc || 0;
    
    if(skill.origin === 'Arma') {
        let attrV = 10;
        if(skill.attr==='Força') attrV = stats.str; 
        if(skill.attr==='Finesse') attrV = stats.fin; 
        if(skill.attr==='Intel') attrV = stats.int; 
        if(skill.attr==='Dinâmico' || !skill.attr) attrV = Math.max(stats.str||10, Math.max(stats.fin||10, stats.int||10));

        let ptB = Math.max(0, (attrV-10)*0.05);
        addV = 1 + ptB + (stats.wSkp||0) + tM;
        logicLog += `Bônus Agrupados [Arma]: (Atributos + Skill + Talentos) x ${addV.toFixed(2)}\n`;
    } else if(skill.origin === 'Summon') {
        addV = 1 + tM; 
        logicLog += `Bônus Agrupados (Summons excluem atributos): x ${addV.toFixed(2)}\n`;
    } else if(skill.origin === 'Poly') {
        let polySt = Math.max(0, ((stats.str||10)-10)*0.05);
        addV = (1 + polySt) * (1 + tM); 
        logicLog += `Bônus Agrupados [Poly Usa Força Mágica]: x ${addV.toFixed(2)}\n`;
    } else if(skill.ignoreAttr) {
        addV = 1 * (1 + tM);
        logicLog += `Bônus Agrupados [Racial Ignora Atributos Mestre]: x ${addV.toFixed(2)}\n`;
    } else {
        let iB = Math.max(0, ((stats.int||10)-10)*0.05);
        addV = (1 + iB) * (1 + tM);
        logicLog += `Bônus Agrupados Magia [Padrão Int]: x ${addV.toFixed(2)}\n`;
    }

    // APLICAR AS MULTIPLICAÇÕES FINAIS (Bruto puro, sem calcular crítico e elevamento terreno AINDA - Que é a cargo da Calculadora Combo)
    let fMi = bMi * addV * (1 + mSchool);
    let fMa = bMa * addV * (1 + mSchool);
    
    return { mi: fMi, ma: fMa, logicLog: logicLog, schoolName: nSchool, schoolMultNum: 1 + mSchool, agrupadoMultNum: addV };
};
