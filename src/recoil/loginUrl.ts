import { atom } from "recoil";

export const loginUrlState = atom({
  key: "loginUrlState",
  default: "/"
});
export const loginUrlSearchState = atom({
  key: "loginUrlSearchState",
  default: ""
});
