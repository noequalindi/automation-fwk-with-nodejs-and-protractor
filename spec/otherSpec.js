
const Alert = require('selenium-webdriver');
const otherPage  = require('../pages/otherPage.js');
const navigate = new otherPage();

describe('Example', function() {

  const until = protractor.ExpectedConditions;  

  beforeEach(() =>  {
        navigate.goto();
        browser.ignoreSynchronization = true;

  });
  
  it('Get title', function() {

    browser.sleep('2000');
    element(by.css('input[type=search]')).sendKeys('Hello World!');
    browser.sleep('2000');
    element(by.css('input[type=submit]')).click();
    browser.sleep('5000');
    const foo = element(by.id('resultStats'));
    esEsperado = expect(foo.isDisplayed()).toBe(true);
    console.log(esEsperado);
    browser.sleep('5000');
    console.log('termino google')
  });

  afterEach(() => {
  });
});
