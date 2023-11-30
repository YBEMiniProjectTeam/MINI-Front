import { atom } from "recoil";

export const districtState = atom({
  key: "districtState",
  default: ""
});

export const categoryState = atom({
  key: "categoryState",
  default: ""
});

export const isRefetchedState = atom({
  key: "isRefetchedState",
  default: false
});
