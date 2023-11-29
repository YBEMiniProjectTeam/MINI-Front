import { Checkbox } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { CartListProps } from "./ShoppinCart.types";

export const ShoppingCartList = (props: CartListProps): JSX.Element => {
  return (
    <>
      {Object.keys(props.data.roomInfos).length ? (
        <div className="cartInfoContainer WrapStyle">
          <div className="titleWrap">
            <h3>{props.data.accommodationName}</h3>
            {/* <p className="colorGray">{props.data.hotelAddress}</p> */}
          </div>
          {props.data.roomInfos.map((room, roomIndex) => (
            <div key={roomIndex} className="roomListWrap">
              <h3>{room.roomName}</h3>
              <button
                className="roomDeleteButton"
                onClick={() => props.handleClickRoomDelete(room.cartId)}
              >
                X
              </button>
              <div className="dataList">
                <div>
                  <Checkbox
                    onChange={() => props.handleCheckRoom(room.cartId)}
                    isChecked={
                      props.cartIdList
                        ? props.cartIdList.includes(room.cartId)
                        : false
                    }
                  ></Checkbox>
                </div>

                <div>
                  <img src={room.accommodationThumbnailUrl} alt="이미지" />
                </div>
                <div>
                  <span>2023-11-24</span>
                  <br />
                  <span className="colorGray">
                    체크인 {room.checkInDate} 체크아웃 {room.checkOutDate}
                  </span>
                  <br />
                  <span className="colorGray">
                    기존 {room.capacity}명 / 최대 {room.capacityMax}명
                  </span>
                  <br />
                </div>
              </div>
              <div className="priceWrap">
                <div>
                  <span>수량 </span>
                  <Button
                    size="xs"
                    ml={1}
                    mr={3}
                    onClick={() => {
                      props.handleClickQuantity("decrease", room.cartId);
                    }}
                  >
                    -
                  </Button>
                  <span className="bold">{room.quantity}</span>
                  <Button
                    size="xs"
                    ml={3}
                    onClick={() => {
                      props.handleClickQuantity("increase", room.cartId);
                    }}
                  >
                    +
                  </Button>
                  <br />
                  <span>
                    숙박{" "}
                    <span className="bold">{room.quantity * room.price}원</span>
                  </span>

                  <br />
                  <span className="warningText">취소 및 환불불가</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};
