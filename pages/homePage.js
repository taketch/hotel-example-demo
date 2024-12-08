import { expect, Page } from '@playwright/test';

export class HomePage {
    constructor(page) {
        this.page = page;
        this.plansLink = 'text=宿泊予約';
        this.registerLink = 'text=会員登録';
        this.signupLink = 'text=ログイン';
        this.mypageLink = 'text=マイページ';
    }

    // ホーム
    async goto() {
        await this.page.goto('https://hotel-example-site.takeyaqa.dev/ja/');
    }

    // 宿泊予約
    async goToPlansPage() {
        await this.page.click(this.plansLink);
    }

    // 会員登録
    async goToRegisterPage() {
        await this.page.click(this.registerLink);
    }

    // ログイン
    async goToSignupPage() {
        await this.page.click(this.signupLink);
    }

    // マイページ
    async goToMypage() {
        await this.page.click(this.mypageLink);
    }
}
