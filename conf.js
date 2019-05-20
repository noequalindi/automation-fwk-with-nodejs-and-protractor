var spec_files = 'spec/*.js'

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 11000,
    chromeOnly: true,
    directConnect: true,
    specs: [spec_files],
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',

    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000,
      print: function() {}
    },

    

  capabilities: {
      browserName: 'chrome',
      shardTestFiles: true,
      maxInstances: 2,
      chromeOptions: {
          args: [
              // disable chrome's wakiness
              '--disable-infobars',
              '--disable-extensions',
              'verbose',
              'log-path=/tmp/chromedriver.log'
          ],
          prefs: {
              // disable chrome's annoying password manager
              'profile.password_manager_enabled': false,
              'credentials_enable_service': false,
              'password_manager_enabled': false
          }
      }
  }

};