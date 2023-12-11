import axiosInstance from "@api/axiosInstance";

export const getWishList = async () => {
  const getWishListURL = `/wishes`;

  const response = await axiosInstance.get(getWishListURL);

  return response.data.data;
};
