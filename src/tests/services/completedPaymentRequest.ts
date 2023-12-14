import { APIRequestContext, expect } from "@playwright/test";

export class CompletedPaymentRequest {
  request: APIRequestContext;
  authToken: string | null = null;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async setAuthToken(token: string): Promise<void> {
    this.authToken = token;
  }

  async getCompletedPaymentInfo(count: number): Promise<any> {
    try {
      const headers: { [key: string]: string } = {};
      if (this.authToken) {
        headers["Authorization"] = `Bearer ${this.authToken}`;
      }
      const response = await this.request.get(
        `https://api.anti-bias.kr/api/carts/orders/payments?count=${count}`,
        { headers: headers }
      );
      const body = await response.text();
      console.log(body);
      expect(response.ok()).toBeTruthy();
      return JSON.parse(body);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
