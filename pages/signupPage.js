import { Page } from '@playwright/test';

export class SignupPage {
    constructor(page) {
        this.page = page;
        this.emailField = this.page.locator('input[name="email"]');
        this.passwordField = this.page.locator('input[name="password"]');
        this.passwordConfirmField = this.page.locator('input[name="password-confirmation"]');
        this.nameField = this.page.locator('input[name="username"]');
        this.addressField = this.page.locator('input[name="address"]');
        this.telField = this.page.locator('input[name="tel"]');
        this.birthdayField = this.page.locator('input[name="birthday"]');
        this.registerButton = this.page.locator('form button:has-text("登録")'); 
    }
    
    // 会員登録
    async signup({ name, email, password, address, tel, birthday }) {
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.passwordConfirmField.fill(password);
        await this.nameField.fill(name);
        await this.addressField.fill(address);
        await this.telField.fill(tel);
        await this.birthdayField.fill(birthday);
        await this.registerButton.click();
    }
}
