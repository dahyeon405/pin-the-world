import * as THREE from "three";
import { convertCoordinateToVector } from "@/utils/convertCoordinateToVector";

interface SingleCoastLineProps {
  coordinates: Array<[number, number]>;
  radius: number;
  material: any;
}

export default function SingleCoastLine({
  coordinates,
  radius,
  material,
}: SingleCoastLineProps) {
  const vertex = (location: [number, number], radius: number) => {
    const vector = convertCoordinateToVector(location, radius);

    return new THREE.Vector3(...vector);
  };

  const wireframe = (coordinates: Array<[number, number]>, radius: number) => {
    const geometry = new THREE.BufferGeometry();
    const points = [] as Array<THREE.Vector3>;

    for (let i = 0; i < coordinates.length; i++) {
      const vector3 = vertex(coordinates[i], radius);
      points.push(vector3);
    }

    geometry.setFromPoints(points);

    return geometry;
  };

  return (
    <line>
      <edgesGeometry
        attach="geometry"
        args={[wireframe(coordinates, radius)]}
      />
      <lineBasicMaterial {...material} />
    </line>
  );
}
