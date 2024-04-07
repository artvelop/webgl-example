import { Center, Text3D } from '@react-three/drei';
import React from 'react';

export const TextCodeWave = () => {
  return (
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
  );
};
