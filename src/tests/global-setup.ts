import { chromium, FullConfig } from "@playwright/test";
import { LoginPage } from "@tests/models/loginPage";

async function globalSetup(config: FullConfig) {
  const { storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login("user5@naver.com", "asdqwe123!@#");
  await loginPage.getAccessToken();
  await page.context().storageState({ path: storageState as string });
  await browser.close();
}

export default globalSetup;
