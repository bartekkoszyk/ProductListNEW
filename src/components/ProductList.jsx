import React from 'react';

export default class ProductList extends React.Component {

	render()
	{

		var products = [];
		for (var i=0; i<100; i++) {
			products.push({
				name: "Produkt " + i,
				img: "/assets/prod/" + i +".jpg"
			});
		}

		var output = "";
		for (var i=0; i<100; i++) {
			output += "<div class='product'>" + "<img src='" + products[i].img + "'" + "</img>" + products[i].name + "</div>";
		}
		var toReturn = {
			__html: output
		}

		return (<div className="productlist" dangerouslySetInnerHTML={toReturn}></div>)
	}

}
