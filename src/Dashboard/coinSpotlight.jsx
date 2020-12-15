import React from "react";
import styled from "styled-components";
import { Tile } from "../Shared/tile";
import { AppContext } from "../App/AppProvider";
import CoinImage from "../Shared/coinImage";

const SpotlightName = styled.h2`
	text-align: center;
`;

function Spotlight() {
	return (
		<AppContext.Consumer>
			{({ currentFavorite, coinList }) => (
				<Tile>
					<SpotlightName>{coinList[currentFavorite].CoinName}</SpotlightName>
					<CoinImage spotlight coin={coinList[currentFavorite]} />
				</Tile>
			)}
		</AppContext.Consumer>
	);
}

export default Spotlight;
