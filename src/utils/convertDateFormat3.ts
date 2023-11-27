// 2023. 11. 24. -> 2023-11-24
export function convertDateFormat3(inputDate?: string): string | null {
  if (!inputDate) {
    return null;
  }
  console.log(inputDate);
  if (inputDate[2] !== "/") {
    const dateParts = inputDate
      .split(".")
      .map((part) => parseInt(part.trim(), 10));

    const isoDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
      .toISOString()
      .split("T")[0];
    return isoDate;
  }

  const dateParts = inputDate.split("/");
  const newDate = `${dateParts[2]}-${dateParts[0]}-${dateParts[1]}`;
  return newDate;
}
