const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('//input[@name="username"]');}
    get inputPassword () { return $('//input[@name="password"]');}
    get btnLogin () { return $('//button[contains(.,"Login")]');}
    get errorMessageInvalidCredentials() { return $('//*[text()="Invalid credentials"]');}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('web/index.php/auth/login');
    }
}

module.exports = new LoginPage();
