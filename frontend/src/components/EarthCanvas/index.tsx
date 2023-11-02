import { Earth } from './Earth'
import { OrbitControls } from '@react-three/drei'
import { EARTH_RADIUS } from '@/constants'

export const EarthCanvas = () => {
  /*
   * 카메라 이동 로직 변경으로 더 이상 사용 X
   * 아래 코드는 스크롤에 따라 카메라 이동하는 코드
   */

  // const { camera } = useThree()

  // const { setCameraPositions } = useRotateCameraOnScroll(
  //   { x: 0, y: 0, z: 4 },
  //   camera
  // )

  // setCameraPositions(scrollCameraPositionMap)

  return (
    <>
      <Earth radius={EARTH_RADIUS} />
      <OrbitControls
        enableZoom={false}
        enableDamping={false}
        enablePan={false}
        enableRotate={false}
      />
    </>
  )
}
