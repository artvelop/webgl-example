import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';

function Cup(props: GroupProps) {
  const { nodes, materials } = useGLTF('/coffee-transformed.glb');
  const texture = useTexture('/1200px-Starbucks_Logo_ab_2011.svg.png');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        // geometry={nodes.coffee_cup_top_16oz.geometry}
        material={materials['13 - Default']}
      >
        <Decal
          position={[0, 0.75, 0.3]}
          rotation={[0, 0, 0]}
          scale={[0.52, 0.6, 0.6]}
          map={texture}
        />
      </mesh>
    </group>
  );
}
