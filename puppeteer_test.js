const puppeteer = require('puppeteer');

(async () => {
    console.log("Starting puppeteer...");
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    // Catch console logs
    page.on('console', msg => {
        console.log(`PAGE LOG [${msg.type()}]:`, msg.text());
    });
    page.on('pageerror', err => {
        console.log(`PAGE ERROR:`, err.message);
    });

    console.log("Navigating...");
    await page.goto('file:///homecrc/users/adalberto.nobre/Documentos/divinity/algo.html', { waitUntil: 'networkidle0' });
    
    console.log("Opening modal...");
    await page.evaluate(() => {
        openWikiModal();
    });
    
    console.log("Selecting school...");
    await page.select('#selSchool', 'Huntsman');
    await page.evaluate(() => populateSkills());
    
    console.log("Selecting skill...");
    await page.select('#selSkill', '0');
    
    console.log("Pushing from wiki...");
    await page.evaluate(() => pushSkillFromWiki());
    
    const comboSize = await page.evaluate(() => skillsCombo.length);
    console.log("Combo size:", comboSize);
    
    await browser.close();
})();
