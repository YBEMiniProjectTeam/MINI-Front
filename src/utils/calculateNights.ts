export const calculateNights = ({
  checkInDate,
  checkOutDate,
  checkInTime,
  checkOutTime
}: {
  checkInDate: string | undefined;
  checkOutDate: string | undefined;
  checkInTime: string | undefined;
  checkOutTime: string | undefined;
}) => {
  const checkInDateTime = new Date(`${checkInDate} ${checkInTime}`).getTime();
  const checkOutDateTime = new Date(
    `${checkOutDate} ${checkOutTime}`
  ).getTime();

  const timeDiff = checkOutDateTime - checkInDateTime;

  const hours = timeDiff / (1000 * 60 * 60);
  const days = Math.floor(hours / 24);

  if (days >= 1) {
    return `${days}박`;
  } else {
    const remainingHours = Math.floor(hours);
    return `${remainingHours}시간`;
  }
};
