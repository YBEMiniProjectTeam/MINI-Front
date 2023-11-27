import { Checkbox } from "@chakra-ui/react";

interface Room {
  roomName: string;
  img: string;

  capacity: number;
  capcityMax: number;

  checkin: string;
  checkout: string;
  price: number;

  isChecked?: boolean;
}

interface Hotel {
  hotelId: string;
  hotelName: string;
  hotelAddress: string;
  roomList: { [key: string]: Room };
}

export const ShoppingCartList = (props: {
  key: string;
  data: Hotel;
  isCheckAllBox: boolean;
  handleCheckRoom: (hotelid: string, roomid: string) => void;
  handleClickRoomDelete: (hotelid: string, roomid: string) => void;
}): JSX.Element => {
  return (
    <>
      {Object.keys(props.data.roomList).length ? (
        <div className="cartInfoContainer WrapStyle">
          <div className="titleWrap">
            <h3>{props.data.hotelName}</h3>
            <p className="colorGray">{props.data.hotelAddress}</p>
          </div>
          {Object.keys(props.data.roomList).map((roomKey) => {
            const room = props.data.roomList[roomKey];
            return (
              <div key={roomKey} className="roomListWrap">
                <h3>{room.roomName}</h3>
                <button
                  className="roomDeleteButton"
                  onClick={() =>
                    props.handleClickRoomDelete(props.data.hotelId, roomKey)
                  }
                >
                  X
                </button>
                <div className="dataList">
                  <div>
                    <Checkbox
                      onChange={() => {
                        props.handleCheckRoom(props.data.hotelId, roomKey);
                      }}
                      isChecked={room.isChecked}
                    ></Checkbox>
                  </div>

                  <div>
                    <img src={room.img} alt="이미지" />
                  </div>
                  <div>
                    <span>2023-1124</span>
                    <br />
                    <span className="colorGray">
                      체크인{room.checkin} 체크아웃{room.checkout}
                    </span>
                    <br />
                    <span className="colorGray">
                      기존 {room.capacity}명 / 최대 {room.capcityMax}명
                    </span>
                  </div>
                </div>
                <div className="priceWrap">
                  <div>
                    <span>
                      숙박 <span className="bold">{room.price}원</span>
                    </span>

                    <br />
                    <span className="warningText">취소 및 환불불가</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};
