import { Page } from "@playwright/test";

export class CompletedPaymentPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(orderId: number) {
    await this.page.goto(
      `http://localhost:5173/reservationComplete?orderId=${orderId}`
    );
  }
  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState("domcontentloaded");
  }

  async extractCompletedPaymentInfo() {
    await this.page.waitForLoadState("domcontentloaded");
    const guestName = await this.page.locator(".guest_name").textContent();
    const hotelNames = await this.page.locator(".hotel-name").allTextContents();
    const checkInDates = await this.page.locator(".check-in").allTextContents();
    const checkOutDates = await this.page
      .locator(".check-out")
      .allTextContents();
    const totalPrices = await this.page
      .locator(".total-price")
      .allTextContents();

    return hotelNames.map((hotelName, index) => ({
      guestName,
      hotelName,
      checkInDate: checkInDates[index],
      checkOutDate: checkOutDates[index],
      totalPrice: totalPrices[index]
    }));
  }
}
