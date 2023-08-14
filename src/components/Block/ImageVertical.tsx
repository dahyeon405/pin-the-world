import { Box, Text } from "@chakra-ui/react";
import { DetailText, Location } from "./parts";
import { ImageBlockData } from "@/types";
import { AnimatedImage } from "@/components/Block/parts/AnimatedImage.tsx";

export function ImageVertical({ data }: { data: ImageBlockData }) {
  return (
    <Box>
      <AnimatedImage ratio={1.33} imageName={data.imageName} alt={data.alt} />

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
