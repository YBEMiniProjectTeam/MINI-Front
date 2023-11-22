import { Button } from "@chakra-ui/react";
import { GoHeart } from "react-icons/go";

export const WishListButton = (): JSX.Element => {
  return (
    <Button
      leftIcon={<GoHeart />}
      bg="white"
      variant="outline"
      outline="none"
      size="lg"
    >
      5,294
    </Button>
  );
};
