# CryptoDash is an application built on React.js

<p align="center">
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/francianepovoa/cryptodash">
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/francianepovoa/cryptodash">
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/francianepovoa/cryptodash">
<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/francianepovoa/cryptodash">
</p>

<p align="center"> 
  <a href="#-frontend-technologies">Frontend Technologies</a>&nbsp;|&nbsp;
  <a href="#-frontend-getting-started">Frontend Getting Started</a>&nbsp;|&nbsp
  <a href="#-how-to-contribute-frontend">How To Contribute</a>&nbsp;|&nbsp;
</p>

## 👨🏻‍💻 About the project

This is a Cryptocurrency Dashboard project using React.js, Context API, styled-components & CSS Grid. 

##### Settings Page with Intro greeting
 * Greeting the user on first visit, asking them to choose their favorites
 * Providing a default 4 coins as favorites & a complete list of all coins
 * Searching for coins with fuzzy search
 * Adding/Removing coins on the list of favorites

##### Dashboard
* Data initializes from remembered favorites, or forwards to the Settings page
* Renders a line chart for the 10 historical points on the current favorite symbol
* Select coins changes and re-fetch data, remember the current favorite
* Select to render historical data points on Date: Days Weeks Months
* Display name and image of coin next to the chart

## 🚀 Frontend Technologies
<h1 align="center">
	<img alt="Project Screenshots" src="./public/images/Home.gif"  />
</h1>

Technologies that I used to develop this frontend app

- [ReactJS](https://reactjs.org)
- [styled-components](https://styled-components.com/)
- [CryptoCompare](https://min-api.cryptocompare.com/)
- [Highcharts](https://www.highcharts.com/demo)
- [VS Code](https://code.visualstudio.com) with [ESLInt](https://eslint.org/docs/user-guide/getting-started), and [Prettier RC](https://github.com/prettier/prettier)

## 💻 Frontend getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)


**Clone the project and access the folder**

```bash
$ git clone https://github.com/francianepovoa/cryptodash.git

$ cd cryptodash

```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Run the web app
$ yarn start
```

## Set your CryptoCompare API Key

Remember to replace the `cc.setApiKey` variable in your `AppProvider.jsx`with your own API key from the CryptoCompare! 
You can create a free API key in the CryptoCompare website. It is also possible to use the application without an API key but there are limits related to speed and fetching data. 

```bash
# Use without an API key
$ const cc = require('cryptocompare')

# Using your API Key
$ const cc = require('cryptocompare')
cc.setApiKey('<your-api-key>')
```
## 🤔 How to contribute frontend

**Follow the steps below**

```bash
# Clone your fork
$ git clone https://github.com/francianepovoa/cryptodash.

$ cd cryptodash

# Create a branch with your feature
$ git checkout -b your-feature

# Make the commit with your changes
$ git commit -m 'feat: Your new feature'

# Send the code to your remote branch
$ git push origin your-feature
```

After your pull request is merged, you can delete your branch

## 📝 Frontend License

This project is under the MIT license. See the [LICENSE](https://github.com/francianepovoa/cryptodash/blob/master/LICENSE) for more information.

Made with ♥ by Franciane Póvoa :wave: [Get in touch!](https://github.com/francianepovoa) 