import { Locator, Page } from "@playwright/test";

export class Login {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly BotaoLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('input[id="user-name"]');
    this.password = page.locator('input[id="password"]');
    this.BotaoLogin = page.locator("#login-button");
  }

  async visit() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async Login(username: string, password: string) {
    await this.username.type(username);
    await this.password.type(password);
  }

  async ClickToLogin() {
    await this.BotaoLogin.click();
  }
}
