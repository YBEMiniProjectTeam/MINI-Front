import { test, expect } from "@playwright/test";

test("1. 예약 상세 페이지 이동", async ({ page }) => {
  await page.goto("http://localhost:5173/login");
  await page.getByText("로그인/회원가입").click();
  await page.getByPlaceholder("이메일").click();
  await page.getByPlaceholder("이메일").fill("lilviolie@gmail.com");
  await page.getByPlaceholder("비밀번호").click();
  await page.getByPlaceholder("비밀번호").fill("password0*0");
  await page.getByRole("button", { name: "로그인", exact: true }).click();
  await page.waitForTimeout(1000);

  await page.goto("http://localhost:5173/reservations");
  await page
    .getByRole("button", { name: "상세보기", exact: true })
    .nth(0)
    .click();
  expect(page.url()).toMatch(
    /^http:\/\/localhost:5173\/reservationDetails\?id=\d+&image=[^&]+$/
  );
});

test("2. 예약 취소", async ({ page }) => {
  await page.goto("http://localhost:5173/login");
  await page.getByText("로그인/회원가입").click();
  await page.getByPlaceholder("이메일").click();
  await page.getByPlaceholder("이메일").fill("lilviolie@gmail.com");
  await page.getByPlaceholder("비밀번호").click();
  await page.getByPlaceholder("비밀번호").fill("password0*0");
  await page.getByRole("button", { name: "로그인", exact: true }).click();
  await page.waitForTimeout(1000);

  await page.goto("http://localhost:5173/reservations");
  if (await page.$('div:has-text("이용 예정")')) {
    await page.getByRole("button", { name: "상세보기", exact: true }).click();
    await page.goto(
      `${/^http:\/\/localhost:5173\/reservationDetails\?id=\d+&image=[^&]+$/}`
    );
    await page.getByRole("button", { name: "예약 취소", exact: true }).click();
    await page.waitForSelector(".chakra-modal__content.css-pv22qu");
    await page.getByRole("button", { name: "확인", exact: true }).click();
    expect(page.url()).toBe("http://localhost:5173/reservations");
  }
});
