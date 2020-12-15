import React, { Component } from "react";
import styled from "styled-components";

import Page from "../Shared/page";

import PriceGrid from "./priceGrid";

import Spotlight from "./coinSpotlight";

const ChartGrid = styled.div`
	display: grid;
	margin-top: 20px;
	grid-gap: 15px;
	grid-template-columns: 1fr 3fr;
`;

class Settings extends Component {
	render() {
		return (
			<Page name='dashboard'>
				<PriceGrid />
				<ChartGrid>
					<Spotlight />
					<div>Chart goes here </div>
				</ChartGrid>
			</Page>
		);
	}
}
export default Settings;
