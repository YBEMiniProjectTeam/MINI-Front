import { Page } from "@playwright/test";

export class LoginPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(): Promise<void> {
    await this.page.goto("http://localhost:5173/login");
  }

  async login(email: string, password: string): Promise<void> {
    const navigationPromise = this.page.waitForNavigation();
    await this.page.fill('input[id="email"]', email);
    await this.page.fill('input[type="password"]', password);
    await this.page.click('button:has-text("로그인")');

    await navigationPromise;
  }

  async getAccessToken(): Promise<string | null> {
    return this.page.evaluate(() => {
      return localStorage.getItem("access-token");
    });
  }
}
