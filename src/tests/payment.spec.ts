import { test, expect } from "@playwright/test";

test("1. ", async ({ page }) => {
  await page.goto("http://localhost:5173/shopping-cart");
  
  const cartItemText = await page.textContent(".roomListWrap h3");
  expect(cartItemText).not.toBeNull();
});