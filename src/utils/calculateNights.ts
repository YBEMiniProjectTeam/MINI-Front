export const calculateNights = ({
  checkInDate,
  checkOutDate,
  checkInTime,
  checkOutTime
}: {
  checkInDate: string;
  checkOutDate: string;
  checkInTime: string;
  checkOutTime: string;
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
