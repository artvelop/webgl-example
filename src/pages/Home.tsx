import React from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Center,
  Cloud,
  Decal,
  Environment,
  MeshDiscardMaterial,
  OrbitControls,
  RoundedBox,
  Sparkles,
  Stars,
  Text,
  Text3D,
  useTexture,
} from '@react-three/drei';
import { useHome } from './Home.hook';

export const Home = () => {
  const { rotateX, rotateY } = useHome();
  // const texture = useTexture('/logo192.png');

  return (
    <div>
      <Canvas
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: '#000',
        }}
      >
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <Stars />
        {/* <mesh rotation-x={rotateX} rotation-y={rotateY} position={[0, 0, 0]}> */}
        {/* 
        <Center position={[-3, -0.7, 0]} rotation={[0.05, 0.2, 0.1]}>
          <RoundedBox args={[2, 3, 1]} smoothness={4}>
            <meshPhongMaterial color="#0064ff" map={texture} />
          </RoundedBox>
        </Center> */}
        <BoxLogo />

        {/* <mesh position={[0, 0, 0.15]}>
          <circleGeometry args={[0.3, 64, 32]} />
          <meshStandardMaterial color={'#fff'} />
        </mesh>
        <mesh position={[-0.5, 0.4, 0.15]}>
          <circleGeometry args={[0.1, 64, 32]} />
          <meshStandardMaterial color={'#fff'} />
        </mesh>
        <mesh position={[0.5, 0.4, 0.15]}>
          <circleGeometry args={[0.1, 64, 32]} />
          <meshStandardMaterial color={'#fff'} />
        </mesh>
        <mesh position={[-0.5, -0.4, 0.15]}>
          <circleGeometry args={[0.1, 64, 32]} />
          <meshStandardMaterial color={'#fff'} />
        </mesh>
        <mesh position={[0.5, -0.4, 0.15]}>
          <circleGeometry args={[0.1, 64, 32]} />
          <meshStandardMaterial color={'#fff'} />
        </mesh> */}
        <Center position={[2, 0, 0]} rotation={[-0.2, 0.1, 0.1]}>
          <Text3D
            curveSegments={32}
            bevelEnabled
            bevelSize={0.04}
            bevelThickness={0.1}
            height={0.5}
            lineHeight={0.6}
            letterSpacing={-0.06}
            size={1.5}
            font="/Inter_Bold.json"
          >
            {/* {'LIGIHT\nMINE\nFLO'} */}
            {'CODE\nWAVE'}
            <meshNormalMaterial />
          </Text3D>
        </Center>
        {/* <mesh rotation-x={rotateX} rotation-y={rotateY} position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color="#fff" opacity={0.5} transparent={true} />
        </mesh> */}
        {/* <mesh rotation-x={rotateX} rotation-y={rotateY} position={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh> */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

const BoxLogo = () => {
  const texture = useTexture('/profile.png');

  return (
    <Center position={[-3, -0.7, 0.7]} rotation={[-0.2, 0.1, 0.1]}>
      <RoundedBox args={[2, 3, 1]} smoothness={4}>
        <Decal position={[-0.1, 0, 0.5]} rotation={[0, 0.5, 0]} scale={[1, 1, 1]} map={texture} />
        <meshStandardMaterial color={'#8C99FC'} />
      </RoundedBox>
    </Center>
  );
};
