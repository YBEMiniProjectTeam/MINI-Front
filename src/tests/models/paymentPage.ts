import { Page, expect } from "@playwright/test";

export class PaymentPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async extractCartIdsFromUrl(): Promise<number[]> {
    const currentUrl = this.page.url();
    const url = new URL(currentUrl);
    const cartIds = url.searchParams.getAll("cartId").map(Number);
    expect(cartIds.length).toBeGreaterThan(0);
    return cartIds;
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState("domcontentloaded");
  }

  async submitPayment(): Promise<void> {
    await this.page.getByRole("button", { name: "원 결제하기" }).click();
  }

  async allAgreeToTerms(): Promise<void> {
    await this.page.getByText("필수 약관 전체 동의").click();
  }

  async agreeToTerms(): Promise<void> {
    await this.page
      .locator("label")
      .filter({ hasText: "[필수] 개인정보 수집 및 이용" })
      .locator("span")
      .first()
      .click();
    await this.page
      .locator("label")
      .filter({ hasText: "[필수] 개인정보 제 3자 제공" })
      .locator("span")
      .first()
      .click();
  }

  async toggleDifferentGuestCheckbox() {
    await this.page.locator("text=예약자와 투숙자가 다릅니다").click();
    await this.page.waitForSelector('input[placeholder="이름 입력"]');
  }

  async fillGuestForm(name: string, email: string) {
    await this.page.fill('input[placeholder="이름 입력"]', name);
    await this.page.fill('input[placeholder="이메일 입력"]', email);
  }

  async checkErrorMessage(selector: string, expectedMessage: string) {
    await expect(this.page.locator(selector)).toHaveText(expectedMessage);
  }

  async getNameAndEmail() {
    const nameLocator = this.page.locator('label:has-text("이름") + div');
    const emailLocator = this.page.locator('label:has-text("이메일") + div');

    const name = await nameLocator.textContent();
    const email = await emailLocator.textContent();

    return { name, email };
  }
}
