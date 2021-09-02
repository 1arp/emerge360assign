import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const ChairModel = () => {
	const chair = useLoader(GLTFLoader, "/assets/armchairYellow.gltf");
	const chairRef = useRef<Mesh>(null!);

	const [isSelected, setIsSelected] = useState<boolean>(false);
	const [positionX, setPositionX] = useState<number>(0);
	const [positionY, setPositionY] = useState<number>(0);

	useFrame(() => {
		chairRef.current.rotation.y += 0.01;
	});
	const handleKeydown = (e: any) => {
		if (e.keyCode === 37) setPositionX((x) => (x -= 0.7));
		if (e.keyCode === 39) setPositionX((x) => (x += 0.7));
		if (e.keyCode === 40) setPositionY((y) => (y -= 0.7));
		if (e.keyCode === 38) setPositionY((y) => (y += 0.7));
	};
	useEffect(() => {
		window.addEventListener("keydown", (e) => handleKeydown(e));
		return window.removeEventListener("keydown", (e) => handleKeydown(e));
	}, [isSelected]);
	return (
		<>
			<mesh
				ref={chairRef}
				scale={[1, 1, 1]}
				rotation={[Math.PI / 10, Math.PI / 3, 0]}
				position={[positionX, positionY, 0]}
				onClick={() =>
					setIsSelected((state) => {
						console.log(!state);
						return !state;
					})
				}
			>
				<primitive object={chair.scene} />)
			</mesh>
		</>
	);
};

export default ChairModel;
