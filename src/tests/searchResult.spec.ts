import { test, expect } from "@playwright/test";

test("1. 숙소명으로 조회", async ({ page }) => {
  await page.goto("http://localhost:5173/searchResult");
  await page.getByPlaceholder("숙소명 입력").click();
  await page.getByPlaceholder("숙소명 입력").fill("울산 굿모닝 관광호텔");
  await page.getByRole("button", { name: "검색하기", exact: true }).click();
  await page.getByText("울산 굿모닝 관광호텔").click();

  const title = page.getByText("울산 굿모닝 관광호텔");

  await expect(title).toContainText("울산 굿모닝 관광호텔");
});

test("2. 지역으로 조회", async ({ page }) => {
  await page.goto("http://localhost:5173/searchResult");
  await page.getByText("지역 선택").click();
  await page.getByText("대전광역시").click();
  await page.getByText("서구").click();
  await page.getByRole("button", { name: "검색하기", exact: true }).click();
  await page.getByText("유탑부티크호텔앤레지던스").click();

  const title = page.getByText("유탑부티크호텔앤레지던스");

  await expect(title).toContainText("유탑부티크호텔앤레지던스");
});

test("3. 날짜로 조회", async ({ page }) => {
  await page.goto("http://localhost:5173/searchResult");
  await page.getByText("날짜 선택").click();
  await page.getByText("›").click();
  await page.getByText("18").click();
  await page.getByText("22").click();
  await page.getByRole("button", { name: "설정하기", exact: true }).click();
  await page.getByRole("button", { name: "검색하기", exact: true }).click();
  await page.getByText("그랜드 인터컨티넨탈 서울 파르나스").click();

  const title = page.getByText("그랜드 인터컨티넨탈 서울 파르나스").first();

  await expect(title).toContainText("그랜드 인터컨티넨탈 서울 파르나스");
});

test("4. 카테고리로 조회", async ({ page }) => {
  await page.goto("http://localhost:5173/searchResult?category=호텔");
  const categories = await page.getByRole("combobox");
  await categories.selectOption("리조트");
  await page.getByRole("button", { name: "검색하기", exact: true }).click();
  await page.getByText("소나무리조트").click();

  const title = page.getByText("소나무리조트").first();

  await expect(title).toContainText("소나무리조트");
});

test("5. 무한스크롤 동작", async ({ page }) => {
  await page.goto("http://localhost:5173/searchResult");
  await page.waitForSelector("css=img"); // dom이 로드될 때까지 대기
  await page.evaluate(() => {
    window.scrollBy(0, 7000);
  });
  await page.getByText("풍남헌").click();

  const title = page.getByText("풍남헌").first();

  await expect(title).toContainText("풍남헌");
});

test("6. 좋아요 추가", async ({ page }) => {
  await page.goto("http://localhost:5173/searchResult");
  await page.getByText("로그인/회원가입").click();
  await page.getByPlaceholder("이메일").click();
  await page.getByPlaceholder("이메일").fill("qwerty@naver.com");

  await page.getByPlaceholder("비밀번호").click();
  await page.getByPlaceholder("비밀번호").fill("1q2w3e4r!");

  await page.getByRole("button", { name: "로그인", exact: true }).click();

  await page.locator(".css-v4qxc").first().click();

  // FIXME: localhost에서 테스트 시 로그인 불가
  const alert = page.getByText("추가");
  await expect(alert).toContainText("추가");
});

test("7. 좋아요 삭제", async ({ page }) => {
  await page.goto("http://localhost:5173/searchResult");
  await page.getByText("로그인/회원가입").click();
  await page.getByPlaceholder("이메일").click();
  await page.getByPlaceholder("이메일").fill("qwerty@naver.com");

  await page.getByPlaceholder("비밀번호").click();
  await page.getByPlaceholder("비밀번호").fill("1q2w3e4r!");

  await page.getByRole("button", { name: "로그인", exact: true }).click();

  await page.locator(".css-1l7kv9f").first().click();

  // FIXME: localhost에서 테스트 시 로그인 불가
  const alert = page.getByText("삭제");
  await expect(alert).toContainText("삭제");
});

test("8. 검색결과가 존재하지 않는 경우", async ({ page }) => {
  await page.goto("http://localhost:5173/searchResult");
  await page.getByPlaceholder("숙소명 입력").click();
  await page.getByPlaceholder("숙소명 입력").fill("알락꼬리꼬마도요");
  await page.getByRole("button", { name: "검색하기", exact: true }).click();

  const noResult = page.getByText("검색 결과가 없습니다");

  await expect(noResult).toContainText("검색 결과가 없습니다");
});
