import React from "react";
import * as styles from "./AccommodationInfo.styles";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { AccommodationInfoProps } from "./AccommodationInfo.types";

const AccommodationInfo: React.FC<AccommodationInfoProps> = ({ dummyData }) => {
  return (
    <>
      <styles.HotelName>{dummyData.hotelName}</styles.HotelName>
      <styles.RoomType>{dummyData.roomType}</styles.RoomType>
      <styles.GuestNum>
        <LiaUserFriendsSolid /> {dummyData.guestNum}
      </styles.GuestNum>
    </>
  );
};

export default AccommodationInfo;
