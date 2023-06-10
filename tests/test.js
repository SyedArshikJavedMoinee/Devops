const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Register', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })


  it('Register', async function() {
    await driver.get("http://localhost:5000/")
    await driver.manage().window().setRect({ width: 1042, height: 816 })
    await driver.findElement(By.css(".btn:nth-child(1)")).click()
    await driver.findElement(By.linkText("Register")).click()
    await driver.findElement(By.id("name")).click()
    await driver.findElement(By.id("name")).sendKeys("arshik2")
    await driver.findElement(By.id("email")).sendKeys("arshik2@gmail.com")
    await driver.findElement(By.id("password")).sendKeys("javed123")
    await driver.findElement(By.id("password2")).sendKeys("javed123")
    await driver.findElement(By.css(".btn")).click()

    let txt = await driver.wait(
        until.elementLocated(By.xpath('//*[@id="root"]/container/')),
        4000
      );
      txt = await txt.getText();
      await driver
        .findElement(By.xpath('//*[@id="root"]/container/header/logo/a'))
        .click();

      assert.strictEqual(txt, 'Support Desk');

  })

  it('Login', async function() {
    await driver.get("http://localhost:5000/")
    await driver.manage().window().setRect({ width: 1046, height: 816 })
    await driver.findElement(By.linkText("Login")).click()
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("arshik@gmail.com")
    await driver.findElement(By.id("password")).sendKeys("javed")
    await driver.findElement(By.css(".btn")).click()
    {
      const element = await driver.findElement(By.css(".btn"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }

    let txt = await driver.wait(
        until.elementLocated(By.xpath('//*[@id="root"]/container/')),
        4000
      );
      txt = await txt.getText();
      await driver
        .findElement(By.xpath('//*[@id="root"]/container/header/logo/a'))
        .click();

      assert.strictEqual(txt, 'Support Desk');
  })

  it('Create Ticket', async function() {
    await driver.get("http://localhost:5000/")
    await driver.manage().window().setRect({ width: 1042, height: 816 })
    await driver.findElement(By.linkText("Create New Ticket")).click()
    await driver.findElement(By.id("product")).click()
    await driver.findElement(By.id("description")).click()
    await driver.findElement(By.id("description")).sendKeys("panel issue")
    await driver.findElement(By.css(".btn-block")).click()
    await driver.executeScript("window.scrollTo(0,0)")

    let txt = await driver.wait(
        until.elementLocated(By.xpath('//*[@id="root"]/container/')),
        4000
      );
      txt = await txt.getText();
      await driver
        .findElement(By.xpath('//*[@id="root"]/container/header/logo/a'))
        .click();

      assert.strictEqual(txt, 'Support Desk');
  })

  it('Add Note', async function() {
    await driver.get("http://localhost:5000/")
    await driver.manage().window().setRect({ width: 1049, height: 816 })
    await driver.findElement(By.linkText("View My Tickets")).click()
    await driver.findElement(By.linkText("View")).click()
    await driver.findElement(By.css(".ticket-page")).click()
    await driver.findElement(By.css(".btn:nth-child(2)")).click()
    {
      const element = await driver.findElement(By.css(".btn:nth-child(2)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.id("noteText")).click()
    await driver.findElement(By.id("noteText")).sendKeys("fixed issue")
    await driver.findElement(By.css(".form-group > .btn")).click()
    {
      const element = await driver.findElement(By.css(".form-group > .btn"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }

    let txt = await driver.wait(
        until.elementLocated(By.xpath('//*[@id="root"]/container/')),
        4000
      );
      txt = await txt.getText();
      await driver
        .findElement(By.xpath('//*[@id="root"]/container/header/logo/a'))
        .click();

      assert.strictEqual(txt, 'Support Desk');

  })


  it('Close Ticket', async function() {
    await driver.get("http://localhost:5000/")
    await driver.manage().window().setRect({ width: 1042, height: 816 })
    await driver.findElement(By.linkText("View My Tickets")).click()
    await driver.findElement(By.css(".ticket:nth-child(3) > .btn")).click()
    await driver.findElement(By.css(".btn-block")).click()

    let txt = await driver.wait(
        until.elementLocated(By.xpath('//*[@id="root"]/container/')),
        4000
      );
      txt = await txt.getText();
      await driver
        .findElement(By.xpath('//*[@id="root"]/container/header/logo/a'))
        .click();

      assert.strictEqual(txt, 'Support Desk');
  })


});


