import { Canvas } from "@react-three/fiber";
import { EarthCanvas } from "@/components/EarthCanvas";
import { CityPolaroidBoard } from "@/components/Polaroid/CityPolaroidBoard";
import { Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box
        pt="16"
        h="8500px"
        bgGradient="linear(to-b, gray.50 3%, #f57ac0 30%, #e0edb2 40%, #68cbc0 63%, #fb97fb 81%, #fba397 91%)"
      >
        <Heading as="h1" size="4xl" pl="24px" fontWeight="regular">
          Pin the World
        </Heading>
        <Box pos="fixed" top="32" w="100vw" h="100vw">
          <Canvas
            camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, 4] }}
          >
            <pointLight position={[0, 0, 3]} />
            <EarthCanvas />
          </Canvas>
        </Box>
        <CityPolaroidBoard />
      </Box>
    </>
  );
}
