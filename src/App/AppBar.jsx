/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";

const Bar = styled.div`
	display: grid;
	grid-template-columns: 160px auto 120px 100px;
`;

export default function () {
	return (
		<Bar>
			<div>CryptoDash</div>
			<div></div>
			<div>DashBoard</div>
			<div>Settings</div>
		</Bar>
	);
}
