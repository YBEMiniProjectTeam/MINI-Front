import { Checkbox } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { CartListProps } from "./ShoppinCart.types";
import { formatPrice } from "./../../utils/priceFormatter";

export const ShoppingCartList = (props: CartListProps): JSX.Element => {
  return (
    <>
      {props.data.room_infos.length ? (
        <div className="cartInfoContainer WrapStyle">
          <div className="titleWrap">
            <h3>{props.data.accommodation_name}</h3>
            <p>{props.data.address}</p>
          </div>
          {props.data.room_infos.map((room, roomIndex) => (
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
                  <img
                    src={room.accommodationThumbnailUrl}
                    loading="lazy"
                    alt="이미지"
                  />
                </div>
                <div>
                  <span>
                    {room.checkInDate} ~ {room.checkOutDate}
                  </span>
                  <br />
                  <span className="colorGray">
                    체크인 {room.checkInTime} 체크아웃 {room.checkOutTime}
                  </span>
                  <br />
                  <span className="colorGray">
                    기준 {room.capacity}명 / 최대 {room.capacityMax}명
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
                    <span className="bold">
                      {formatPrice(room.quantity * room.price)}원
                    </span>
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
