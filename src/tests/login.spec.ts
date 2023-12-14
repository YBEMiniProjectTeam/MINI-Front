import { test, expect } from "@playwright/test";

test("로그인 성공", async ({ page }) => {
  await page.goto("http://localhost:5173/login");

  await page.fill('input[id="email"]', "user5@naver.com");
  await page.fill('input[type="password"]', "asdqwe123!@#");

  await page.click('button[type="submit"]');

  const localStorageValue = await page.evaluate(() => {
    return localStorage.getItem("access-token");
  });

  expect(typeof localStorageValue).not.toBe("undefined");
});
