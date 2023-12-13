import { test, expect } from "@playwright/test";

test("장바구니가 담겨져 있는 경우", async ({ page }) => {
  await page.goto("http://localhost:5173/shopping-cart");

  const cartItemText = await page.textContent(".roomListWrap h3");
  expect(cartItemText).not.toBeNull();
});

test("+ 버튼 - 버튼 눌렀을 경우", async ({ page }) => {
  await page.goto("http://localhost:5173/shopping-cart");

  await page.click(".priceWrap Button:nth-child(3)");

  const quantityTextAfterIncrease = await page.textContent(
    ".priceWrap span.bold"
  );
  expect(quantityTextAfterIncrease).toBe("2");

  await page.click(".priceWrap Button:nth-child(1)");

  const quantityTextAfterDecrease = await page.textContent(
    ".priceWrap span.bold"
  );
  expect(quantityTextAfterDecrease).toBe("1");
});
