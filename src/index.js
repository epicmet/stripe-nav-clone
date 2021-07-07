import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";

const Index = () => {
	return (
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
};

render(<Index />, document.getElementById("root"));
