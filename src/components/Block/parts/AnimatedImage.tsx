import { Box } from "@chakra-ui/react";
import { ResizedImage } from "@/components/ResizedImage";

export function AnimatedImage({
  ratio,
  imageName,
  alt,
}: {
  ratio: number;
  imageName: string;
  alt?: string;
}) {
  return (
    <Box width="100vw" height={`${100 * ratio}vw`} overflow="hidden">
      <ResizedImage
        motioned
        imageName={imageName}
        alt={alt ?? ""}
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ amount: 0.5, once: true }}
        objectFit="cover"
        objectPosition="50% 50%"
        width="100vw"
        height={`${100 * ratio}vw`}
      />
    </Box>
  );
}
