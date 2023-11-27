import { http, HttpResponse } from "msw";
import dummyReservationData from "./data/dummyReservationInfo.json";
import dummyMemberInfo from "./data/dummyMemberInfo.json";
import dummyCompletePaymentInfo from "./data/dummyCompletePaymentInfo.json";

export const handlers = [
  http.get(`/api/orders/:id`, () => {
    return HttpResponse.json(dummyReservationData);
  }),
  http.get(`/api/member`, () => {
    return HttpResponse.json(dummyMemberInfo);
  }),
  http.get(`/api/orders/:id/complete`, () => {
    return HttpResponse.json(dummyCompletePaymentInfo);
  })
];
