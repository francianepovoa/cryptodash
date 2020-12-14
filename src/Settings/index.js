import React, { Component } from "react";

import Welcome from "./welcome";

import ConfirmButton from "./ConfirmButton";

import Page from "../Shared/page";

import CoinGrid from "./coinGrid";

import Search from "./search";

class Settings extends Component {
	render() {
		return (
			<Page name='settings'>
				<Welcome />
				<CoinGrid topSection />
				<ConfirmButton />
				<Search />
				<CoinGrid />
			</Page>
		);
	}
}
export default Settings;
