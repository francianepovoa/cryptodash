import React, { Component } from "react";
import "./App.css";
import Welcome from "./welcome";
import AppBar from "./AppBar";

import { AppProvider } from "./AppProvider";

// Styled Components
import AppLayout from "./AppLayout";

class App extends Component {
	render() {
		return (
			<AppLayout>
				<AppProvider>
					<AppBar />
					<Welcome />
				</AppProvider>
			</AppLayout>
		);
	}
}

export default App;
