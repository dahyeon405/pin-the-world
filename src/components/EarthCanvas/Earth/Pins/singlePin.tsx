import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { useLoader } from "@react-three/fiber";
import StarPinObj from "@/assets/starPin.obj";

interface SinglePinProps {
  position: number[];
  scale: number[] | number;
}

export default function SinglePin({ position, scale }: SinglePinProps) {
  const pin = useLoader(OBJLoader, StarPinObj);

  pin.traverse((obj: any) => {
    if (obj.isMesh) {
      obj.material.color.set(0x000000);
    }
  });

  return <primitive position={position} scale={scale} object={pin.clone()} />;
}
