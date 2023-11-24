import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRoomDetail } from "@hooks/useRoomDetailQuery";
import * as styles from "./RoomDetail.styles";
import { Button } from "@chakra-ui/react";
import RoomHeader from "@components/Rooms/RoomHeader/RoomHeader.tsx";
import RoomCarousel from "@components/Rooms/RoomCarousel/RoomCarousel.tsx";
import RoomCard from "@components/Rooms/RoomCard/RoomCard";
import RoomInfoSection from "@components/Rooms/RoomInfoSection/RoomInfoSection.tsx";
import {
  dummyData,
  dummyData1,
  dummyData2,
  dummyRoomData
} from "./RoomDetail.data.ts";

export const RoomDetail: React.FC = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  // const { data, error, isLoading } = useRoomDetail(roomId!);
  const data = dummyRoomData.data;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleReservationClick = () => {
    navigate(`/orders/${roomId}`, {
      state: {
        roomId,
        name: data.name,
        price: data.price,
        capacity: data.capacity,
        capacityMax: data.capacity_max
      }
    });
  };

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;

  const isRoomAvailable = data.stock_quantity > 0;

  return (
    <styles.Container>
      <styles.Inner>
        <styles.Wrapper>
          <RoomCarousel images={data.room_image} onClick={openModal} />
          <RoomHeader
            name={data.name}
            capacity={data.capacity}
            capacityMax={data.capacity_max}
            introMessage={data.intro_message}
          />
        </styles.Wrapper>
        <styles.Divider />
        <styles.Label>
          <h2>상품 선택</h2>
        </styles.Label>
        <RoomCard
          price={data.price}
          capacity={data.capacity}
          capacityMax={data.capacity_max}
          stockQuantity={data.stock_quantity}
        >
          <Button
            colorScheme="pink"
            disabled={!isRoomAvailable}
            onClick={handleReservationClick}
          >
            {isRoomAvailable ? "예약하기" : "예약 마감"}
          </Button>
        </RoomCard>
        <styles.Divider />
        <styles.Label>
          <h2>편의시설 및 서비스</h2>
        </styles.Label>
        <RoomInfoSection title="서비스" content={dummyData} />
        <styles.Divider />
        <styles.Label>
          <h2>객실 정보</h2>
        </styles.Label>
        <RoomInfoSection title="객실 정보" content={dummyData1} />
        <styles.Divider />
        <styles.Label>
          <h2>예약공지사항</h2>
        </styles.Label>
        <RoomInfoSection title="예약공지사항" content={dummyData2} />
      </styles.Inner>
    </styles.Container>
  );
};
