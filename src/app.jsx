import React from 'react';
import ReactDOM from 'react-dom';

import Nav from "./components/Nav.jsx";
import ArticleContent from "./components/ArticleContent";
import SectionBest from "./components/SectionBest";
import ProductList from "./components/ProductList";

export class App extends React.Component {

	render() {

		var linki = ["PHOTOBOOKS", "CALENDARS", "CANVAS", "CARDS", "GIFT STATIONERY"];

		return (
			<div>
				<Nav links={linki} />
				<div className="mainpage">
				<ArticleContent />

				<SectionBest>
					<a href="#">1</a>
					<a href="#">2</a>
					<a href="#">3</a>
				</SectionBest>
				<ProductList />
				</div>
			</div>
		);
	}

}

ReactDOM.render(
	<App />,
	document.querySelector("#app"));
