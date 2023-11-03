import { useSearchParams } from 'react-router-dom'
import {
  PaginatedPhoto,
  type PaginatedPhotoParams,
} from '@/components/Page/PaginatedPhoto'

export function PhotosPage() {
  const [searchParams] = useSearchParams()
  const title = searchParams.get('title') ?? ''

  const city = searchParams.get('city')
  const travel = searchParams.get('travel')
  const tag = searchParams.get('tag')

  const params: PaginatedPhotoParams = {
    ...(city && { city }),
    ...(travel && { travel }),
    ...(tag && { tag }),
  }

  return <PaginatedPhoto title={title} params={params} />
}
