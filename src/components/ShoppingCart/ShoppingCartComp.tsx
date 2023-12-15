import * as styles from "./ShoppingCart.styles";
import { Button, Checkbox, Flex, Text } from "@chakra-ui/react";
import { ShoppingCartList } from "./ShoppingCartList";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useShoppingCartList } from "@hooks/cart/useShoppingCartList";
import { useDeleteCart } from "@hooks/cart/useDeleteCartMutation";

import { useQuantityCart } from "@hooks/cart/useQuantityCartMutation";
import { formatPrice } from "@utils/priceFormatter";
// import { useCookies } from "react-cookie";
import { RoomInfo, Accommodation } from "./ShoppinCart.types";
import { FaTrashAlt } from "react-icons/fa";

export const ShoppingCartComp = (): JSX.Element => {
  const [price, setPrice] = useState(0);
  const [isCheckAllBox, setIsCheckAllBox] = useState(false);

  const [accessToken, setAccessToken] = useState<string>("");
  const [cartIdList, setCartIdList] = useState<number[]>([]);

  const navigate = useNavigate();

  // const [cookies] = useCookies(["access-token"]);

  const { data, refetch } = useShoppingCartList();

  useEffect(() => {
    const token = window.localStorage.getItem("access-token");
    if (token) {
      setAccessToken(token);
      refetch();
    } else {
      navigate("/notFound");
    }
  }, [window.localStorage.getItem("access-token")]);

  useEffect(() => {
    const totalPrice = data
      ? data.data.reduce((acc: number, hotel: Accommodation) => {
          hotel.room_infos.forEach((room) => {
            if (cartIdList.includes(room.cartId)) {
              acc += room.quantity * room.price;
            }
          });
          return acc;
        }, 0)
      : 0;

    setPrice(totalPrice);
  }, [data, cartIdList]);

  useEffect(() => {
    if (data?.data) {
      const newCartIdList = data.data.flatMap((hotel: Accommodation) =>
        hotel.room_infos.map((room: RoomInfo) => room.cartId)
      );

      setCartIdList(newCartIdList);
    }
  }, []);

  const handleCheckAllRooms = (): void => {
    const newArr: number[] = [];

    if (!isCheckAllBox) {
      data.data.flatMap((hotel: Accommodation) =>
        hotel.room_infos.forEach((room: RoomInfo) => newArr.push(room.cartId))
      );
    }

    setCartIdList(newArr);
    setIsCheckAllBox(!isCheckAllBox);
  };

  const handleCheckRoom = (cartId: number): void => {
    setCartIdList((prev) => {
      const newArr: number[] = [...prev];

      const index = newArr.findIndex((data) => data === cartId);

      if (index !== -1) {
        newArr.splice(index, 1);
      } else {
        newArr.push(cartId);
      }

      return newArr;
    });
  };

  const handleSelectDelete = async (): Promise<void> => {
    if (accessToken) {
      await deleteCart({
        cart_ids: cartIdList
      });
      refetch();
    }
  };

  const { mutate: deleteCart } = useDeleteCart();
  const { mutate: quantityCart } = useQuantityCart();

  const handleClickRoomDelete = async (cartId: number): Promise<void> => {
    if (accessToken) {
      await deleteCart({
        cart_ids: [cartId]
      });
      refetch();
    }
  };

  const handleClickQuantity = async (
    sign: "increase" | "decrease",
    cartId: number
  ) => {
    if (sign === "increase") {
      await quantityCart({
        sign: "increase",
        cart_ids: cartId
      });
      refetch();
    } else if (sign === "decrease") {
      await quantityCart({
        sign: "decrease",
        cart_ids: cartId
      });
      refetch();
    }
  };

  const handleClickReservation = () => {
    if (cartIdList.length > 0) {
      const queryString = cartIdList
        .sort((a, b) => a - b)
        .map((cartId) => `cartId=${cartId}`)
        .join("&");
      navigate(`/orders?${queryString}`);
    } else {
      toast.error("장바구니에 물건을 담아주세요!");
    }
  };

  const [draggedItem, setDraggedItem] = useState<number | null>(null);

  const handleDragStart = (cartId: number) => {
    setDraggedItem(cartId);
  };
  const handleDragEnd = () => {
    setDraggedItem(null);
  };
  const handleDrop = () => {
    if (draggedItem) {
      handleClickRoomDelete(draggedItem);
      setDraggedItem(null);
    }
  };

  return (
    <styles.ShoppingCartContainer>
      <div className="WrapStyle">
        <Text fontSize="24px" fontWeight="700">
          장바구니
        </Text>
        <Flex padding="1rem 0" justifyContent="space-between">
          <div>
            <Checkbox
              onChange={() => {
                handleCheckAllRooms();
              }}
            >
              전체 선택
            </Checkbox>
          </div>
          <div>
            <button onClick={handleSelectDelete}>선택 삭제</button>
          </div>
        </Flex>
      </div>
      {draggedItem && (
        <div
          className="DeleteContainer"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <FaTrashAlt size="64px" />
        </div>
      )}
      {data.data.length > 0 ? (
        data.data.map((hotel: Accommodation, hotelIndex: number) => (
          <ShoppingCartList
            key={hotelIndex}
            data={hotel}
            isCheckAllBox={isCheckAllBox}
            handleCheckRoom={handleCheckRoom}
            handleClickRoomDelete={handleClickRoomDelete}
            handleClickQuantity={handleClickQuantity}
            cartIdList={cartIdList}
            handleDragStart={handleDragStart}
            handleDragEnd={handleDragEnd}
          />
        ))
      ) : (
        <div className="noneCartList WrapStyle">
          장바구니에 아무것도 담겨져 있지 않습니다.
        </div>
      )}
      <div className="WrapStyle">
        <h3>예약 상품</h3>
        <div className="roomPrice">
          <div>
            <span className="colorGray">상품 금액</span>
          </div>
          <div>
            <span className="colorGray">{formatPrice(price)}</span>
          </div>
        </div>
        <div className="roomPrice expectedPayment">
          <div>
            <span>결제 예상 금액</span>
          </div>
          <div>
            <span>{formatPrice(price)}</span>
          </div>
        </div>

        <Button className="reservationButton" onClick={handleClickReservation}>
          예약하기
        </Button>
      </div>
    </styles.ShoppingCartContainer>
  );
};
