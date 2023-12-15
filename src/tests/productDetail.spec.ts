import { test, expect } from "@playwright/test";

test("1. 위시리스트 추가", async ({ page }) => {
  await page.goto("http://localhost:5173/login");
  await page.getByText("로그인/회원가입").click();
  await page.getByPlaceholder("이메일").click();
  await page.getByPlaceholder("이메일").fill("lilviolie@gmail.com");
  await page.getByPlaceholder("비밀번호").click();
  await page.getByPlaceholder("비밀번호").fill("password0*0");
  await page.getByRole("button", { name: "로그인", exact: true }).click();
  await page.waitForTimeout(1000);

  await page.goto(
    "http://localhost:5173/products?id=1596&startDate=null&endDate=null"
  );
  await page.getByRole("button", { name: "저장" }).click();

  const toastElement = await page.waitForSelector(".go2072408551", {
    state: "visible"
  });
  const toastText = await toastElement.textContent();
  expect(toastText).toContain("위시리스트에 추가되었습니다.");
});

test("2. 위시리스트 삭제", async ({ page }) => {
  await page.goto("http://localhost:5173/login");
  await page.getByText("로그인/회원가입").click();
  await page.getByPlaceholder("이메일").click();
  await page.getByPlaceholder("이메일").fill("lilviolie@gmail.com");
  await page.getByPlaceholder("비밀번호").click();
  await page.getByPlaceholder("비밀번호").fill("password0*0");
  await page.getByRole("button", { name: "로그인", exact: true }).click();
  await page.waitForTimeout(1000);

  await page.goto(
    "http://localhost:5173/products?id=1596&startDate=null&endDate=null"
  );
  await page.getByRole("button", { name: "취소" }).click();

  const toastElement = await page.waitForSelector(".go2072408551", {
    state: "visible"
  });
  const toastText = await toastElement.textContent();
  expect(toastText).toContain("위시리스트에서 삭제되었습니다.");
});

test("3. 장바구니 추가", async ({ page }) => {
  await page.goto("http://localhost:5173/login");
  await page.getByText("로그인/회원가입").click();
  await page.getByPlaceholder("이메일").click();
  await page.getByPlaceholder("이메일").fill("lilviolie@gmail.com");
  await page.getByPlaceholder("비밀번호").click();
  await page.getByPlaceholder("비밀번호").fill("password0*0");
  await page.getByRole("button", { name: "로그인", exact: true }).click();
  await page.waitForTimeout(1000);

  await page.goto(
    "http://localhost:5173/products?id=1596&startDate=null&endDate=null"
  );
  await page.locator(".css-f1wnsy").first().click();

  const toastElement = await page.waitForSelector(".go2072408551", {
    state: "visible"
  });
  const toastText = await toastElement.textContent();
  expect(toastText).toContain("장바구니에 추가되었습니다.");
});

test("4. 결제하기", async ({ page }) => {
  await page.goto("http://localhost:5173/login");
  await page.getByText("로그인/회원가입").click();
  await page.getByPlaceholder("이메일").click();
  await page.getByPlaceholder("이메일").fill("lilviolie@gmail.com");
  await page.getByPlaceholder("비밀번호").click();
  await page.getByPlaceholder("비밀번호").fill("password0*0");
  await page.getByRole("button", { name: "로그인", exact: true }).click();
  await page.waitForTimeout(1000);

  await page.goto(
    "http://localhost:5173/products?id=1596&startDate=null&endDate=null"
  );
  await page.getByRole("button", { name: "결제하기" }).first().click();
  await page.waitForSelector(".chakra-text.css-10mm3lk");
  expect(page.url()).toMatch(/^http:\/\/localhost:5173\/orders\?cartId=\d+$/);
});

test("5. 날짜 변경", async ({ page }) => {
  await page.goto(
    "http://localhost:5173/products?id=1596&startDate=null&endDate=null"
  );
  await page.getByTestId("calendar").click();
  await page.waitForSelector(".chakra-modal__content.css-ym2wku");

  await page.getByText("›").click();
  await page.getByText("07").click();
  await page.getByText("08").click();
  await page.getByRole("button", { name: "설정하기", exact: true }).click();

  const calendarButtonText = await page.innerText('[data-testid="calendar"]');
  expect(calendarButtonText).toContain("07");
  expect(calendarButtonText).toContain("08");
});

test("5. 인원 변경", async ({ page }) => {
  await page.goto(
    "http://localhost:5173/products?id=1596&startDate=null&endDate=null"
  );
  await page.getByTestId("count").click();
  await page.waitForSelector(".chakra-modal__content.css-ym2wku");

  await page.getByRole("img").nth(1).click();
  await page.getByRole("button", { name: "설정하기", exact: true }).click();

  const countButtonText = await page.innerText('[data-testid="count"]');
  expect(countButtonText).toContain("3");
});
