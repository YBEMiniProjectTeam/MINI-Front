import { Nullable } from '@/types/nullable';
import { SearchResultPage } from './../models/searchResultPage';
import { SearchRequest } from '@tests/services/searchRequest';
import { test, expect } from "@playwright/test";

test.describe("검색결과 프로세스", () => {
  let searchResultPage: any;
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

    searchResultPage = new SearchResultPage(page);
    await searchResultPage.navigateTo();
    const searchRequest = new SearchRequest(request);
    if (authToken) {
      await searchRequest.setAuthToken(authToken);
    }
    await searchRequest.getSearchResult();
    await searchResultPage.waitForImageLoad();   
  });

  test("1. 숙소명으로 조회", async () => {
    const keyword = "울산 굿모닝 관광호텔"

    await searchResultPage.clickKeywordInput();
    await searchResultPage.fillKeywordInput(keyword);
    await searchResultPage.clickSearchButton();

    const title = await searchResultPage.clickTitle(keyword);
      
    await expect(title).toContainText(keyword);
  });

  test("2. 지역으로 조회", async () => {
    await searchResultPage.clickRegionSelect();
    await searchResultPage.clickSearchButton();

    const accommodationName = "유탑부티크호텔앤레지던스"
    const title = await searchResultPage.clickTitle(accommodationName);
  
    await expect(title).toContainText(accommodationName);
  });

  test("3. 날짜로 조회", async () => {
    await searchResultPage.clickDateSelect();
    await searchResultPage.clickSetButton();
    await searchResultPage.clickSearchButton();

    const accommodationName = "그랜드 인터컨티넨탈 서울 파르나스"
    const title = await searchResultPage.clickTitle(accommodationName);
  
    await expect(title).toContainText(accommodationName);
  });

  test("4. 카테고리로 조회", async () => {
    await searchResultPage.selectCategory("리조트");
    await searchResultPage.clickSearchButton();
  
    const accommodationName = "소나무리조트"
    const title = await searchResultPage.clickTitle(accommodationName);
  
    await expect(title).toContainText(accommodationName);
  });

  test("5. 무한스크롤 동작", async () => {
    await searchResultPage.waitForImageLoad();
    await searchResultPage.scrollDown();

    const accommodationName = "풍남헌"
    const title = await searchResultPage.clickTitle(accommodationName);
  
    await expect(title).toContainText("풍남헌");
  });

  
  test("6. 좋아요 추가", async () => {
    await searchResultPage.waitForImageLoad();
    await searchResultPage.clickLikeButton();

    const alertText = "추가"
    const alert = await searchResultPage.getText(alertText);

    await expect(alert).toContainText(alertText);
  });

  test("7. 좋아요 삭제", async () => {
    await searchResultPage.waitForImageLoad();
    await searchResultPage.clickUnlikeButton();
  
    const alertText = "삭제"
    const alert = await searchResultPage.getText(alertText);

    await expect(alert).toContainText(alertText);
  });

  test("8. 검색결과가 존재하지 않는 경우", async () => {
    await searchResultPage.clickKeywordInput();
    await searchResultPage.fillIncorrectKeywordInput("알락꼬리꼬마도요");
    await searchResultPage.clickSearchButton();

    const noResultText = "검색 결과가 없습니다"
  
    const noResult = await searchResultPage.getText(noResultText);
  
    await expect(noResult).toContainText(noResultText);
  });  
});











