import * as styles from "./ShoppingCart.styles";
import { Checkbox } from "@chakra-ui/react";
import { ShoppingCartList } from "./ShoppingCartList";
import { useEffect, useState } from "react";

import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Accommodation, RoomInfo } from "./ShoppinCart.types";
import { toast } from "react-hot-toast";
import { useShoppingCartList } from "@hooks/cart/useShoppingCartList";

import { getAuthLocalStorage } from "./../../utils/getAuthLocalStorage";
import { useDeleteCart } from "@hooks/cart/useDeleteCartMutation";

import { useQuantityCart } from "@hooks/cart/useQuantityCartMutation";

import { formatPrice } from "./../../utils/priceFormatter";
export const ShoppingCartComp = (): JSX.Element => {
  const [price, setPrice] = useState(0);

  const [isCheckAllBox, setIsCheckAllBox] = useState(false);

  const [accessToken, setAccessToken] = useState<string>("");
  const [cartIdList, setCartIdList] = useState<number[]>([]);

  const navigate = useNavigate();

  const { accessTokenCookie } = getAuthLocalStorage();

  const { data, refetch } = useShoppingCartList(accessTokenCookie as string);

  useEffect(() => {
    const access = localStorage.getItem("access-token");

    if (access) {
      setAccessToken(access);
      refetch();
    } else {
      navigate("/notFound");
    }
  }, [accessToken, navigate]);

  useEffect(() => {
    let totalPrice = 0;

    if (data) {
      data.data.map((hotel: Accommodation) => {
        hotel.room_infos.map((room: RoomInfo) => {
          cartIdList.map((cartId) => {
            if (room.cartId == cartId) {
              totalPrice += room.quantity * room.price;
            }
          });
        });
      });
    }

    setPrice(totalPrice);
  }, [data, cartIdList]);

  const handleCheckAllRooms = (): void => {
    const newArr: number[] = [];
    if (!isCheckAllBox) {
      data.data.map((hotel: Accommodation) => {
        hotel.room_infos.map((room: RoomInfo) => {
          newArr.push(room.cartId);
        });
      });
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
        accessToken: accessToken,
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
        accessToken: accessToken,
        cart_ids: [cartId]
      });
      refetch();
    }
  };

  const handleClickQuantity = async (sign: string, cartId: number) => {
    if (sign === "increase") {
      await quantityCart({
        accessToken: accessToken,
        sign: "increase",
        cart_ids: cartId
      });
      refetch();
    } else if (sign === "decrease") {
      await quantityCart({
        accessToken: accessToken,
        sign: "decrease",
        cart_ids: cartId
      });
      refetch();
    }
  };

  const handleClickReservation = () => {
    if (cartIdList.length > 0) {
      const queryString = cartIdList
        .sort()
        .map((cartId) => `cartId=${cartId}`)
        .join("&");
      navigate(`/orders?${queryString}`);
    } else {
      toast.error("장바구니에 물건을 담아주세요!");
    }
  };

  return (
    <styles.ShoppingCartContainer>
      <div className="WrapStyle">
        <div className="title">장바구니</div>
        <div className="selectCheckWrap">
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
        </div>
      </div>
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
