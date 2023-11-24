import React from "react";
import * as styles from "./ReservationInfo.styles.ts";
import { ReservationInfoProps } from "./ReservationInfo.types";

const ReservationInfo: React.FC<ReservationInfoProps> = ({
  children,
  dummyData
}) => {
  return (
    <styles.Container>
      <styles.TopContainer>{children}</styles.TopContainer>
      <styles.StayPeriodContainer>
        <styles.StayPeriodDetail>2박</styles.StayPeriodDetail>
        <styles.StayPeriodBox>
          <span className="type">체크인</span>
          <div className="date">{dummyData?.checkInDate}</div>
        </styles.StayPeriodBox>
        <styles.StayPeriodBox>
          <span className="type">체크아웃</span>
          <div className="date">{dummyData?.checkOutDate}</div>
        </styles.StayPeriodBox>
      </styles.StayPeriodContainer>
    </styles.Container>
  );
};

export default ReservationInfo;
