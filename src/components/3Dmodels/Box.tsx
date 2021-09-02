import React, { useEffect } from "react";
import { useRef } from "react";
import { Mesh } from "three";

export const Box = () => {
	const boxRef = useRef<Mesh>(null!);

	useEffect(() => {}, []);

	return (
		<mesh ref={boxRef} rotation={[0, Math.PI / 3, 0]} >
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial wireframe={true}/>
		</mesh>
	);
};
