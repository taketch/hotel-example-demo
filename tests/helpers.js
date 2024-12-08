import { HomePage } from '../pages/homePage.js';
import { SignupPage } from '../pages/signupPage.js';

export async function registerUser(page, signupUserInfo) {
    const home = new HomePage(page);
    const signup = new SignupPage(page);

    // 会員登録操作
    await home.goto();
    await home.goToSignupPage();
    await signup.signup(signupUserInfo);
}