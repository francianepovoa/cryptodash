import React from "react";
import highchartsConfig from "./highChartsConfig";
import { Tile } from "../Shared/tile";
import { AppContext } from "../App/AppProvider";
import ReactHighCharts from "react-highcharts";
import HighchartsTheme from "./highChartsTheme";
import ChartSelect from "./chartSelect";
ReactHighCharts.Highcharts.setOptions(HighchartsTheme);

function PriceChart() {
	return (
		<AppContext.Consumer>
			{({ historical, changeChargeSelect }) => (
				<Tile>
					<ChartSelect
						defaultValue='months'
						onChange={(e) => changeChargeSelect(e.target.value)}>
						<option value='days'>Days</option>
						<option value='weeks'>Weeks</option>
						<option value='months'>Months</option>
					</ChartSelect>
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
