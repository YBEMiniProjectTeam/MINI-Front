import React from "react";
import * as styles from "./ReservationInfo.styles.ts";
import { IoBedOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { dummyReservationInfo } from "@pages/payment/Payment.data.ts";

const ReservationInfo: React.FC = () => {
  const dummyData = dummyReservationInfo.data;

  return (
    <styles.Container>
      <styles.TopContainer>
        <styles.HotelName>{dummyData.hotelName}</styles.HotelName>
        <styles.RoomType>{dummyData.roomType}</styles.RoomType>
        <styles.BedType>
          <IoBedOutline /> {dummyData.bedType}
        </styles.BedType>
        <styles.GuestNum>
          <LiaUserFriendsSolid /> {dummyData.guestNum}
        </styles.GuestNum>
      </styles.TopContainer>
      <styles.StayPeriodContainer>
        <styles.StayPeriodDetail>
          {dummyData.stayPeriod}
        </styles.StayPeriodDetail>
        <styles.StayPeriodBox>
          <span className="type">체크인</span>
          <div className="date">{dummyData.checkInDate}</div>
        </styles.StayPeriodBox>
        <styles.StayPeriodBox>
          <span className="type">체크아웃</span>
          <div className="date">{dummyData.checkOutDate}</div>
        </styles.StayPeriodBox>
      </styles.StayPeriodContainer>
    </styles.Container>
  );
};

export default ReservationInfo;
