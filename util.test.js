const puppeteer = require("puppeteer");
const { teText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
  const text = generateText('Max', 29);
  expect(text).toBe('Max (29 years old)');
});

test('should generate a valid text output', () => {
  const text = generateText('Max', 29);
  expect(text).toBe('Max (29 years old)')
});

test("should generate a valid text output",()=>{
    const text = checkAndGenerate ("Max",29);
    expect(text).toBe("Max (29 years old)")
});

test("should click around",async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: ["2--window-size=192-,1080"]
    });
    const page = await browser.newPage();
    await page.goto(
    "http://localhost:63342/js-testing-introduction/index.html?_ijt=n3nd4ub1sr8apgq7pqel23f44g&_ij_reload=RELOAD_ON_SAVE"
    );
    await page.click ('input#name');
    await page.type ('input#name', "Emily");
    await page.click ('input#age');
    await page.type ('input#age', "28");
    await page.click("#btnAddUser");
});
