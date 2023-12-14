import { test, expect } from "@tests/helpers/customTest";
import { CartPage } from "../models/cartPage";
import { PaymentPage } from "../models/paymentPage";
import { PaymentRequest } from "../services/paymentRequest";
import { CompletedPaymentPage } from "../models/completedPaymentPage";
import { CompletedPaymentRequest } from "../services/completedPaymentRequest";

test.describe("결제 프로세스", () => {
  let paymentPage: any;
  let cartIds: number[];
  let requestPayload: any;
  let authToken: string | null = null;

  test.beforeAll(async ({ page, context, request }) => {
    authToken = await context.storageState().then((state) => {
      const localStorage = state.origins.find(
        (origin) => origin.origin === "http://localhost:5173"
      )?.localStorage;
      return (
        localStorage?.find((storage) => storage.name === "access-token")
          ?.value ?? null
      );
    });

    await page.route("**/carts/orders/payments", (route, request) => {
      requestPayload = JSON.parse(request.postData() ?? "{}");
      route.continue();
    });

    const cartPage = new CartPage(page);
    await cartPage.navigateTo();
    await cartPage.waitForPageLoad();
    await cartPage.clickReserveButton();

    paymentPage = new PaymentPage(page);
    cartIds = await paymentPage.extractCartIdsFromUrl();
    const paymentRequest = new PaymentRequest(request);
    if (authToken) {
      await paymentRequest.setAuthToken(authToken);
    }
    await paymentRequest.getPaymentInfo(cartIds);
    await paymentPage.waitForPageLoad();
  });

  test("1-1. 필수 약관 미동의 시", async () => {
    await paymentPage.submitPayment();
    await paymentPage.agreeToTerms();
  });

  test("2-1. 유효하지 않은 폼 제출 시 에러 메시지 출력", async () => {
    await paymentPage.allAgreeToTerms();
    await paymentPage.toggleDifferentGuestCheckbox();
    await paymentPage.submitPayment();
    await paymentPage.checkErrorMessage(
      "text=이름을 입력해주세요",
      "이름을 입력해주세요."
    );
    await paymentPage.checkErrorMessage(
      "text=이메일을 입력해주세요",
      "이메일을 입력해주세요."
    );
  });

  test("2-2. 유효하지 않은 이메일 입력 시 에러 메시지 출력", async () => {
    await paymentPage.allAgreeToTerms();
    await paymentPage.toggleDifferentGuestCheckbox();
    await paymentPage.fillGuestForm("김땡땡", "유효하지않은이메일");
    await paymentPage.submitPayment();
    await paymentPage.checkErrorMessage(
      "text=유효한 이메일 주소를 입력해주세요",
      "유효한 이메일 주소를 입력해주세요."
    );
  });
  test("3-1. 결제 정보 일치 확인(예약자!=투숙자)", async () => {
    await paymentPage.allAgreeToTerms();
    await paymentPage.toggleDifferentGuestCheckbox();
    await paymentPage.fillGuestForm("김땡땡", "email@eamil.com");
    await paymentPage.submitPayment();

    expect(requestPayload).toEqual({
      cart_ids: cartIds,
      guest_name: "김땡땡",
      guest_email: "email@eamil.com"
    });
  });
  test("3-2. 결제 정보 일치 확인(예약자==투숙자)", async () => {
    await paymentPage.allAgreeToTerms();
    await paymentPage.submitPayment();
    const { name, email } = await paymentPage.getNameAndEmail();
    expect(requestPayload).toEqual({
      cart_ids: cartIds,
      guest_name: name,
      guest_email: email
    });
    await paymentPage.waitForNavigation();
  });

  test("4. 결제완료 페이지 정보 확인", async ({ page, request }) => {
    await paymentPage.allAgreeToTerms();
    await paymentPage.submitPayment();

    const completedPaymentPage = new CompletedPaymentPage(page);
    const count = cartIds.length;
    await completedPaymentPage.navigateTo(count);
    await completedPaymentPage.waitForPageLoad();

    const completedPaymentRequest = new CompletedPaymentRequest(request);
    if (authToken) {
      await completedPaymentRequest.setAuthToken(authToken);
    }
    const apiData =
      await completedPaymentRequest.getCompletedPaymentInfo(count);
    const pageData = await completedPaymentPage.extractCompletedPaymentInfo();

    apiData.data.forEach((apiItem: any, index: number) => {
      const pageItem = pageData[index];
      console.log(pageItem);
      expect(pageItem.guestName).toEqual(apiItem.guest_name);
      expect(pageItem.hotelName).toEqual(apiItem.accommodation_name);

      expect(pageItem.checkInDate).toEqual(
        expect.stringContaining(apiItem.room_info.checkIn.split(" ")[0])
      );
      expect(pageItem.checkOutDate).toEqual(
        expect.stringContaining(apiItem.room_info.checkOut.split(" ")[0])
      );
    });
  });

  // FIXME: 재고 없는 경우 에러 핸들링 처리 검증하기
});
