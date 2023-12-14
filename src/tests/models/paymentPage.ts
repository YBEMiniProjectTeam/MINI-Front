import { Page, expect } from "@playwright/test";

export class PaymentPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyPaymentPageWithQueryString(): Promise<void> {
    const currentUrl = this.page.url();
    expect(currentUrl).toMatch(/orders\?cartId=\d+/);

    const url = new URL(currentUrl);
    const cartId = url.searchParams.get("cartId");
    expect(cartId).not.toBeNull();
  }
}
