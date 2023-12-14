import { test, expect } from "../helpers/customTest";

test("로그인 성공", async ({ loginPage }) => {
  await loginPage.navigate();
  await loginPage.login("user5@naver.com", "asdqwe123!@#");
  const token = await loginPage.getAccessToken();
  expect(typeof token).toBe("object");
  expect(loginPage.page.url()).toContain("http://localhost:5173/");
});
