const puppeteer = require('puppeteer');

async function openPage(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  return { browser, page };
}

async function takeScreenshot(page, path) {
  await page.screenshot({ path: path });
}

async function getPageTitle(page) {
  return await page.title();
}

// 导出函数使它们可以在其他文件中使用
module.exports = {
  openPage,
  takeScreenshot,
  getPageTitle,
};