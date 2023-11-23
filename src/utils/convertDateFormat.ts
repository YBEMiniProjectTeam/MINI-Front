export function convertDateFormat(inputDate?: string): string | undefined{
    if (!inputDate) {
        return;
    }

    const inputDateObj = new Date(inputDate);
  
    const month = (inputDateObj.getMonth() + 1).toString().padStart(2, '0');
    const day = inputDateObj.getDate().toString().padStart(2, '0');
    
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = daysOfWeek[inputDateObj.getDay()];
  
    const outputDate = `${month}.${day} (${dayOfWeek})`;
  
    return outputDate;
}