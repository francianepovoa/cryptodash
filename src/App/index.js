import React, { Component } from "react";
import "./App.css";
import Welcome from "./welcome";
import AppBar from "./AppBar";

// Styled Components
import AppLayout from "./AppLayout";

class App extends Component {
	render() {
		return (
			<AppLayout>
				<AppBar />
				<Welcome />
			</AppLayout>
		);
	}
}

export default App;
