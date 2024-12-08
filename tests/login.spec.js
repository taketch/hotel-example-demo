import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.js';
import { registerUser } from '../tests/helpers.js';
import { Mypage } from '../pages/mypage.js';
import { LoginPage } from '../pages/loginPage.js';

test('ログインができること', async ({ page }) => {
    const home = new HomePage(page);
    const mypage = new Mypage(page);
    const login = new LoginPage(page);

    // 会員登録情報
    const signupUserInfo = {
        email: 'test@example.com',
        password: 'testtest',
        name: 'テスト氏名',
        address: 'テスト住所',
        tel: '01234567890',
        birthday: '2000-12-03'
    };

    // 会員登録
    await registerUser(page, signupUserInfo);
    // ログイン
    await mypage.logout();
    await home.goto();
    await home.goToLoginPage();
    await login.login(signupUserInfo);

    // マイページへの遷移を確認
    await expect(await mypage.getEmail()).toBe(signupUserInfo.email);
})