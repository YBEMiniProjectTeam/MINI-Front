import { test, expect } from "@tests/helpers/customTest";

let accessToken;

test.beforeAll(async ({ loginRequest }) => {
  accessToken = await loginRequest.getAccessToken();
});

test.beforeEach(async ({ loginPage }) => {
  await loginPage.setToken(accessToken);
});

test("1. 결제 페이지 이동", async ({ page }) => {
  await page.goto("http://localhost:5173/orders?cartId=231");
});

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/orders?cartId=231");
  await page
    .locator("label")
    .filter({ hasText: "예약자와 투숙자가 다릅니다" })
    .locator("span")
    .first()
    .click();
  await page.getByRole("button", { name: "원 결제하기" }).click();
});
