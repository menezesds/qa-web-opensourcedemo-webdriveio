const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const Header = require('../pageobjects/client/header.page.js')

describe('Login Page', () => {
    beforeEach(async() => {
        await LoginPage.open();
    });

    it('displays an error message for invalid credentials', async () => {
        await LoginPage.login('Admin', '123');
        await expect(LoginPage.errorMessageInvalidCredentials).toBeExisting();
    });

    it('allows users to log in with valid credentials', async () => {
        await LoginPage.login('Admin', 'admin123');
        await expect(Header.headerUserArea).toBeExisting();
    });
});