import { Locator, Page } from "@playwright/test";

export class SearchResultPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(): Promise<void> {
        await this.page.goto("http://localhost:5173/searchResult");
    }

    async waitForImageLoad(): Promise<void> {
        await this.page.waitForSelector("css=img");
    }

    async clickKeywordInput(): Promise<void> {
        await this.page.getByPlaceholder("숙소명 입력").click();
    }

    async clickSetButton(): Promise<void> {
        await this.page.getByRole("button", { name: "설정하기", exact: true }).click();
    }

    async clickSearchButton(): Promise<void> {
        await this.page.getByRole("button", { name: "검색하기", exact: true }).click();
    }

    async clickRegionSelect(): Promise<void> {
        await this.page.getByText("지역 선택").click();
        await this.page.getByText("대전광역시").click();
        await this.page.getByText("서구").click();
    }

    async clickDateSelect(): Promise<void> {
        await this.page.getByText("날짜 선택").click();
        await this.page.getByText("›").click();
        await this.page.getByText("18").click();
        await this.page.getByText("22").click();
    }

    async clickTitle(accommodationName: string): Promise<Locator> {
        await this.page.getByText(accommodationName).click();

        const title = this.page.getByText(accommodationName).first();

        return title;
    }

    async clickLikeButton(): Promise<void> {
        await this.page.locator(".css-v4qxc").first().click();
    }

    async clickUnlikeButton(): Promise<void> {
        await this.page.locator(".css-13g4lsz").first().click();
    }

    async fillKeywordInput(keyword: string): Promise<void> {
        await this.page.getByPlaceholder("숙소명 입력").fill(keyword);
    }

    async fillIncorrectKeywordInput(keyword: string): Promise<void> {
        await this.page.getByPlaceholder("숙소명 입력").fill(keyword);
    }
    
    async selectCategory(category: string): Promise<void> {
        const categories = await this.page.getByRole("combobox");
        await categories.selectOption(category);
    }

    async scrollDown(): Promise<void> {
        await this.page.evaluate(() => {
            window.scrollBy(0, 7000);
        });
    }

    async getText(text: string): Promise<Locator> {
        const _text = await this.page.getByText(text);

        return _text;
    }
}