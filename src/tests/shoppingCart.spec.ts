import { test, expect } from "@playwright/test";

test("장바구니", async ({ page }) => {
  // 장바구니 담기
  const URL =
    "http://localhost:5173/products?id=498&startDate=12/15/2023&endDate=12/16/2023";
  await page.goto(URL);
  await page.click(".css-f1wnsy", { button: "left", clickCount: 1 });
  await page.waitForTimeout(1000);

  // 장바구니 페이지.
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

  expect(isElementVisible).toBe(true);
});
