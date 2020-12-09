import React, { Component } from "react";

import Welcome from "./welcome";

import ConfirmButton from "./ConfirmButton";

class Settings extends Component {
	render() {
		return (
			<div>
				<Welcome />
				<ConfirmButton />
			</div>
		);
	}
}
export default Settings;
