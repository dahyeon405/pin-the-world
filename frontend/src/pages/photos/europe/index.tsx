import { PaginatedPhoto } from '@/components/Page/PaginatedPhoto'

export default function NewYorkPage() {
  return (
    <PaginatedPhoto params={{ travel: 'exchange' }} title={`2019 exchange`} />
  )
}
