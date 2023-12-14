import { test } from "@tests/helpers/customTest";
import { CartPage } from "../models/cartPage";
import { PaymentPage } from "../models/paymentPage";

test.describe("로그인 상태 받아오기", () => {
  let accessToken = "";

  // 모든 테스트 실행 전에 한 번만 로그인을 수행합니다.
  test.beforeAll(async ({ loginRequest }) => {
    accessToken = await loginRequest.getAccessToken();
  });

  // 각 테스트 실행 전에 로그인 상태를 설정합니다.
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.setToken(accessToken);
  });
});

test("장바구니에서 결제 페이지로 이동", async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.navigateToShoppingCart();
  await cartPage.clickReserveButton();

  const paymentPage = new PaymentPage(page);
  await paymentPage.verifyPaymentPageWithQueryString();
});
