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

function GetCoinsToDisplay(coinList) {
	return Object.keys(coinList).slice(0, 100);
}

function CoinGrid() {
	return (
		<AppContext.Consumer>
			{({ coinList }) => (
				<CoinGridStyled>
					{GetCoinsToDisplay(coinList).map((coinKey) => (
						<CoinTile coinKey={coinKey} />
					))}
				</CoinGridStyled>
			)}
		</AppContext.Consumer>
	);
}

export default CoinGrid;
