import styled from "styled-components";
import {
	subtleBoxShadow,
	lightBlueBackground,
	greenBoxShadow,
	redBoxShadow,
} from "./styles";

//Style the grid coins
export const Tile = styled.div`
	${subtleBoxShadow};
	${lightBlueBackground};
	padding: 10px;
`;

export const SelectableTile = styled(Tile)`
	&:hover {
		cursor: pointer;
		${greenBoxShadow}
	}
`;
