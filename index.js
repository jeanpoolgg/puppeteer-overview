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

openWebPage();