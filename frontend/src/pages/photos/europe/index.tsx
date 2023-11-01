import { PaginatedPhoto } from '@/components/Page/PaginatedPhoto'

export default function EuropePage() {
  return (
    <PaginatedPhoto params={{ travel: 'exchange' }} title={`2019 exchange`} />
  )
}
