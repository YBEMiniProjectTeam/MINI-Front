import { test as base } from "@playwright/test";
import { LoginPage } from "../models/loginPage";
import { LoginRequest } from "../services/loginRequest";

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  loginRequest: async ({ request }, use) => {
    const loginRequest = new LoginRequest(request);
    await use(loginRequest);
  }
});

export { expect } from "@playwright/test";
