const BasePage = require('./basePage');

class LoginPage extends BasePage { 

   constructor()
   {
      super();
      this.url = 'https://app.dev1.neo2.web.com/builder/index.html';
   }
}
module.exports = LoginPage;