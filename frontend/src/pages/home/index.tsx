import { Canvas } from '@react-three/fiber'
import { EarthCanvas } from '@/components/EarthCanvas'
import { CityPolaroidBoard } from '@/components/Polaroid/CityPolaroidBoard'
import { Box, Heading } from '@chakra-ui/react'

export default function Home() {
  // react-three/drei 라이브러리에서,
  // OrbitControls 사용 시 touch action = none 으로 설정되는 오류가 있음 (터치 불가능)
  // 이슈 링크: https://github.com/pmndrs/drei/issues/1233
  // <Canvas> 컴포넌트 위에 <Box> 컴포넌트를 덮는 것으로 해결해놓음

  return (
    <>
      <Box
        pt="16"
        h="8500px"
        bgGradient="linear(to-b, white 3%, #f57ac0 30%, #e0edb2 40%, #68cbc0 63%, #fb97fb 81%, #fba397 91%)"
      >
        <Heading as="h1" size="4xl" pl="24px" fontWeight="regular">
          Pin the <br /> World
        </Heading>
        <Box pos="fixed" top="32" w="100vw" h="100vw">
          <Canvas
            camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, 4] }}
          >
            <pointLight position={[0, 0, 3]} />
            <EarthCanvas />
          </Canvas>
          <Box pos="fixed" top="32" w="100vw" h="100vw"></Box>
        </Box>
        <CityPolaroidBoard />
      </Box>
    </>
  )
}
