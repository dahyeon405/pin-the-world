import { BlockItem, BlockType } from "@/types";
import { ImageVertical } from "./ImageVertical.tsx";
import { ImageHorizontal } from "./ImageHorizontal.tsx";
import { ImageSquare } from "./ImageSquare.tsx";

export const blockMap: Record<BlockType, any> = {
  "image-vertical": ImageVertical,
  "image-horizontal": ImageHorizontal,
  "image-square": ImageSquare,
};

export function Block({ item }: { item: BlockItem }) {
  const BlockComponent = blockMap[item.type];
  return <BlockComponent data={item.data} />;
}
