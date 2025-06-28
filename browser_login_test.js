// browserstack_login_test.js

const { Builder, By, until } = require('selenium-webdriver');

// fetch BrowserStack credentials from environment variables
const USERNAME = process.env.BROWSERSTACK_USERNAME;
const ACCESS_KEY = process.env.BROWSERSTACK_ACCESS_KEY;

// BrowserStack hub URL
const BROWSERSTACK_URL = `http://${USERNAME}:${ACCESS_KEY}@hub-cloud.browserstack.com/wd/hub`;

// define capabilities (you can change browser here)
const capabilities = {
  'browserName': 'Chrome',
  'browser_version': 'latest',
  'os': 'Windows',
  'os_version': '11',
  'name': 'SauceDemo Login Test - Prodigy Internship',
  'build': 'Prodigy-ST-04'
};

async function runTest() {
  let driver = new Builder()
    .usingServer(BROWSERSTACK_URL)
    .withCapabilities(capabilities)
    .build();

  try {
    // navigate to saucedemo
    await driver.get('https://www.saucedemo.com/');

    // wait for username input
    await driver.wait(until.elementLocated(By.id('user-name')), 10000);

    // positive test: valid login
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');
    await driver.findElement(By.id('login-button')).click();

    // confirm redirect to inventory
    await driver.wait(until.urlContains('inventory'), 10000);
    console.log('✅ Valid login test passed.');

    // logout to reset
    await driver.findElement(By.id('react-burger-menu-btn')).click();
    await driver.wait(until.elementLocated(By.id('logout_sidebar_link')), 5000);
    await driver.findElement(By.id('logout_sidebar_link')).click();

    // negative test: invalid password
    await driver.wait(until.elementLocated(By.id('user-name')), 5000);
    await driver.findElement(By.id('user-name')).clear();
    await driver.findElement(By.id('password')).clear();

    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('wrongpass');
    await driver.findElement(By.id('login-button')).click();

    let errorText = await driver.findElement(By.css('[data-test="error"]')).getText();
    if (errorText.toLowerCase().includes('username and password do not match')) {
      console.log('✅ Invalid login test passed.');
    } else {
      console.log('⚠️ Unexpected error message: ' + errorText);
    }

    // blank fields test
    await driver.findElement(By.id('user-name')).clear();
    await driver.findElement(By.id('password')).clear();
    await driver.findElement(By.id('login-button')).click();
    let blankError = await driver.findElement(By.css('[data-test="error"]')).getText();
    if (blankError.toLowerCase().includes('required')) {
      console.log('✅ Blank fields test passed.');
    } else {
      console.log('⚠️ Unexpected blank field message: ' + blankError);
    }

  } catch (err) {
    console.error('❌ Test failed:', err);
  } finally {
    await driver.quit();
  }
}

runTest();
