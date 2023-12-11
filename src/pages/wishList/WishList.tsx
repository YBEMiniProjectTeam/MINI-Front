import * as styles from "./WishList.styles";
import MyWishList from "@components/MyWishList/MyWishList";

const WishList = () => {
  return (
    <styles.WishListContainer>
      <MyWishList />
    </styles.WishListContainer>
  );
};

export default WishList;
