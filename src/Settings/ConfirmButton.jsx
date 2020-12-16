import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import { fontSize1, color } from "../Shared/styles";

const ConfirmButtonStyled = styled.div`
	margin: 50px 20px 20px;
	background-color: #e1eaee;
	color: ${color};
	${fontSize1};
	padding: 8px;
	cursor: pointer;
	border: 2px solid;
	border-radius: 10px;
	&:hover {
		box-shadow: 0px 0px 4px 2px #03a9f4;
	}
`;

export const CenterDiv = styled.div`
	display: grid;
	justify-content: right;
`;

function ConfirmButton() {
	return (
		<AppContext.Consumer>
			{({ confirmFavorites }) => (
				<CenterDiv>
					<ConfirmButtonStyled onClick={confirmFavorites}>
						Confirm Favorites
					</ConfirmButtonStyled>
				</CenterDiv>
			)}
		</AppContext.Consumer>
	);
}

export default ConfirmButton;
