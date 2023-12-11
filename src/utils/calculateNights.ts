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
  const checkInDateTime = new Date(`${checkInDate} ${checkInTime}`);
  const checkOutDateTime = new Date(`${checkOutDate} ${checkOutTime}`);

  const timeDiff = checkOutDateTime.getTime() - checkInDateTime.getTime();
  const hours = timeDiff / (1000 * 60 * 60);
  const days = Math.floor(hours / 24);

  if (checkInDate !== checkOutDate) {
    return `${Math.max(days, 1)}박`;
  } else {
    const remainingHours = Math.floor(hours);
    return `${remainingHours}시간`;
  }
};
