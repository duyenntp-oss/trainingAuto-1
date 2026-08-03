/*Tạo Page Class lib/pages/login.page.ts:

Locator: usernameInput, passwordInput, loginButton
Method: login(username, password) */


import { Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }


  // ==========================
  // Locator
  // ==========================

  // Ô nhập username
  usernameInput = this.page.locator('//input[@id="username"]');

  // Ô nhập password
  passwordInput = this.page.locator('//input[@id="password"]');

  // Nút Login
  loginButton = this.page.locator('//button[@type="submit"]');


  // ==========================
  // Method
  // ==========================

  // Đăng nhập
  async login(username: string, password: string) {

    await this.usernameInput.fill(username);

    await this.passwordInput.fill(password);

    await this.loginButton.click();

  }

}