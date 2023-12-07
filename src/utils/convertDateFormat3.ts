// 2023. 11. 24. -> 2023-11-24

import { Nullable } from "@/types/nullable";

export function convertDateFormat3(inputDate?: string): Nullable<string> {
  if (!inputDate) {
    return null;
  }

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
