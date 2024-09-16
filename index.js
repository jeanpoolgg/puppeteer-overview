import puppeteer from "puppeteer";

async function openWebPage() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 2000
    });
    const page = await browser.newPage();
    await page.goto('https://workingprime.com');
    await browser.close();
}

async function captureScreenShot() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 2000
    });
    const page = await browser.newPage();
    await page.goto('https://workingprime.com');
    await page.screenshot({path: 'captura.png'});
    await browser.close();
}

async function navigateWebPage() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 200
    });
    const page = await browser.newPage();
    await page.goto('https://quotes.toscrape.com');
    await page.click('a[href="/login"]');
    await new Promise(r => setTimeout(r, 3000));
    await page.screenshot({path: 'login.png'});
    await browser.close();
}

// openWebPage()
// captur eScreenShot();
navigateWebPage();