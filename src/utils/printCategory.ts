export const printCategory = (type: string) => {
  let category = '';

  switch (type) {
  case 'HOTEL':
    category = '호텔';
    break;
  case 'RESORT':
    category = '리조트';
    break;
  case 'MOTEL':
    category = '모텔';
    break;
  case 'PENSION':
    category = '펜션';
    break;
  default:
    category = '';
  }

  return category;
};