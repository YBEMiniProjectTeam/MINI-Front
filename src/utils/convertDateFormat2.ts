export function convertDateFormat2(inputDate: string): string {
    const inputDateTime = new Date(inputDate);
  
    const month = (inputDateTime.getMonth() + 1).toString().padStart(2, '0');
    const day = inputDateTime.getDate().toString().padStart(2, '0');
  
    const outputDate = `${month}.${day}`;
  
    return outputDate;
}
  