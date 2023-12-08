import { useMutation } from "@tanstack/react-query";
import { postWish } from "@api/postWish";
import { deleteWish } from "@api/deleteWish";
import { SearchListResponse } from "@components/SearchList/SearchList.types";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { Nullable } from "@/types/nullable";

interface LikeProps {
  accommodationId: Nullable<number>;
}

export const usePostWish = () => {
  const queryClient = useQueryClient();

  return useMutation<SearchListResponse, Error, LikeProps>({
    mutationFn: ({ accommodationId }: LikeProps) => postWish(accommodationId),
    onSuccess: () => {
      toast.success("위시리스트에 추가되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["wishList"] });
    },
    onError: (err) => {
      console.log(err);
    }
  });
};

export const useDeleteWish = () => {
  const queryClient = useQueryClient();

  return useMutation<SearchListResponse, Error, LikeProps>({
    mutationFn: ({ accommodationId }: LikeProps) => deleteWish(accommodationId),
    onSuccess: () => {
      toast.success("위시리스트에서 삭제되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["wishList"] });
    },
    onError: (err) => {
      console.log(err);
    }
  });
};
