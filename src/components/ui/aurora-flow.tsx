import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Simple test aurora - very visible
const AuroraBackground = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <planeGeometry args={[100, 100]} />
      <meshBasicMaterial
        transparent
        opacity={0.8}
        color={getComputedStyle(document.documentElement).getPropertyValue('--accent-green').trim() || '#22C55E'}
      />
    </mesh>
  );
};

// Main Component
export const Component = () => {
  return (
    <div className="absolute inset-0 w-full h-full opacity-40 z-50">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%',
          opacity: 1,
          pointerEvents: 'none'
        }}
      >
        <AuroraBackground />
      </Canvas>
    </div>
  );
};
