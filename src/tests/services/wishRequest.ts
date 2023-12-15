import { APIRequestContext, expect } from "@playwright/test";
import { Nullable } from "@/types/nullable";

export class WishRequest {
  request: APIRequestContext;
  authToken: Nullable<string> = null;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async setAuthToken(token: string): Promise<void> {
    this.authToken = token;
  }

  async getWishList(): Promise<any> {
    try {
      const headers: { [key: string]: string } = {};

      if (this.authToken) {
        headers["Authorization"] = `Bearer ${this.authToken}`;
      }

      const response = await this.request.get(
        `https://api.anti-bias.kr/api/wishes`,
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
