import { test, expect } from "@playwright/test";

test("회원가입 성공", async ({ page }) => {
  const userEmail = "test100@example.com";
  const userPassword = "asdqwe123!@#";

  await page.goto("http://localhost:5173/register");

  await page.fill('input[id="email"]', userEmail);
  await page.fill('input[id="password"]', userPassword);
  await page.fill('input[id="confirmPassword"]', userPassword);
  await page.fill('input[id="name"]', "테스터");
  await page.fill('input[id="birthday"]', "20230101");

  await page.click('button[type="submit"]');

  await page.waitForNavigation();
  expect(page.url()).toBe("http://localhost:5173/login");

  const toastMessage = await page.textContent(".toast");
  expect(toastMessage).toContain("회원가입이 완료되었습니다.");
});
