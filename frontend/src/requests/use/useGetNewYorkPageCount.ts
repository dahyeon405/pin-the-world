import { getNewYorkPageCount } from '@/requests/data-fetch/getNewYorkPageCount.ts'
import { useQuery } from '@tanstack/react-query'

export const useGetNewYorkPageCount = () => {
  return useQuery<number>(['newYorkPhotosCount'], getNewYorkPageCount)
}
