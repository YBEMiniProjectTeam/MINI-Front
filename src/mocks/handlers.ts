import { http, HttpResponse } from "msw";
import dummyPaymentData from "./data/dummyPaymentData.json";
import dummyMemberinfoData from "./data/dummyMemberInfoData.json";
import dummyCompletedPaymentData from "./data/dummyCompletedPaymentData.json";

export const handlers = [
  http.post(`/api/carts/orders/reservations`, () => {
    return HttpResponse.json(dummyPaymentData);
  }),
  http.get(`/api/member-info`, () => {
    return HttpResponse.json(dummyMemberinfoData);
  }),
  http.get(`/api/carts/orders/complete`, () => {
    return HttpResponse.json(dummyCompletedPaymentData);
  })
];
