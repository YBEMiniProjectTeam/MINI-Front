import * as styles from "./ShoppingCart.styles";
import { Checkbox } from "@chakra-ui/react";
import { ShoppingCartList } from "./ShoppingCartList";
import { useEffect, useState } from "react";
import {
  ShoppingCartApi,
  DeleteCartApi,
  QuantityCartApi
} from "@/api/shoppingCart/shoppingCartApi";

import { useCookies } from "react-cookie";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Accommodation } from "./ShoppinCart.types";

// const initialData: Accommodation[] = [
//   {
//     accommodationName: "조선 호텔 (숙소명)",
//     roomInfos: [
//       {
//         cartId: 1,
//         quantity: 2,
//         address: "서울시 동대문구 (숙소 주소)",
//         roomName: "스위트룸 1",
//         accommodationThumbnailUrl: "숙소 썸네일 Image URL",
//         price: 50000,
//         checkInDate: "2023-11-11",
//         checkOutDate: "2023-11-15",
//         checkInTime: "15:00",
//         checkOutTime: "11:00",
//         capacity: 2,
//         capacityMax: 4,
//         isChecked: false
//       }
//     ]
//   },
//   {
//     accommodationName: "신라 호텔",
//     roomInfos: [
//       {
//         cartId: 2,
//         quantity: 2,
//         address: "서울시 동대문구 (숙소 주소)",
//         roomName: "스위트룸 2",
//         accommodationThumbnailUrl: "숙소 썸네일 Image URL",
//         price: 50000,
//         checkInDate: "2023-11-11",
//         checkOutDate: "2023-11-15",
//         checkInTime: "15:00",
//         checkOutTime: "11:00",
//         capacity: 2,
//         capacityMax: 4,
//         isChecked: false
//       },
//       {
//         cartId: 3,
//         quantity: 2,
//         address: "서울시 동대문구 (숙소 주소)",
//         roomName: "스위트룸3",
//         accommodationThumbnailUrl: "숙소 썸네일 Image URL",
//         price: 50000,
//         checkInDate: "2023-11-11",
//         checkOutDate: "2023-11-15",
//         checkInTime: "15:00",
//         checkOutTime: "11:00",
//         capacity: 2,
//         capacityMax: 4,
//         isChecked: false
//       }
//     ]
//   }
// ];

export const ShoppingCartComp = (): JSX.Element => {
  const [data, setData] = useState<Accommodation[]>([]);

  const [price, setPrice] = useState(0);

  const [isCheckAllBox, setIsCheckAllBox] = useState(false);

  const [cookies] = useCookies(["access-token"]);
  const [accessToken, setAccessToken] = useState<string>();
  const [cartIdList, setCartIdList] = useState<number[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (cookies["access-token"]) {
      setAccessToken(cookies["access-token"]);
    } else {
      navigate("/notFound");
    }
  }, [cookies]);

  useEffect(() => {
    fetchData();

    let totalPrice = 0;

    Object.values(data).forEach((hotel) => {
      Object.values(hotel.roomInfos).forEach((room) => {
        totalPrice += room.quantity * room.price;
      });
    });

    setPrice(totalPrice);
  }, [data]);

  const fetchData = async () => {
    if (accessToken) {
      const response = await ShoppingCartApi(accessToken);
      if (response.data) {
        setData(response.data);
      }
    }
  };

  const handleCheckAllRooms = (): void => {
    // setData((prevData) => {
    //   const isAllRoomsChecked = prevData.every((hotel) =>
    //     hotel.roomInfos.every((room) => room.isChecked)
    //   );

    //   const updatedData = prevData.map((hotel) => ({
    //     ...hotel,
    //     roomInfos: hotel.roomInfos.map((room) => ({
    //       ...room,
    //       isChecked: !isAllRoomsChecked
    //     }))
    //   }));

    //   setIsCheckAllBox(!isAllRoomsChecked);

    //   return updatedData;
    // });
    const newArr: number[] = [];
    if (!isCheckAllBox) {
      data.map((hotel) => {
        hotel.roomInfos.map((room) => {
          newArr.push(room.cartId);
        });
      });
    }

    setCartIdList(newArr);
    setIsCheckAllBox(!isCheckAllBox);
    console.log(cartIdList);
  };

  // const handleCheckRoom = (hotelIndex: number, roomIndex: number): void => {
  //   setData((prevData) => {
  //     const updatedData = [...prevData];
  //     const updatedHotel = { ...updatedData[hotelIndex] };
  //     const updatedRoom = { ...updatedHotel.roomInfos[roomIndex] };

  //     updatedRoom.isChecked = !updatedRoom.isChecked;

  //     updatedHotel.roomInfos[roomIndex] = updatedRoom;

  //     updatedData[hotelIndex] = updatedHotel;

  //     return updatedData;
  //   });

  // };
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

    console.log(cartIdList);
  };

  const handleSelectDelete = (): void => {
    // const accessToken = cookies["access-token"];
    // setData((prevData) => {
    //   const newData: Accommodation[] = [];

    //   for (const hotel of prevData) {
    //     const newRoomInfos: RoomInfo[] = [];

    //     for (const roomInfo of hotel.roomInfos) {
    //       if (roomInfo.isChecked) {
    //         newRoomInfos.push({ ...roomInfo });
    //       }
    //     }

    //     if (newRoomInfos.length > 0) {
    //       newData.push({ ...hotel, roomInfos: newRoomInfos });
    //     }
    //   }

    //   return newData;
    // });
    if (accessToken) {
      const res = DeleteCartApi(accessToken, cartIdList);
      fetchData();
      console.log(res);
    }
  };

  const handleClickRoomDelete = (cartId: number): void => {
    // const accessToken = cookies["access-token"];
    // setData((prevData) => {
    //   const newData = [...prevData];

    //   newData[hotelIndex].roomInfos = newData[hotelIndex].roomInfos.filter(
    //     (_, index) => index !== roomIndex
    //   );
    //   return newData;
    // });
    if (accessToken) {
      const res = DeleteCartApi(accessToken, [cartId]);
      fetchData();
      console.log(res);
    }
  };
  const handleClickQuantity = async (sign: string, cartId: number) => {
    const accessToken = cookies["access-token"];

    if (sign === "increase") {
      const response = await QuantityCartApi(accessToken, "increase", [cartId]);

      if (response) {
        fetchData();
        console.log(response);
      }
    } else if (sign === "decrease") {
      const response = await QuantityCartApi(accessToken, "decrease", [cartId]);
      if (response) {
        fetchData();
        console.log(response);
      }
    }
  };
  const handleClickReservation = () => {
    const queryString = cartIdList
      .sort()
      .map((cartId) => `cartId=${cartId}`)
      .join("&");
    navigate(`/orders?${queryString}`);
  };
  return (
    <styles.ShoppingCartContainer>
      <h3>장바구니</h3>
      <div className="selectCheckWrap WrapStyle">
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

      {data.map((hotel, hotelIndex) => (
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
      ))}

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
