import { Float, useGLTF } from '@react-three/drei';

export const BoxTractor = () => {
  const { scene, animations } = useGLTF('/tractor.glb');

  return (
    <Float position={[0, 0, 0]} floatIntensity={0.1} speed={4} rotationIntensity={0.1}>
      <primitive object={scene} scale={[1, 1, 1]} />
    </Float>
  );
};
