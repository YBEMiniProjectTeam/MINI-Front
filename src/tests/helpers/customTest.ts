import { test as base } from "@playwright/test";

export const test = base.extend({
  context: async ({ browser, storageState }, use) => {
    const context = await browser.newContext({ storageState });
    await use(context);
  },
  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
  }
});

export { expect } from "@playwright/test";
