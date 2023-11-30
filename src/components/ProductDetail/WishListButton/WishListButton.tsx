import { useState } from "react";
import { getAuthLocalStorage } from "@utils/getAuthLocalStorage";
import { usePostWish } from "@hooks/useWishMutation";
import { useDeleteWish } from "@hooks/useWishMutation";
import { WishListButtonProps } from "./WishListButton.types";
import { Box } from "@chakra-ui/react";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { toast } from "react-hot-toast";

const WishListButton = ({ id, wish }: WishListButtonProps): JSX.Element => {
  const [isWish, setIsWish] = useState(wish);
  const { accessTokenCookie, headers } = getAuthLocalStorage();
  const { mutate: postWish } = usePostWish();
  const { mutate: deleteWish } = useDeleteWish();

  const handleWishButton = (accommodationId: number) => {
    if (!accessTokenCookie) {
      toast.error("로그인이 필요한 서비스입니다.");
      return;
    }
    if (isWish) {
      deleteWish({ accommodationId, headers });
    } else {
      postWish({ accommodationId, headers });
    }
    setIsWish((prevState) => !prevState);
  };

  return (
    <Box
      as="button"
      display="flex"
      alignItems="center"
      gap="5px"
      marginTop="14px"
      padding="5px 10px"
      borderRadius="10px"
      transition="0.2s"
      _hover={{
        bg: "#F7F7F7"
      }}
      onClick={() => handleWishButton(id)}
    >
      {isWish ? (
        <>
          <GoHeartFill color="#D53F8C" />
          취소
        </>
      ) : (
        <>
          <GoHeart />
          저장
        </>
      )}
    </Box>
  );
};

export default WishListButton;
