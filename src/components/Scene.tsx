import { Physics } from "@react-three/cannon";
import { OrbitControls, Sky, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { FC, Suspense } from "react";
import { Box } from "./3Dmodels/Box";
import { ChairModel } from "./3Dmodels/Chair";

const Lights = () => {
	return (
		<>
			<ambientLight intensity={0.3} />
			<directionalLight position={[10, 10, 5]} intensity={1} />
			<directionalLight
				castShadow
				position={[0, 10, 0]}
				intensity={1.5}
				shadow-mapSize-width={1024}
				shadow-mapSize-height={1024}
				shadow-camera-far={50}
				shadow-camera-left={-10}
				shadow-camera-right={10}
				shadow-camera-top={10}
				shadow-camera-bottom={-10}
			/>
			<spotLight intensity={1} position={[1000, 0, 0]} castShadow />
		</>
	);
};

export const Scene: FC = () => {
	return (
		<Canvas
			style={{ width: "100vw", height: "100vh" }}
			camera={{ position: [0, 0, 120], fov: 70 }}
		>
      <OrbitControls/>
      <Lights/>
			<Suspense fallback={null}>
				<ChairModel />
				{/* <Box /> */}
			</Suspense>
		</Canvas>
	);
};
