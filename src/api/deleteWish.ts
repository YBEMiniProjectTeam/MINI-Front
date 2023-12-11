import { SearchListResponse } from "@components/SearchList/SearchList.types";
import { Nullable } from "@/types/nullable";
import axiosInstance from "@api/axiosInstance";

export const deleteWish = async (
  accommodationId: Nullable<number>
): Promise<SearchListResponse> => {
  const postLikeURL = `/accommodations/${accommodationId}/wish`;

  return await axiosInstance.delete(postLikeURL);
};
