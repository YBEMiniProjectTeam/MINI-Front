import { test, expect } from "@playwright/test";

test("회원가입 성공", async ({ page }) => {
  const userEmail = `test${Math.floor(Math.random() * 10000)}@example.com`;
  const userPassword = "asdqwe123!@#";

  await page.goto("http://localhost:5173/register");

  await page.fill('input[id="email"]', userEmail);
  await page.fill('input[id="password"]', userPassword);
  await page.fill('input[id="confirmPassword"]', userPassword);
  await page.fill('input[id="name"]', "홍길동");
  await page.getByRole("button", { name: "회원가입", exact: true }).click();

  // 모달창
  await page.getByText("14세").click();
  await page.getByRole("button", { name: "확인", exact: true }).click();

  // 모달창 닫아진 상태.
  await page.getByRole("button", { name: "회원가입", exact: true }).click();

  await page.waitForTimeout(1000);
  expect(page.url()).toBe("http://localhost:5173/login");
});