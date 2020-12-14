import React, { Component } from "react";

import Page from "../Shared/page";

import PriceGrid from "./priceGrid";

class Settings extends Component {
	render() {
		return (
			<Page name='dashboard'>
				<PriceGrid />
			</Page>
		);
	}
}
export default Settings;
