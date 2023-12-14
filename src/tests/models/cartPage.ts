import { Page, expect } from "@playwright/test";

export class CartPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToShoppingCart(): Promise<void> {
    await this.page.goto("http://localhost:5173/shoppingCart");
  }

  async clickReserveButton(): Promise<void> {
    const reserveButton = this.page.getByRole("button", { name: "예약하기" });
    await expect(reserveButton).toBeVisible();
    await reserveButton.click();
    await this.page.waitForNavigation();
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }
}
