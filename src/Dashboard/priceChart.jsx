import React from "react";
import highchartsConfig from "./highChartsConfig";
import { Tile } from "../Shared/tile";
import { AppContext } from "../App/AppProvider";
import ReactHighCharts from "react-highcharts";
import HighchartsTheme from "./highChartsTheme";
ReactHighCharts.Highcharts.setOptions(HighchartsTheme);

function PriceChart() {
	return (
		<AppContext.Consumer>
			{({ historical }) => (
				<Tile>
					{historical ? (
						<ReactHighCharts config={highchartsConfig(historical)} />
					) : (
						<div>Loading Historical Data</div>
					)}
				</Tile>
			)}
		</AppContext.Consumer>
	);
}

export default PriceChart;
