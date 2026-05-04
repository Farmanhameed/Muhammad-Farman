import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const Globe3D = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.1;
  });

  return (
    <group>
      <Float speed={4} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere ref={meshRef} args={[1, 64, 64]}>
          <MeshDistortMaterial
            color="#0080ff"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0}
            metalness={1}
            emissive="#0080ff"
            emissiveIntensity={0.5}
          />
        </Sphere>
      </Float>
      
      {/* Subtle ring around the globe */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.2, 1.25, 64]} />
        <meshBasicMaterial color="#0080ff" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Globe3D;
