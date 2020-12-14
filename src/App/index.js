import React, { Component } from "react";
import "./App.css";
import AppBar from "./AppBar";
import Settings from "../Settings/index";
import Dashboard from "../Dashboard/index";
import { AppProvider } from "./AppProvider";

import Content from "../Shared/content";

// Styled Components
import AppLayout from "./AppLayout";

class App extends Component {
	render() {
		return (
			<AppLayout>
				<AppProvider>
					<AppBar />
					<Content>
						<Settings />
						<Dashboard />
					</Content>
				</AppProvider>
			</AppLayout>
		);
	}
}

export default App;
