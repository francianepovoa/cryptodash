import React from "react";

//Use CryptoCompare
const cc = require("cryptocompare");

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: "dashboard",
			...this.savedSettings(),
			setPage: (page) => this.setState({ page }),
			confirmFavorites: this.confirmFavorites,
		};
	}

	componentDidMount = () => {
		this.fetchCoins();
	};

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
				test: "Hello",
			})
		);
	};

	//Store the data
	savedSettings() {
		let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
		if (!cryptoDashData) {
			return { page: "settings", firstVisit: true };
		}
		return {};
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
