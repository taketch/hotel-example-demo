import { Page, expect } from '@playwright/test';

export class Mypage {
    constructor(page) {
        this.page = page;
        this.pageTitle = this.page.locator('h2.my-3');
        this.email = this.page.locator('#email');
        this.username = this.page.locator('#username');
        this.rank = this.page.locator('#rank');
        this.address = this.page.locator('#address');
        this.tel = this.page.locator('#tel');
        this.gender = this.page.locator('#gender');
        this.birthday = this.page.locator('#birthday');
        this.notification = this.page.locator('#notification');
        this.logoutButton = 'text=ログアウト';
        this.withdrawalButton = 'text=退会する';
    }

    // 会員情報を取得
    async getEmail() {
        await this.email.waitFor();
        return this.email.textContent();
    }
    async getUserName() {
        await this.username.waitFor();
        return this.username.textContent();
    }
    async getRank() {
        await this.rank.waitFor();
        return this.rank.textContent();
    }
    async getAddress() {
        await this.address.waitFor();
        return this.address.textContent();
    }
    async getTel() {
        await this.tel.waitFor();
        return this.tel.textContent();
    }
    async getGender() {
        await this.gender.waitFor();
        return this.gender.textContent();
    }
    async getBirthday() {
        await this.birthday.waitFor();
        return this.birthday.textContent();
    }
    async getNotification() {
        await this.notification.waitFor();
        return this.notification.textContent();
    }

    // ボタン操作
    async logout() {
        await this.page.click(this.logoutButton);
    }
    async withdrawal() {
        await this.page.click(this.withdrawalButton);
    }
}
