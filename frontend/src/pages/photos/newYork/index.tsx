import { PaginatedPhoto } from '@/components/Page/PaginatedPhoto'

export default function NewYorkPage() {
  return (
    <PaginatedPhoto params={{ city: 'New York' }} title="2022, \n New York" />
  )
}
