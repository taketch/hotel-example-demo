import { Page } from '@playwright/test';

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailField = this.page.locator('input[name="email"]');
        this.passwordField = this.page.locator('input[name="password"]');
        this.loginButton = this.page.locator('form button:has-text("ログイン")');
    }

    // ログイン
    async login({ name, email, password, address, tel, birthday }) {
        await this.emailField.waitFor();
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}