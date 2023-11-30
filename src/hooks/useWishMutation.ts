import { useMutation } from "@tanstack/react-query";
import { postWish } from "@api/postWish";
import { deleteWish } from "@api/deleteWish";
import { ResponseType } from "@components/SearchList/SearchList.types";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
interface LikeProps {
  accommodationId: number | null;
  headers: { [key: string]: string };
}

export const usePostWish = () => {
  const queryClient = useQueryClient();

  return useMutation<ResponseType, Error, LikeProps>({
    mutationFn: ({ accommodationId, headers }: LikeProps) =>
      postWish(accommodationId, headers),
    onSuccess: () => {
      toast.success("위시리스트에 추가되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["searchList"] });
    },
    onError: (err) => {
      console.log(err);
    }
  });
};

export const useDeleteWish = () => {
  const queryClient = useQueryClient();

  return useMutation<ResponseType, Error, LikeProps>({
    mutationFn: ({ accommodationId, headers }: LikeProps) =>
      deleteWish(accommodationId, headers),
    onSuccess: () => {
      toast.success("위시리스트에서 삭제되었습니다.");      
      queryClient.invalidateQueries({ queryKey: ["searchList"] });
    },
    onError: (err) => {
      console.log(err);
    }
  });
};
