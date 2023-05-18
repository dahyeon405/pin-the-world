import * as THREE from "three";

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
  const vertex = ([longitude, latitude]: [number, number], radius: number) => {
    const lambda = (longitude * Math.PI) / 180;
    const phi = (latitude * Math.PI) / 180;

    return new THREE.Vector3(
      radius * Math.cos(phi) * Math.cos(lambda),
      radius * Math.sin(phi),
      -radius * Math.cos(phi) * Math.sin(lambda)
    );
  };

  const wireframe = (coordinates: Array<[number, number]>, radius: number) => {
    const geometry = new THREE.BufferGeometry();
    const points = [] as Array<THREE.Vector3>;

    for (let i = 0; i < coordinates.length; i++) {
      points.push(vertex(coordinates[i], radius));
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
