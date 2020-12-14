import React from "react";
import styled, { css } from "styled-components";
import { SelectableTile } from "../Shared/tile";
import { fontSize3, fontSizeBig } from "../Shared/styles";
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
`;

function ChangePercent({ data }) {
	return (
		<JustifyRight>
			<ChangePct red={data.CHANGEPCT24HOUR < 0}>
				{numberFormat(data.CHANGEPCT24HOUR)}
			</ChangePct>
		</JustifyRight>
	);
}

function PriceTileData({ sym, data }) {
	return (
		<PriceTileStyle>
			<CoinHeaderGridStyled>
				<div> {sym} </div>
				<ChangePercent data={data} />
			</CoinHeaderGridStyled>
			<TickerPrice>${numberFormat(data.PRICE)}</TickerPrice>
		</PriceTileStyle>
	);
}

function PriceTileCompact({ sym, data }) {
	return (
		<PriceTileStyle compact>
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
	return <TileClass sym={sym} data={data}></TileClass>;
}

export default PriceTile;
