class BasePage {
    
    constructor() {
        /**
         * wrap this.timeout. (ms) in t-shirt sizes
         */
        this.timeout = {
            'xs': 420,
            's' : 1000,
            'm' : 2000,
            'l' : 5000,
            'xl': 9000,
            'xxl': 15000
        };
    
    }

    /**
     * wait and verify that a page is loaded
     * @returns {promise}
     * @requires a page to include `pageLoaded` method
     */
    loaded() {
        return browser.wait(() => {
            return this.pageLoaded();
        }, this.timeout.xl, 'timeout: waiting for page to load. The url is: ' + this.url);
    }

    goto() {
        browser.get(this.url, this.timeout.xl);
        return this.loaded();
    }

}
module.exports = BasePage;