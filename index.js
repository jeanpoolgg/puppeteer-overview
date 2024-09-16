import puppeteer from "puppeteer";

async function openWebPage() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 2000
    });
    const page = await browser.newPage();
    await page.goto('https://quotes.toscrape.com');
    await browser.close();
}

async function captureScreenShot() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 2000
    });
    const page = await browser.newPage();
    await page.goto('https://quotes.toscrape.com');
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

async function getDataFromWebPage() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 200
    });
    const page = await browser.newPage();
    await page.goto('https://quotes.toscrape.com');
    const result = await page.evaluate(() => {
        const title = document.querySelector('h1 a').textContent;
        const description = document.querySelector('.quote span').textContent;
        const author = document.querySelector('.quote span .author').textContent; 
        return {title, description, author}
    })
    console.table(result);
    await browser.close();
}

async function handleDynamicWebPage() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 200
    });
    const page = await browser.newPage();
    await page.goto('https://quotes.toscrape.com');
    const result = await page.evaluate(() => {
        const quotes = document.querySelectorAll('.quote');
        const data = [... quotes].map(quote => {
            const quoteText = quote.querySelector(".text").innerText;
            const author = quote.querySelector(".author").innerText;
            const tags = [... quote.querySelectorAll(".tag")].map((tag) => tag.innerText);
            return {
                quoteText,
                author,
                tags
            }
        });
        return data;
    })
    console.table(result);
    await browser.close();
}

// openWebPage()
// captureScreenShot();
// navigateWebPage();
// getDataFromWebPage();
handleDynamicWebPage();