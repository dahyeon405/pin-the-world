import { Box, Text } from "@chakra-ui/react";
import { DetailText, Location } from "@/components/Block/parts";
import { ImageBlockData } from "@/types";
import { AnimatedImage } from "@/components/Block/parts/AnimatedImage.tsx";

export function ImageSquare({ data }: { data: ImageBlockData }) {
  return (
    <Box>
      <AnimatedImage ratio={1} imageName={data.imageName} alt={data.alt} />

      <Box px="6" mt="3" mb="10">
        <Location
          locationName={data.locationName}
          locationUrl={data.locationUrl}
        />
        <DetailText text={data.text ?? ""} />
      </Box>
      <Text align="center" my="3" fontSize="sm" whiteSpace="pre-line">
        ➿
      </Text>
    </Box>
  );
}
