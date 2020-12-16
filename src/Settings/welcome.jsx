import React from "react";
import { AppContext } from "../App/AppProvider";

function Welcome({ firstVisit }) {
	return (
		<AppContext.Consumer>
			{({ firstVisit }) =>
				firstVisit ? (
					<div>
						Welcome to CryptoDash, please select up to 10 favorite coins to
						begin. {""}
					</div>
				) : (
					<div>Your favorite coins {""}</div>
				)
			}
		</AppContext.Consumer>
	);
}

export default Welcome;
