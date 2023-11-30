import * as styles from "./ShoppingCart.styles";
import { Checkbox } from "@chakra-ui/react";
import { ShoppingCartList } from "./ShoppingCartList";
import { useEffect, useState } from "react";
import {
  ShoppingCartApi,
  DeleteCartApi,
  QuantityCartApi
} from "@/api/shoppingCart/shoppingCartApi";

import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Accommodation } from "./ShoppinCart.types";

export const ShoppingCartComp = (): JSX.Element => {
  const [data, setData] = useState<Accommodation[]>([]);

  const [price, setPrice] = useState(0);

  const [isCheckAllBox, setIsCheckAllBox] = useState(false);

  // const [cookies] = useCookies(["access-token"]);
  const [accessToken, setAccessToken] = useState<string>("");
  const [cartIdList, setCartIdList] = useState<number[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const access = localStorage.getItem("access-token");

    if (access) {
      setAccessToken(access);
      fetchData(access);
    } else {
      navigate("/notFound");
    }
  }, [accessToken, navigate]);

  useEffect(() => {
    let totalPrice = 0;

    data.map((hotel) => {
      hotel.room_infos.map((room) => {
        totalPrice += room.quantity * room.price;
      });
    });

    setPrice(totalPrice);
  }, [data]);

  const fetchData = async (accessToken: string) => {
    try {
      const response = await ShoppingCartApi(accessToken);
      if (response.data && response.data.data) {
        setData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCheckAllRooms = (): void => {
    const newArr: number[] = [];
    if (!isCheckAllBox) {
      data.map((hotel) => {
        hotel.room_infos.map((room) => {
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
      await DeleteCartApi(accessToken, cartIdList);
      fetchData(accessToken);
    }
  };

  const handleClickRoomDelete = async (cartId: number): Promise<void> => {
    if (accessToken) {
      await DeleteCartApi(accessToken, [cartId]);
      fetchData(accessToken);
    }
  };
  const handleClickQuantity = async (sign: string, cartId: number) => {
    if (sign === "increase") {
      const response = await QuantityCartApi(accessToken, "increase", cartId);

      if (response) {
        fetchData(accessToken);
      }
    } else if (sign === "decrease") {
      const response = await QuantityCartApi(accessToken, "decrease", cartId);
      if (response) {
        fetchData(accessToken);
      }
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
      Swal.fire("장바구니에 물건을 담아주세요");
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
      {data.length > 0 ? (
        data.map((hotel, hotelIndex) => (
          <ShoppingCartList
            key={hotelIndex}
            data={hotel}
            isCheckAllBox={isCheckAllBox}
            setData={setData}
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
            <span className="colorGray">{price}</span>
          </div>
        </div>
        <div className="roomPrice expectedPayment">
          <div>
            <span>결제 예상 금액</span>
          </div>
          <div>
            <span>{price}</span>
          </div>
        </div>

        <Button className="reservationButton" onClick={handleClickReservation}>
          예약하기
        </Button>
      </div>
    </styles.ShoppingCartContainer>
  );
};
