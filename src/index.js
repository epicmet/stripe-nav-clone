import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";

const Index = () => {
	return (
		<React.StrictMode>
			<AppProvider>
				<App />
			</AppProvider>
		</React.StrictMode>
	);
};

render(<Index />, document.getElementById("root"));
