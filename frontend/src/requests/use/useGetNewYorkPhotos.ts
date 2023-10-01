import { useQuery } from "@tanstack/react-query";
import { getNewYorkPhotos } from "@/requests/data-fetch/getNewYorkPhotos.ts";
import { BlockItem } from "@/types";

export const useGetNewYorkPhotos = (page: number = 0) => {
  return useQuery<BlockItem[]>(["newYorkPhotos", page], () =>
    getNewYorkPhotos(page),
  );
};
