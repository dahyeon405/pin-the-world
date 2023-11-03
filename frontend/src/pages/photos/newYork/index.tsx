import { PaginatedPhoto } from '@/components/Page/PaginatedPhoto'

export default function NewYorkPage() {
  return (
    <PaginatedPhoto
      params={{ travel: '2022 USA' }}
      title="2022, \n New York \n & \n San Francisco"
    />
  )
}
