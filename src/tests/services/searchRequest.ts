import { APIRequestContext, expect } from "@playwright/test";
import { Nullable } from "@/types/nullable";
import { useSearchParams } from "react-router-dom";

export class SearchRequest {
  request: APIRequestContext;
  authToken: Nullable<string> = null;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async setAuthToken(token: string): Promise<void> {
    this.authToken = token;
  }

  async getSearchResult(): Promise<any> {
    try {
      const headers: { [key: string]: string } = {};

      if (this.authToken) {
        headers["Authorization"] = `Bearer ${this.authToken}`;
      }

      const url = new URL('http://localhost:5173/searchResult');

      const searchParams = url.searchParams;

      const keyword = searchParams?.get("keyword");
      const district = searchParams?.get("district");
      const start_date = searchParams?.get("start_date");
      const end_date = searchParams?.get("end_date");
      const category = searchParams?.get("category");

      const queryParams = new URLSearchParams({
        ...(keyword && { keyword }),
        ...(district && { district }),
        ...(start_date && { start_date }),
        ...(end_date && { end_date }),
        ...(category && { category }),
        // FIXME: page_num은 어떻게 처리해야 할까요?
        page_num: String(1),
        page_size: String(10)
      });

      const response = await this.request.get(
        `https://api.anti-bias.kr/api/accommodations?${queryParams.toString()}`,
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
