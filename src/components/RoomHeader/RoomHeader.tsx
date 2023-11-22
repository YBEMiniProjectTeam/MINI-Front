import React from "react";
import { RoomHeaderTypes } from "./RoomHeader.types.ts";
import * as styles from "./RoomHeader.styles.ts";
import { IoBedOutline, IoResize } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdSmokeFree } from "react-icons/md";

const RoomHeader: React.FC<RoomHeaderTypes> = ({
  name,
  introMessage,
  capacity,
  capacityMax
}) => {
  return (
    <styles.Container>
      <styles.RoomTitle>{name}</styles.RoomTitle>
      <styles.RoomDesc>{introMessage}</styles.RoomDesc>
      <styles.RoomType>
        <styles.RoomItem>
          <LiaUserFriendsSolid /> {capacity}인 기준/최대 {capacityMax}인
        </styles.RoomItem>
        <styles.RoomItem>
          <IoBedOutline /> 킹 침대 1개
        </styles.RoomItem>
        <styles.RoomItem>
          <MdSmokeFree /> 금연객실
        </styles.RoomItem>
        <styles.RoomItem>
          <IoResize /> 28.1㎡
        </styles.RoomItem>
      </styles.RoomType>
    </styles.Container>
  );
};

export default RoomHeader;
