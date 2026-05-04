import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Text, Float } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 3000 }) {
  const points = useRef<THREE.Points>(null!);
  const { viewport } = useThree();

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
    const scroll = window.scrollY / 1000;
    
    points.current.rotation.y = time * 0.05 + scroll * 0.2;
    points.current.rotation.x = time * 0.02;
    
    // Subtle "morphing" effect by adjusting scale based on scroll
    const scale = 1 + Math.sin(scroll) * 0.1;
    points.current.scale.set(scale, scale, scale);
  });

  return (
    <Points ref={points} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00d4ff"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.2}
      />
    </Points>
  );
}

const FloatingTextGroup = () => {
    const groupRef = useRef<THREE.Group>(null!);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}[]<>?;:";
    
    const items = useMemo(() => {
        return Array.from({ length: 50 }).map((_, i) => ({
            position: [
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 5 - 5
            ] as [number, number, number],
            rotation: [Math.random(), Math.random(), Math.random()] as [number, number, number],
            char: chars[Math.floor(Math.random() * chars.length)],
            speed: 0.2 + Math.random() * 0.5,
            offset: Math.random() * 10
        }));
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const scroll = window.scrollY / 500;
        
        groupRef.current.children.forEach((child, i) => {
            // Letters react to scroll by moving upwards/downwards
            child.position.y += Math.sin(time + items[i].offset) * 0.002;
            child.position.z += Math.cos(scroll + i) * 0.01;
        });
    });

    return (
        <group ref={groupRef}>
            {items.map((item, i) => (
                <Float key={i} speed={item.speed} rotationIntensity={0.5} floatIntensity={0.5}>
                    <Text
                        position={item.position}
                        rotation={item.rotation}
                        fontSize={0.2}
                        color="#00d4ff"
                        transparent
                        opacity={0.08}
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
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
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

