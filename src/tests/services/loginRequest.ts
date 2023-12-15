import { expect, APIRequestContext } from "@playwright/test";

export class LoginRequest {
  request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getAccessToken() {
    const response = await this.request.post(
      "https://api.anti-bias.kr/api/login",
      {
        data: {
          email: "user5@naver.com",
          password: "asdqwe123!@#"
        }
      }
    );
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    return data.accessToken;
  }
}
