import { Canvas } from '@react-three/fiber'
import { EarthCanvas } from '@/components/EarthCanvas'
import { Box, Heading, Spinner } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { RotatingCamera } from '@/components/RotatingCamera'
import { type Cities, cityCoordinates } from '@/constants'
import { ScrollDownIndicator } from './components/ScrollDownIndicator'
import { Polaroid } from './components/Polaroid'
import { BoardingPass } from './components/BoardingPass'

export default function Home() {
  // react-three/drei 라이브러리에서,
  // OrbitControls 사용 시 touch action = none 으로 설정되는 오류가 있음 (터치 불가능)
  // 이슈 링크: https://github.com/pmndrs/drei/issues/1233
  // <Canvas> 컴포넌트 위에 <Box> 컴포넌트를 덮는 것으로 해결해놓음

  // requestIdleCallback 통해 로딩 끝났음을 감지하려 했으나 safari에서 작동하지 않으므로 폐기 :(
  const [isLoading] = useState(false)

  // useEffect(() => {
  //   requestIdleCallback(() => {
  //     setIsLoading(false)
  //   })
  // }, [])

  const [selectedCity, setSelectedCity] = useState<null | Cities>(null)
  const showBoardingPass = selectedCity !== null

  const cameraPosition = selectedCity
    ? (cityCoordinates[selectedCity] as [number, number])
    : ([-90, 0] as [number, number])

  const onClickCityButton = (cityName: Cities) => {
    setSelectedCity(cityName)
  }

  const [canvasHeight, setCanvasHeight] = useState(0)

  useEffect(() => {
    // 캔버스 높이를 최초 window.innerHeight로 설정
    setCanvasHeight(window.innerHeight)
  }, [])

  return (
    <>
      <Box
        pt="16"
        h="1300px"
        bgGradient="linear(to-b, white 3%, #EFE0F3 40%, #E1F3E0 60%, #F3E3E0 100%)"
        overflowX="hidden"
        pos="relative"
      >
        <Heading as="h1" size="4xl" pl="24px" fontWeight="regular">
          Pin the <br /> World
        </Heading>

        <Box pos="fixed" top="0" w="100vw" h={canvasHeight}>
          <Canvas
            camera={{ fov: 60, near: 0.1, far: 1000, position: [4, 0, 4] }}
          >
            <pointLight position={[0, 0, 3]} />
            <EarthCanvas />
            <RotatingCamera targetCoordinate={cameraPosition} />
          </Canvas>

          {isLoading && (
            <Box pos="absolute" top="40" w="100vw" textAlign="center">
              <Spinner
                size="xl"
                thickness="4px"
                speed="0.8s"
                color="gray.500"
              />
            </Box>
          )}
          <Box pos="fixed" top="0" w="100vw" h="100vh"></Box>
        </Box>
        <ScrollDownIndicator />
        <BoardingPass onSelect={onClickCityButton} show={showBoardingPass} />

        <Polaroid
          onClickCloseButton={() => {
            setSelectedCity(null)
          }}
          city={selectedCity}
        />
      </Box>
    </>
  )
}
