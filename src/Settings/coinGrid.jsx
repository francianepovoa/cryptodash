import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import CoinTile from "./coinTile";

export const CoinGridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 15px;
	margin-top: 40px;
`;

function getLowerSectionCoins(coinList, filteredCoins) {
	return (
		(filteredCoins && Object.keys(filteredCoins)) ||
		Object.keys(coinList).slice(0, 100)
	);
}

function GetCoinsToDisplay(coinList, topSection, favorites, filterCoins) {
	return topSection ? favorites : getLowerSectionCoins(coinList, filterCoins);
}

function CoinGrid({ topSection }) {
	return (
		<AppContext.Consumer>
			{({ coinList, favorites, filteredCoins }) => (
				<CoinGridStyled>
					{GetCoinsToDisplay(
						coinList,
						topSection,
						favorites,
						filteredCoins
					).map((coinKey) => (
						<CoinTile key={coinKey} topSection={topSection} coinKey={coinKey} />
					))}
				</CoinGridStyled>
			)}
		</AppContext.Consumer>
	);
}

export default CoinGrid;
