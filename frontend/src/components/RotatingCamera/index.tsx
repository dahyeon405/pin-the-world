import { EARTH_RADIUS } from '@/constants'
import { convertCoordinateToVector } from '@/utils'
import { useFrame, useThree } from '@react-three/fiber'
import { Vector3 } from 'three'

const DISTANCE = 4
const ALPHA = 0.05

export function RotatingCamera({
  targetCoordinate,
}: {
  targetCoordinate: [number, number]
}) {
  const { camera } = useThree()

  const targetPositionToVector = convertCoordinateToVector(
    targetCoordinate,
    EARTH_RADIUS * DISTANCE
  )

  useFrame(() => {
    camera.position.lerp(new Vector3(...targetPositionToVector), ALPHA)
  })

  return null
}
