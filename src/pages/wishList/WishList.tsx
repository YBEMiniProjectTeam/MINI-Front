import React from "react";
import * as styles from "./WishList.styles";
import MyWishList from "@components/MyWishList/MyWishList";

export const WishList = () => {
  return (
    <styles.WishListContainer>
      <MyWishList />
    </styles.WishListContainer>
  );
};
