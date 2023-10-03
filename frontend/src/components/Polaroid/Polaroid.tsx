import { ArrowButtons } from './ArrowButtons'
import { PolaroidContainer, type PolaroidItem } from './PolaroidContainer'
import { PolaroidDescription } from './PolaroidDescription'
import { PolaroidImage } from './PolaroidImage'

export function Polaroid({
  polaroidList,
  size,
}: {
  polaroidList: PolaroidItem[]
  size: number
}) {
  return (
    <PolaroidContainer polaroidList={polaroidList} size={size}>
      <PolaroidImage />
      <PolaroidDescription />
      <ArrowButtons />
    </PolaroidContainer>
  )
}
