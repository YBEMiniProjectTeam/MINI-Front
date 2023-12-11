import { SearchListResponse } from "@components/SearchList/SearchList.types";
import { Nullable } from "@/types/nullable";
import axiosInstance from "@api/axiosInstance";

export const postWish = async (
  accommodationId: Nullable<number>
): Promise<SearchListResponse> => {
  const postLikeURL = `/accommodations/${accommodationId}/wish`;

  return await axiosInstance.post(postLikeURL);
};
