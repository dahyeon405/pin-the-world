import { type PageInfo } from './types'

export interface ImageResponse {
  edges: Array<{
    node: Image
    cursor: string
  }>
  pageInfo: PageInfo
  totalCount: number
}

export interface Image {
  id: number
  url?: string
  name?: string
  title?: string
  city?: string
  country?: string
  location?: string
  locationUrl?: string
  description?: string
  tags?: string[]
  type: string
  travel?: string
}
