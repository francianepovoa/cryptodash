import React, { Component } from "react";
import "./App.css";
import AppBar from "./AppBar";
import Settings from "../Settings/index";
import { AppProvider } from "./AppProvider";

// Styled Components
import AppLayout from "./AppLayout";

class App extends Component {
	render() {
		return (
			<AppLayout>
				<AppProvider>
					<AppBar />
					<Settings />
				</AppProvider>
			</AppLayout>
		);
	}
}

export default App;
