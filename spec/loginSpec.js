
const Alert = require('selenium-webdriver');
const loginPage  = require('../pages/loginPage.js');
const login = new loginPage();
const until = protractor.ExpectedConditions;  

describe('Project login', function() {

  beforeEach(() =>  {
		login.goto();
  
  });
  
  it('Get title', function() {
      elem = element(by.className('Button Button--primary u-block'));
      browser.sleep('5000');
      expect(browser.getTitle()).toBe('Website builder'); 
  });

  it('Click button login', function() {
      
    element(by.linkText('Sign In')).click();
      
    const alert = browser.switchTo().alert();
    alert.sendKeys("test");
    alert.accept();

    console.log("termino el test de prueba");
    
  });

  afterEach(() => {
      browser.ignoreSynchronization = true; // for projects that not use AngularJS.

  });
});
