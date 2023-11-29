import { useMutation } from "@tanstack/react-query";
import { postLike } from "@api/postLike";
import { deleteLike } from "@api/deleteLike";
import { ResponseType } from "@/components/SearchList/SearchList.types";
import Swal from "sweetalert2";

interface LikeProps {
  accommodationId: number | null;
  headers: { [key: string]: string };
}

export const useSearchListPost = () => {
  return useMutation<ResponseType, Error, LikeProps>({
    mutationFn: ({ accommodationId, headers }: LikeProps) =>
      postLike(accommodationId, headers),
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

export const useSearchListDelete = () => {
  return useMutation<ResponseType, Error, LikeProps>({
    mutationFn: ({ accommodationId, headers }: LikeProps) =>
      deleteLike(accommodationId, headers),
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
