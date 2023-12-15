import { test, expect } from "@playwright/test";

test("1. 숙소 상세 보기로 이동", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await page.getByText("로그인/회원가입").click();
  await page.getByPlaceholder("이메일").click();
  await page.getByPlaceholder("이메일").fill("qwerty@naver.com");

  await page.getByPlaceholder("비밀번호").click();
  await page.getByPlaceholder("비밀번호").fill("1q2w3e4r!");

  await page.getByRole("button", { name: "로그인", exact: true }).click();
  await page.waitForSelector("css=img"); // 이미지가 로드될 때까지 대기

  await page.goto("http://localhost:5173/searchResult");
  await page.waitForSelector("css=img");

  await page.locator(".css-v4qxc").first().click();

  await page.getByText("마이스테이").click();
  await page.getByText("위시리스트").click();
  await page.waitForSelector("css=img");

  await page.locator("css=img").first().click();

  const title = page.getByText("남해비치텔").first();
  await expect(title).toContainText("남해비치텔");
});

test("2. 위시리스트에서 삭제", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await page.getByText("로그인/회원가입").click();
  await page.getByPlaceholder("이메일").click();
  await page.getByPlaceholder("이메일").fill("qwerty@naver.com");

  await page.getByPlaceholder("비밀번호").click();
  await page.getByPlaceholder("비밀번호").fill("1q2w3e4r!");

  await page.getByRole("button", { name: "로그인", exact: true }).click();
  await page.waitForSelector("css=img"); // 이미지가 로드될 때까지 대기

  // FIXME: 헤더 수정 후 다시 테스트 필요
  // await page.getByText("마이스테이").click();
  // await page.getByText("위시리스트").click();
  await page.goto("http://localhost:5173/wishList");
  await page.waitForSelector("css=img");

  await page.locator(".css-1l7kv9f").first().click();

  const noResult = page.getByText("위시리스트가 없습니다.");
  await expect(noResult).toContainText("위시리스트가 없습니다.");
});

test("3. 위시리스트가가 존재하지 않는 경우", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await page.getByText("로그인/회원가입").click();
  await page.getByPlaceholder("이메일").click();
  await page.getByPlaceholder("이메일").fill("qwerty@naver.com");

  await page.getByPlaceholder("비밀번호").click();
  await page.getByPlaceholder("비밀번호").fill("1q2w3e4r!");

  await page.getByRole("button", { name: "로그인", exact: true }).click();
  await page.waitForSelector("css=img"); // 이미지가 로드될 때까지 대기

  // FIXME: 헤더 수정 후 다시 테스트 필요
  // await page.getByText("마이스테이").click();
  // await page.getByText("위시리스트").click();
  await page.goto("http://localhost:5173/wishList");

  const noResult = page.getByText("위시리스트가 없습니다.");
  await expect(noResult).toContainText("위시리스트가 없습니다.");
});
