import Earth from "@/components/Earth";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, 5] }}>
        <Earth />
      </Canvas>
    </div>
  );
}
