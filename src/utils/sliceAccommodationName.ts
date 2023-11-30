export const sliceAccommodationName = (name: string) => {
  let slicedName = name;

  if (name.includes('한국관광 품질인증'))
    slicedName = name.replace('[한국관광 품질인증/Korea Quality]', '');

  return slicedName;
};