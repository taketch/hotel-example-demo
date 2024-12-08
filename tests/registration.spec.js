import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.js';
import { RegisterPage, SignupPage } from '../pages/signupPage.js';
import { Mypage } from '../pages/mypage.js';

// 日付フォーマットを変換
function expectedBirthday(birthday) {
    const date = new Date(birthday);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
}

test('会員登録し、登録された内容が正しいこと', async ({ page }) => {
    const home = new HomePage(page);
    const signup = new SignupPage(page);
    const mypage = new Mypage(page);

    // 会員登録情報
    const signupUserInfo = {
        email: 'test@example.com',
        password: 'testtest',
        name: 'テスト氏名',
        address: 'テスト住所',
        tel: '01234567890',
        birthday: '2000-12-03'
    };

    // 操作
    await home.goto();
    await home.goToRegisterPage();
    await signup.signup(signupUserInfo);

    // マイページに表示される会員情報が正しいことを確認
    await expect(await mypage.getEmail()).toBe(signupUserInfo.email);
    await expect(await mypage.getUserName()).toBe(signupUserInfo.name);
    await expect(await mypage.getAddress()).toBe(signupUserInfo.address);
    await expect(await mypage.getTel()).toBe(signupUserInfo.tel);
    await expect(await mypage.getBirthday()).toBe(expectedBirthday(signupUserInfo.birthday));
});