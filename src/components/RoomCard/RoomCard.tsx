import React from "react";
import { RoomCardTypes } from "./RoomCard.types";
import * as styles from "./RoomCard.styles";
import { FaRegClock, FaRegUser } from "react-icons/fa6";
import { LiaInfoCircleSolid } from "react-icons/lia";
import { formatPrice } from "../../utils/priceFormatter";

const RoomCard: React.FC<RoomCardTypes> = ({
  price,
  capacity,
  capacityMax,
  stockQuantity,
  children
}) => {
  const formattedPrice = formatPrice(price);

  return (
    <styles.CardContainer>
      <styles.Header>
        <styles.Title>
          <h3>도보전용/연박불가</h3>
        </styles.Title>
        <styles.Badge>
          <span>
            <b>{stockQuantity}</b>개 남음
          </span>
        </styles.Badge>
      </styles.Header>
      <styles.Button>
        <b>취소 및 환불 불가</b> <LiaInfoCircleSolid />
      </styles.Button>
      <styles.RoomItem>
        <FaRegClock /> 체크인 <b>10:00</b> - 체크아웃 <b>12:00</b>
      </styles.RoomItem>
      <styles.RoomItem>
        <FaRegUser /> {capacity}인 기준/최대 {capacityMax}인
      </styles.RoomItem>
      <styles.PriceWrapper>
        <styles.TotalPrice>{formattedPrice}원</styles.TotalPrice>
        <styles.ButtonWrapper>{children}</styles.ButtonWrapper>
      </styles.PriceWrapper>
    </styles.CardContainer>
  );
};

export default RoomCard;
