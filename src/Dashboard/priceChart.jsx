import React from "react";
import highchartsConfig from "./highChartsConfig";
import { Tile } from "../Shared/tile";
import { AppContext } from "../App/AppProvider";
import ReactHighCharts from "react-highcharts";

function PriceChart() {
	return (
		<AppContext.Consumer>
			{({}) => (
				<Tile>
					<ReactHighCharts config={highchartsConfig()} />
				</Tile>
			)}
		</AppContext.Consumer>
	);
}

export default PriceChart;
