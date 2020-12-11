import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import CoinTile from "./coinTile";

export const CoinGridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 15px;
	margin-top: 40px;
`;

function GetCoinsToDisplay(coinList, topSection, favorites) {
	return topSection ? favorites : Object.keys(coinList).slice(0, 100);
}

function CoinGrid({ topSection }) {
	return (
		<AppContext.Consumer>
			{({ coinList, favorites }) => (
				<CoinGridStyled>
					{GetCoinsToDisplay(coinList, topSection, favorites).map((coinKey) => (
						<CoinTile topSection={topSection} coinKey={coinKey} />
					))}
				</CoinGridStyled>
			)}
		</AppContext.Consumer>
	);
}

export default CoinGrid;
