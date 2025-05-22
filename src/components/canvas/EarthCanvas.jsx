'use client'
import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  useEffect(() => {
    if (earth && earth.scene) {
      // Log model information for debugging
      // console.log('Earth model loaded:', {
      //   scene: earth.scene,
      //   animations: earth.animations,
      //   materials: earth.materials,
      //   geometries: earth.scene.children.map(child => child.geometry)
      // });

      // Ensure the model is properly centered and scaled
      earth.scene.traverse((child) => {
        if (child.isMesh) {
          child.geometry.computeBoundingBox();
          child.geometry.computeBoundingSphere();
          child.geometry.computeVertexNormals();
          
          // // Log geometry information
          // console.log('Mesh geometry:', {
          //   name: child.name,
          //   boundingBox: child.geometry.boundingBox,
          //   boundingSphere: child.geometry.boundingSphere,
          //   attributes: child.geometry.attributes
          // });
        }
      });
    }
  }, [earth]);

  if (!earth || !earth.scene) {
    console.error('Failed to load Earth model');
    return null;
  }

  return (
    <group>
      <primitive 
        object={earth.scene} 
        scale={2.5}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true,
        powerPreference: 'high-performance',
        alpha: true
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={true}
          dampingFactor={0.05}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
