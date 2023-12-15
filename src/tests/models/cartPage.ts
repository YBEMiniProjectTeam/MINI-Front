import { Page, expect } from "@playwright/test";

export class CartPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(): Promise<void> {
    await this.page.goto("http://localhost:5173/shoppingCart");
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState("domcontentloaded");
  }

  async clickReserveButton(): Promise<void> {
    const reserveButton = this.page.getByRole("button", { name: "예약하기" });
    console.log("예약하기 버튼 클릭");
    await expect(reserveButton).toBeVisible();
    await reserveButton.click();
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }
}
