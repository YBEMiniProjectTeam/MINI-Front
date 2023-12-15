import { Nullable } from '@/types/nullable';
import { WishListPage } from './../models/wishListPage';
import { WishRequest } from './../services/wishRequest';
import { test, expect } from "@playwright/test";

test.describe("검색결과 프로세스", () => {
  let wishListPage: any;
  let authToken: Nullable<string> = null;

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

    wishListPage = new WishListPage(page);
    await wishListPage.navigateTo();
    const wishRequest = new WishRequest(request);
    if (authToken) {
      await wishRequest.setAuthToken(authToken);
    }
    await wishRequest.getWishList();
  }); 

  test("1. 위시리스트에서 삭제", async () => {
    await wishListPage.waitForImageLoad();
    await wishListPage.clickUnlikeButton();

    const noResultText = "위시리스트가 없습니다."
  
    const noResult = await wishListPage.getText(noResultText);
    await expect(noResult).toContainText(noResultText);
  });

  test("2. 위시리스트가 존재하지 않는 경우", async () => {   
    await wishListPage.waitForPageLoad();

    const noResultText = "위시리스트가 없습니다."
  
    const noResult = await wishListPage.getText(noResultText);
    await expect(noResult).toContainText(noResultText);
  });
});




