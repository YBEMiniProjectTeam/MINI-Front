import { useSuspenseQuery } from "@tanstack/react-query";
import getAccomodationInfo from "@api/accomodation/getAccomodationInfo";

export const useAccomodationQuery = (id: number) => {
  return useSuspenseQuery({
    queryKey: ["accomodationInfo", id],
    queryFn: () => getAccomodationInfo(id),
    select: (data) => {
      const {
        accommodation_image: images,
        description,
        isWish,
        name,
        type
      } = data;
      const {
        address,
        cooking,
        description: desc,
        latitude,
        longitude,
        others,
        parking
      } = description;

      return {
        images,
        isWish,
        name,
        type,
        address,
        cooking,
        desc,
        latitude,
        longitude,
        others,
        parking
      };
    }
  });
};
