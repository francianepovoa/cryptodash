import React from "react";

import _ from "lodash";

import moment from "moment";

//Use CryptoCompare
const cc = require("cryptocompare");
cc.setApiKey(`${process.env.REACT_APP_CRYPTOCOMPARE_KEY}`);

export const AppContext = React.createContext();

const MAX_FAVORITES = 10;

const TIME_UNITS = 10;

export class AppProvider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: "dashboard",
			favorites: ["BTC", "ETH", "XMR", "DOGE"],
			timeInterval: "months",
			...this.savedSettings(),
			setPage: (page) => this.setState({ page }),
			addCoin: this.addCoin,
			removeCoin: this.removeCoin,
			isInFavorites: this.isInFavorites,
			confirmFavorites: this.confirmFavorites,
			setCurrentFavorite: this.setCurrentFavorite,
			setFilteredCoins: this.setFilteredCoins,
			changeChargeSelect: this.changeChargeSelect,
		};
	}

	componentDidMount = () => {
		this.fetchCoins();
		this.fetchPrices();
		this.fetchHistorical();
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

	//Return the prices of the coins
	fetchPrices = async () => {
		if (this.state.firstVisit) return;
		let prices = await this.prices();
		// We must filter the empty price objects (not in the lecture)
		prices = prices.filter((price) => Object.keys(price).length);
		this.setState({ prices });
	};

	//Return favorite historical
	fetchHistorical = async () => {
		if (this.state.firstVisit) return;
		let results = await this.historical();
		let historical = [
			{
				name: this.state.currentFavorite,
				data: results.map((ticker, index) => [
					moment()
						.subtract({ [this.state.timeInterval]: TIME_UNITS - index })
						.valueOf(),
					ticker.USD,
				]),
			},
		];
		this.setState({ historical });
	};

	prices = async () => {
		let returnData = [];
		for (let i = 0; i < this.state.favorites.length; i++) {
			try {
				let priceData = await cc.priceFull(this.state.favorites[i], "USD");
				returnData.push(priceData);
			} catch (e) {
				console.warn("Fetch price error:", e);
			}
		}
		return returnData;
	};

	historical = () => {
		let promises = [];
		for (let units = TIME_UNITS; units > 0; units--) {
			promises.push(
				cc.priceHistorical(
					this.state.currentFavorite,
					["USD"],
					moment()
						.subtract({ [this.state.timeInterval]: units })
						.toDate()
				)
			);
		}
		return Promise.all(promises);
	};

	// Change the states of the page
	confirmFavorites = () => {
		let currentFavorite = this.state.favorites[0];
		this.setState(
			{
				firstVisit: false,
				page: "dashboard",
				currentFavorite,
				prices: null,
				historical: null,
			},
			() => {
				this.fetchPrices();
				this.fetchHistorical();
			}
		);
		localStorage.setItem(
			"cryptoDash",
			JSON.stringify({
				favorites: this.state.favorites,
				currentFavorite,
			})
		);
	};

	//Set the state of app for current favorite
	setCurrentFavorite = (sym) => {
		this.setState(
			{
				currentFavorite: sym,
				historical: null,
			},
			this.fetchHistorical
		);
		localStorage.setItem(
			"cryptoDash",
			JSON.stringify({
				...JSON.parse(localStorage.getItem("cryptoDash")),
				currentFavorite: sym,
			})
		);
	};

	//Store the data
	savedSettings() {
		let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
		if (!cryptoDashData) {
			return { page: "settings", firstVisit: true };
		}
		let { favorites, currentFavorite } = cryptoDashData;
		return { favorites, currentFavorite };
	}

	setFilteredCoins = (filteredCoins) => this.setState({ filteredCoins });

	setPage = (page) => this.state({ page });

	changeChargeSelect = (value) => {
		this.setState(
			{ timeInterval: value, historical: null },
			this.fetchHistorical
		);
	};

	render() {
		return (
			<AppContext.Provider value={this.state}>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}
