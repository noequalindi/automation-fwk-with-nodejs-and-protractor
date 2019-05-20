const BasePage = require('./basePage');

class OtherPage extends BasePage { 

   constructor()
   {
      super();
      this.url = 'https://google.com'; // put here your project url
   }
}
module.exports = OtherPage;