import { useMutation } from "@tanstack/react-query";
import { postWish } from "@/api/postWish";
import { deleteWish } from "@/api/deleteWish";
import { ResponseType } from "@/components/SearchList/SearchList.types";
import Swal from "sweetalert2";

interface LikeProps {
  accommodationId: number | null;
  headers: { [key: string]: string };
}

export const usePostWish = () => {
  return useMutation<ResponseType, Error, LikeProps>({
    mutationFn: ({ accommodationId, headers }: LikeProps) =>
      postWish(accommodationId, headers),
    onSuccess: (res) => {
      console.log(res.statusCode, res.message);
      Swal.fire({
        icon: "warning",
        text: "위시리스트에 추가되었습니다."
      });
    },
    onError: (err) => {
      console.log(err);
    }
  });
};

export const useDeleteWish = () => {
  return useMutation<ResponseType, Error, LikeProps>({
    mutationFn: ({ accommodationId, headers }: LikeProps) =>
      deleteWish(accommodationId, headers),
    onSuccess: (res) => {
      console.log(res.statusCode, res.message);
      Swal.fire({
        icon: "warning",
        text: "위시리스트에서 삭제되었습니다."
      });
    },
    onError: (err) => {
      console.log(err);
    }
  });
};
