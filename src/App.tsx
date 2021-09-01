import React, { useState } from "react";
import "./App.css";
import { Scene } from "./components/Scene";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Scene />
		</div>
	);
}

export default App;
