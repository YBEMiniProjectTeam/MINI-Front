export const convertDateFormat5 = (inputDate: string | null) => {
  if (!inputDate) return null;

  const date = new Date(inputDate);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear().toString();

  return `${year}-${month}-${day}`;
};
