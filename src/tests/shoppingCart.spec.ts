import { test, expect } from "@playwright/test";

test("장바구니가 담겨져 있는 경우", async ({ page }) => {
  // 로그인 절차
  await page.goto("http://localhost:5173/login");

  await page.fill('input[id="email"]', "user5@naver.com");
  await page.fill('input[type="password"]', "asdqwe123!@#");

  await page.getByRole("button", { name: "로그인", exact: true }).click();

  await page.waitForTimeout(1000);

  // 장바구니에 담겨져 있는 경우.
  await page.goto("http://localhost:5173/shoppingCart");
  await page.waitForTimeout(1000);
  const cartItemText = await page.textContent(".roomListWrap h3");
  expect(cartItemText).not.toBeNull();

  // +버튼 -버튼 클릭
  await page.getByRole("button", { name: "+", exact: true }).first().click();
  await page.waitForTimeout(1000);
  const quantityTextAfterIncrease = await page.textContent(
    ".priceWrap span.bold"
  );
  expect(quantityTextAfterIncrease).toBe("2");

  await page.getByRole("button", { name: "-", exact: true }).first().click();
  await page.waitForTimeout(1000);
  const quantityTextAfterDecrease = await page.textContent(
    ".priceWrap span.bold"
  );
  expect(quantityTextAfterDecrease).toBe("1");

  // 삭제
  await page.getByRole("button", { name: "선택 삭제", exact: true }).click();
  await page.waitForTimeout(1000);

  const noneCartList = await page.locator(".noneCartList");

  const isElementVisible = await noneCartList.isVisible();

  expect(isElementVisible).toBeTruthy();
});
