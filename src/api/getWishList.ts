import axiosInstance from "@api/axiosInstance";

export const getWishList = async () => {
  const getWishListURL = `/wishes`;

  const response = await axiosInstance.get(getWishListURL);
  console.log(axiosInstance);
  return response.data.data;
};
