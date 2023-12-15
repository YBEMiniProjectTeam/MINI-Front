import { APIRequestContext, expect } from "@playwright/test";

export class PaymentRequest {
  request: APIRequestContext;
  authToken: string | null = null;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async setAuthToken(token: string): Promise<void> {
    this.authToken = token;
  }

  async getPaymentInfo(cartIds: number[]): Promise<any> {
    const headers: { [key: string]: string } = {};
    if (this.authToken) {
      headers["Authorization"] = `Bearer ${this.authToken}`;
    }

    const response = await this.request.post(
      "https://api.anti-bias.kr/api/carts/orders/reservations",
      {
        data: { cart_ids: cartIds },
        headers: headers
      }
    );
    expect(response.ok()).toBeTruthy();
    return await response.json();
  }
}
