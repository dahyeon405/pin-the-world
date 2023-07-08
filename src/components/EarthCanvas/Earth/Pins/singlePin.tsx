import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { useLoader } from "@react-three/fiber";

interface SinglePinProps {
  position: number[];
  scale: number[] | number;
}

export default function SinglePin({ position, scale }: SinglePinProps) {
  const pin = useLoader(OBJLoader, "./starPin.obj");

  pin.traverse((obj: any) => {
    if (obj.isMesh) {
      obj.material.color.set(0x000000);
    }
  });

  return <primitive position={position} scale={scale} object={pin.clone()} />;
}
