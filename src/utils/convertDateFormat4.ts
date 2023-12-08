// 2023-11-29 -> 11/29/2023 

import { Nullable } from "@/types/nullable";

export function convertDateFormat4(inputDate: Nullable<string>): Nullable<string>{
    if (!inputDate) {
        return null;
    }

    const date = new Date(inputDate);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear().toString();
  
    return `${month}/${day}/${year}`;
  }