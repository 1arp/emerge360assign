import React, { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import { BlueprintCanvas } from "./components/Planner/BlueprintCanvas";
import { Scene } from "./components/Scene";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Header />
      <BlueprintCanvas/>
			{/* <Scene /> */}
		</div>
	);
}

export default App;
