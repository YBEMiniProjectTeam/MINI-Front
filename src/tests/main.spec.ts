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
