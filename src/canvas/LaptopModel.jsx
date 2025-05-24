
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Laptop = () => {
  const gltf = useGLTF('/models/laptop.glb');
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={ref} object={gltf.scene} scale={1.5} />;
};

const LaptopCanvas = () => (
  <div className="h-[300px] sm:h-[400px] md:h-[500px] w-full">
    <Canvas camera={{ position: [0, 1, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 2, 1]} />
      <OrbitControls enableZoom={false} />
      <Laptop />
    </Canvas>
  </div>
);

export default LaptopCanvas;