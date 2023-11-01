import { type BlockItem, type BlockType } from '@/types'
import { ImageVertical, ImageHorizontal, ImageSquare } from './ImageBasic.tsx'

export const blockMap: Record<BlockType, any> = {
  'image-vertical': ImageVertical,
  'image-horizontal': ImageHorizontal,
  'image-square': ImageSquare,
}

export function Block({ item }: { item: BlockItem }) {
  const BlockComponent = blockMap[item.type]
  if (!BlockComponent) return null

  return <BlockComponent data={item} />
}
