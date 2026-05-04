import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Text, Float } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 2000 }) {
  const points = useRef<THREE.Points>(null!);

  const particlesPosition = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    points.current.rotation.y = time * 0.02;
    points.current.rotation.x = time * 0.01;
  });

  return (
    <Points ref={points} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#0080ff"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
}

const FloatingTextGroup = () => {
    const groupRef = useRef<THREE.Group>(null!);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}[]<>?;:";
    
    const items = useMemo(() => {
        return Array.from({ length: 40 }).map((_, i) => ({
            position: [
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 5 - 5
            ] as [number, number, number],
            rotation: [Math.random(), Math.random(), Math.random()] as [number, number, number],
            char: chars[Math.floor(Math.random() * chars.length)],
            speed: 0.2 + Math.random() * 0.5
        }));
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        groupRef.current.children.forEach((child, i) => {
            child.position.y += Math.sin(time + i) * 0.001;
        });
    });

    return (
        <group ref={groupRef}>
            {items.map((item, i) => (
                <Float key={i} speed={item.speed} rotationIntensity={0.5} floatIntensity={0.5}>
                    <Text
                        position={item.position}
                        rotation={item.rotation}
                        fontSize={0.15}
                        color="#00d4ff"
                        transparent
                        opacity={0.07}
                        font="https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7oUXskPMBBSSJLm2E.woff"
                    >
                        {item.char}
                    </Text>
                </Float>
            ))}
        </group>
    );
}

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-charcoal">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <color attach="background" args={['#0a0a0a']} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
            <Particles />
            <FloatingTextGroup />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-transparent to-charcoal" />
    </div>
  );
};

export default Background3D;

