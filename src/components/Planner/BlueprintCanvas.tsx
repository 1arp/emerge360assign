import React, { useLayoutEffect, useRef, FC } from "react";
import { useState } from "react";
import { windowDraw } from "./windowPath";


export const BlueprintCanvas: FC = () => {
	const canvasWrapperRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [windowPaths, setWindowPaths] = useState<windowDraw[]>([]);
	const [newWindowPath, setNewWindowPath] = useState<windowDraw | undefined>(
		undefined
	);

	useLayoutEffect(() => {
		const canvasWrapper = canvasWrapperRef.current;
		const canvas = canvasRef.current;
		if (canvas && canvasWrapper) {
			canvas.width = canvasWrapper.clientWidth;
			canvas.height = canvasWrapper.clientHeight;

			const context = canvas.getContext("2d");

			if (context) {
				// context.fillStyle = "#fff";

				context.lineWidth = 2;
				windowPaths.forEach((path) => path.draw());


				const handleClick = (event: MouseEvent) => {
					// @ts-ignore
					var bounds = event.target.getBoundingClientRect();
					const point = {
						x: event.clientX - bounds.left,
						y: event.clientY - bounds.top,
					};
					if (!newWindowPath) {
						setNewWindowPath(new windowDraw(point, context));
					} else {
						setWindowPaths((paths) => [...paths, newWindowPath]);
						setNewWindowPath(undefined);
						window.removeEventListener("mousemove", handleMove);
					}
				};

				const handleMove = (event: MouseEvent) => {
					// @ts-ignore
					var bounds = event.target.getBoundingClientRect();
					const point = {
						x: event.clientX - bounds.left,
						y: event.clientY - bounds.top,
					};
					context.clearRect(0, 0, canvas.width, canvas.height);
					windowPaths.forEach((path) => path.draw());
					if (newWindowPath !== undefined) newWindowPath.stretch(point);
				};

				window.addEventListener("mousedown", handleClick, { once: true });
				window.addEventListener("mousemove", handleMove);
			}
		}
	}, [newWindowPath]);

	return (
		<div
			className=""
			style={{ height: "90vh", width: "100%" }}
			ref={canvasWrapperRef}
		>
			<canvas ref={canvasRef}></canvas>
		</div>
	);
};
