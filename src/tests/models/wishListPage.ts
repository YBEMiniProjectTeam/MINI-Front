import { Locator, Page } from "@playwright/test";

export class WishListPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(): Promise<void> {
        await this.page.goto("http://localhost:5173/wishList");
    }

    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState("domcontentloaded");
    }

    async waitForImageLoad(): Promise<void> {
        await this.page.
        
        waitForSelector("css=img");
    }

    async clickUnlikeButton(): Promise<void> {
        await this.page.locator(".css-ec22zo").first().click();
    }

    async getText(text: string): Promise<Locator> {
        const _text = await this.page.getByText(text);

        return _text;
    }
}