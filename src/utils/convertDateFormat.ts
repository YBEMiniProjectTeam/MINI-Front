// 2023. 11. 24. -> 11.24 (목)
export function convertDateFormat(inputDate?: string): string | null {
  if (!inputDate) {
    return null;
  }

  const inputDateObj = new Date(inputDate);

  const month = (inputDateObj.getMonth() + 1).toString().padStart(2, "0");
  const day = inputDateObj.getDate().toString().padStart(2, "0");

  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = daysOfWeek[inputDateObj.getDay()];

  const outputDate = `${month}.${day} (${dayOfWeek})`;

  return outputDate;
}
