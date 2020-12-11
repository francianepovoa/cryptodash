import React from "react";

import _ from "lodash";

//Use CryptoCompare
const cc = require("cryptocompare");
cc.setApiKey(`${process.env.REACT_APP_CRYPTOCOMPARE_KEY}`);

export const AppContext = React.createContext();

const MAX_FAVORITES = 10;

export class AppProvider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: "dashboard",
			favorites: ["BTC", "ETH", "XMR", "DOGE"],
			...this.savedSettings(),
			setPage: (page) => this.setState({ page }),
			addCoin: this.addCoin,
			removeCoin: this.removeCoin,
			isInFavorites: this.isInFavorites,
			confirmFavorites: this.confirmFavorites,
		};
	}

	componentDidMount = () => {
		this.fetchCoins();
	};

	//Add New Coin in the top page
	addCoin = (key) => {
		let favorites = [...this.state.favorites];
		if (favorites.length < MAX_FAVORITES) {
			favorites.push(key);
			this.setState({ favorites });
		}
	};

	//Remove Coin the top page
	removeCoin = (key) => {
		let favorites = [...this.state.favorites];
		this.setState({ favorites: _.pull(favorites, key) });
	};

	// Disable coin when it's in favorites
	isInFavorites = (key) => _.includes(this.state.favorites, key);

	//Return the list of coins
	fetchCoins = async () => {
		let coinList = (await cc.coinList()).Data;
		this.setState({ coinList });
	};

	// Change the states of the page
	confirmFavorites = () => {
		this.setState({
			firstVisit: false,
			page: "dashboard",
		});
		localStorage.setItem(
			"cryptoDash",
			JSON.stringify({
				favorites: this.state.favorites,
			})
		);
	};

	//Store the data
	savedSettings() {
		let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
		if (!cryptoDashData) {
			return { page: "settings", firstVisit: true };
		}
		let { favorites } = cryptoDashData;
		return { favorites };
	}

	setPage = (page) => this.state({ page });

	render() {
		return (
			<AppContext.Provider value={this.state}>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}
