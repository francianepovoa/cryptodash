import React from "react";
import styled from "styled-components";
import PriceTile from "./priceTile";
import { AppContext } from "../App/AppProvider";

const PriceGridStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 15px;
	margin-top: 40px;
`;

function PriceGrid() {
	return (
		<AppContext.Consumer>
			{({ prices }) => (
				<PriceGridStyle>
					{prices.map((price, index) => (
						<PriceTile
							key={` priceTile-${index} `}
							index={index}
							price={price}
						/>
					))}
				</PriceGridStyle>
			)}
		</AppContext.Consumer>
	);
}

export default PriceGrid;
