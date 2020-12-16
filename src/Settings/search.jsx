import React from "react";
import { AppContext } from "../App/AppProvider";

import _ from "lodash";
import fuzzy from "fuzzy";
import styled from "styled-components";

import { backgroundColor2, fontSize2 } from "../Shared/styles";

const SearchGrid = styled.div`
	display: grid;
	grid-template-columns: 250px 1fr;
`;

const SearchInput = styled.input`
	${backgroundColor2};
	${fontSize2};

	border: 1px solid;
	height: 30px;
	color: #1163c9;
	place-self: center left;
`;

const handlerFilter = _.debounce((_inputValue, coinList, setFilteredCoins) => {
	//Get all the coin symbols
	let coinSymbols = Object.keys(coinList);
	// Get all the coin names, ap symbol to name
	let coinNames = coinSymbols.map((sym) => coinList[sym].CoinName);
	let allStringsToSearch = coinSymbols.concat(coinNames);
	let fuzzyResults = fuzzy
		.filter(_inputValue, allStringsToSearch, {})
		.map((result) => result.string);
	let filteredCoins = _.pickBy(coinList, (result, symKey) => {
		let coinName = result.CoinName;
		return (
			_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName)
		);
	});
	console.log(filteredCoins);
	setFilteredCoins(filteredCoins);
}, 500);

function filterCoins(e, setFilteredCoins, coinList) {
	let inputValue = e.target.value;
	if (!inputValue) {
		setFilteredCoins(null);
		return;
	}
	handlerFilter(inputValue, coinList, setFilteredCoins);
}

function Search() {
	return (
		<AppContext.Consumer>
			{({ setFilteredCoins, coinList }) => (
				<SearchGrid>
					<h2>Search for coins:</h2>
					<SearchInput
						onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}
					/>
				</SearchGrid>
			)}
		</AppContext.Consumer>
	);
}

export default Search;
