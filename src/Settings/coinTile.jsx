import React from "react";
import { AppContext } from "../App/AppProvider";
import { SelectableTile, DeletableTile, DisabledTile } from "../Shared/tile";
import CoinHeaderGrid from "./coinHeaderGrid";
import CoinImage from "../Shared/coinImage";

function CoinTile({ coinKey, topSection }) {
	return (
		<AppContext.Consumer>
			{({ coinList }) => {
				let coin = coinList[coinKey];
				let TileClass = SelectableTile;
				if (topSection) {
					TileClass = DeletableTile;
				}
				return (
					<TileClass>
						<CoinHeaderGrid
							topSection={topSection}
							name={coin.CoinName}
							symbol={coin.Symbol}
						/>
						<CoinImage coin={coin} />
					</TileClass>
				);
			}}
		</AppContext.Consumer>
	);
}

export default CoinTile;
