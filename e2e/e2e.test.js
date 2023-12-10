import { fork } from 'child_process';

// eslint-disable-next-line import/no-extraneous-dependencies
import puppeteer from 'puppeteer';

jest.setTimeout(300000);

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
      headless: false, // show gui
      slowMo: 250,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('Input shoud add class .valid to class .input if the card number is valid', async () => {
    await page.goto(baseUrl);
    await page.waitForSelector('.validation-widget');
    const widget = await page.$('.validation-widget');
    const input = await widget.$('.input');
    const button = await widget.$('.button');
    await input.type('4929388527611262');
    await button.click();

    await page.waitForSelector('.validation-widget .input.valid');
  });

  test('Input shoud add class .invalid to class .input if the card number is invalid', async () => {
    await page.goto(baseUrl);
    await page.waitForSelector('.validation-widget');
    const widget = await page.$('.validation-widget');
    const input = await widget.$('.input');
    const button = await widget.$('.button');
    await input.type('112677915000000');
    await button.click();
    await page.waitForSelector('.validation-widget .input.invalid');
  });
});
