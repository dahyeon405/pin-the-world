/* eslint-disable @typescript-eslint/promise-function-async */
import { useQuery } from '@tanstack/react-query'
import { getImages, type GetImagesParams } from '../data-fetch/getImages'

const DEFAULT_TAKE = 10

// 페이지네이션 방식으로 가져옴
export const useGetImages = (
  params: GetImagesParams,
  take: number = DEFAULT_TAKE,
  page: number = 1
) => {
  return useQuery([JSON.stringify(params), page], () => {
    return getImages(params, take, page)
  })
}
