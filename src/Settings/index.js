import React, { Component } from "react";

import Welcome from "./welcome";

import ConfirmButton from "./ConfirmButton";

import Page from "../Shared/page";

class Settings extends Component {
	render() {
		return (
			<Page name='settings'>
				<Welcome />
				<ConfirmButton />
			</Page>
		);
	}
}
export default Settings;
