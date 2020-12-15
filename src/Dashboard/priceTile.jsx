import React from "react";
import { AppContext } from "../App/AppProvider";
import styled, { css } from "styled-components";
import { SelectableTile } from "../Shared/tile";
import { fontSize3, fontSizeBig, greenBoxShadow } from "../Shared/styles";
import { CoinHeaderGridStyled } from "../Settings/coinHeaderGrid";

const JustifyRight = styled.div`
	justify-self: right;
`;

const JustifyLeft = styled.div`
	justify-self: left;
`;

const TickerPrice = styled.div`
	margin-top: 10px;
	${fontSizeBig};
`;

const ChangePct = styled.div`
	color: green;
	${(props) =>
		props.red &&
		css`
			color: red;
		`}
`;

const numberFormat = (number) => {
	return +(number + "").slice(0, 5);
};

const PriceTileStyle = styled(SelectableTile)`
	${(props) =>
		props.compact &&
		css`
			display: grid;
			${fontSize3};
			grid-gap: 3px;
			grid-template-columns: repeat(3, 1fr);
			justify-items: right;
		`}

	${(props) =>
		props.currentFavorite &&
		css`
			${greenBoxShadow};
			pointer-events: none;
		`}
`;

function ChangePercent({ data }) {
	return (
		<JustifyRight>
			<ChangePct red={data.CHANGEPCT24HOUR < 0}>
				{numberFormat(data.CHANGEPCT24HOUR)}%
			</ChangePct>
		</JustifyRight>
	);
}

function PriceTileData({ sym, data, currentFavorite, setCurrentFavorite }) {
	return (
		<PriceTileStyle
			onClick={setCurrentFavorite}
			currentFavorite={currentFavorite}>
			<CoinHeaderGridStyled>
				<div> {sym} </div>
				<ChangePercent data={data} />
			</CoinHeaderGridStyled>
			<TickerPrice>${numberFormat(data.PRICE)}</TickerPrice>
		</PriceTileStyle>
	);
}

function PriceTileCompact({ sym, data, currentFavorite, setCurrentFavorite }) {
	return (
		<PriceTileStyle
			compact
			onClick={setCurrentFavorite}
			currentFavorite={currentFavorite}>
			<JustifyLeft> {sym} </JustifyLeft>
			<ChangePercent data={data} />

			<div>${numberFormat(data.PRICE)}</div>
		</PriceTileStyle>
	);
}

function PriceTile({ price, index }) {
	let sym = Object.keys(price)[0];
	let data = price[sym]["USD"];
	let TileClass = index < 5 ? PriceTileData : PriceTileCompact;
	return (
		<AppContext.Consumer>
			{({ currentFavorite, setCurrentFavorite }) => (
				<TileClass
					sym={sym}
					data={data}
					currentFavorite={currentFavorite === sym}
					setCurrentFavorite={() => setCurrentFavorite(sym)}></TileClass>
			)}
		</AppContext.Consumer>
	);
}

export default PriceTile;
