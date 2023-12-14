import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postWish } from "@api/postWish";
import { deleteWish } from "@api/deleteWish";
import {
  SearchListResponse,
  Accommodation
} from "@components/SearchList/SearchList.types";
import { toast } from "react-hot-toast";
import { Nullable } from "@/types/nullable";

interface LikeProps {
  accommodationId: Nullable<number>;
}
interface ContextType {
  previousWishData: Accommodation[];
}

export const usePostWish = () => {
  const queryClient = useQueryClient();

  return useMutation<SearchListResponse, Error, LikeProps, ContextType>({
    mutationFn: ({ accommodationId }: LikeProps) => postWish(accommodationId),
    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey: ["wishList"] });
      const previousWishData =
        queryClient.getQueryData<Accommodation[]>(["wishList"]) || [];

      queryClient.setQueryData<Accommodation[]>(["wishList"], (old) => {
        return old
          ? old.map((accommodation) => {
              if (accommodation.id === variables.accommodationId) {
                return { ...accommodation, isWish: true };
              }
              return accommodation;
            })
          : [];
      });

      return { previousWishData };
    },
    onSuccess: () => {
      toast.success("위시리스트에 추가되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["wishList"] });
    },
    onError: (err, _, context) => {
      console.log(err);
      queryClient.setQueryData(["wishList"], context?.previousWishData);
    }
  });
};

export const useDeleteWish = () => {
  const queryClient = useQueryClient();

  return useMutation<SearchListResponse, Error, LikeProps, ContextType>({
    mutationFn: ({ accommodationId }: LikeProps) => deleteWish(accommodationId),
    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey: ["wishList"] });
      const previousWishData =
        queryClient.getQueryData<Accommodation[]>(["wishList"]) || [];
      queryClient.setQueryData<Accommodation[]>(["wishList"], (old) => {
        return old?.map((accommodation) => {
          if (accommodation.id === variables.accommodationId) {
            return { ...accommodation, isWish: false };
          }
          return accommodation;
        });
      });
      return { previousWishData };
    },
    onSuccess: () => {
      toast.success("위시리스트에서 삭제되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["wishList"] });
    },
    onError: (err, _, context) => {
      console.log(err);
      queryClient.setQueryData(["wishList"], context?.previousWishData);
    }
  });
};
