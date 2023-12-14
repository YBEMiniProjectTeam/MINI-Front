import { test, expect } from "@playwright/test";

test("1. 카테고리 모든 숙소 이동", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByText("모든 숙소").click();

  const categories = page.getByRole("combobox");
  await categories.selectOption({ index: 0 });
  const selectedOption = await categories.inputValue();
  
  expect(selectedOption).toContain("");
});

test("2. 카테고리 호텔 이동", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByText("호텔").first().click();

  const categories = page.getByRole("combobox");
  await categories.selectOption({ index: 1 });
  const selectedOption = await categories.inputValue();
  
  expect(selectedOption).toContain("호텔");
});

test("3. 카테고리 리조트 이동", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByText("리조트").click();

  const categories = page.getByRole("combobox");
  await categories.selectOption({ index: 2 });
  const selectedOption = await categories.inputValue();
  
  expect(selectedOption).toContain("리조트");
});

test("4. 카테고리 모텔 이동", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByText("모텔").click();

  const categories = page.getByRole("combobox");
  await categories.selectOption({ index: 3 });
  const selectedOption = await categories.inputValue();
  
  expect(selectedOption).toContain("모텔");
});

test("5. 카테고리 펜션 이동", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByText("펜션").first().click();

  const categories = page.getByRole("combobox");
  await categories.selectOption({ index: 4 });
  const selectedOption = await categories.inputValue();
  
  expect(selectedOption).toContain("펜션");
});

test("6. 숙소 캐러셀 다음으로 이동", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.locator("#next-button").click();

  const name = page.locator("#carousel-accommodation-name");

  expect(name).toContainText("아우라 호텔");
});

test("7. 숙소 캐러셀 검색 결과 페이지로 이동", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("button", { name: "모두 보기", exact: true }).first().click();

  const categories = page.getByRole("combobox");
  await categories.selectOption({ index: 1 });
  const selectedOption = await categories.inputValue();
  
  expect(selectedOption).toContain("호텔");
});

test("8. 숙소 캐러셀 상세 페이지로 이동", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.locator("#carousel-accommodation-item").first().click();

  const nameElement = page.locator(".css-1ebn8vi");
  const name = await nameElement.textContent();

  expect(name).toContain("더메이호텔");
}); 

test("9. 숙소 그리드 뷰 호텔 탭으로 변경", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("tab").filter({ hasText: '호텔'}).click();

  const nameElement = await page.locator("#grid-accommodation-name").first();
  const name = await nameElement.textContent();

  expect(name).toContain("메리어트관 제주신화월드 호텔 앤 리조트");
});

test("10. 숙소 그리드 뷰 검색 결과 페이지로 이동", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("button", { name: "모두 보기", exact: true }).nth(1).click();

  // 카테고리
  const categories = await page.getByRole("combobox");
  await categories.selectOption({ index: 4 });
  const selectedOption = await categories.inputValue();
  
  // 지역
  const region = await page.locator(".css-1eziwv").first().textContent();

  expect(selectedOption).toContain("펜션");
  expect(region).toContain("서귀포시");
});

test("11. 숙소 그리드 뷰 상세 페이지로 이동", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.locator("#grid-accommodation-item").first().click();

  const nameElement = page.locator(".css-1ebn8vi");
  const name = await nameElement.textContent();

  expect(name).toContain("제주캐슬펜션");
});