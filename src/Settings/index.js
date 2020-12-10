import React, { Component } from "react";

import Welcome from "./welcome";

import ConfirmButton from "./ConfirmButton";

import Page from "../Shared/page";

import CoinGrid from "./coinGrid";

class Settings extends Component {
	render() {
		return (
			<Page name='settings'>
				<Welcome />
				<ConfirmButton />
				<CoinGrid />
			</Page>
		);
	}
}
export default Settings;
