export const printCategory = (type: string) => {
  switch (type) {
  case 'HOTEL':
    return '호텔';
  case 'RESORT':
    return '리조트';
  case 'MOTEL':
    return '모텔';
  case 'PENSION':
    return '펜션';
  default:
    return '';
  }
};