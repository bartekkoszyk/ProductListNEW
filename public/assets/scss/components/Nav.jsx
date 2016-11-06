import React from 'react';

export default class Nav extends React.Component {

	render() {

		var nav = "";
		if (this.props.links)
		{
			for (var i = 0; i < this.props.links.length; i++)
			{
				nav += "<a href='#'>" + this.props.links[i] + "</a>";
			}
		}

		return (
			<div className="mojaNawigacja">
				<h3>{this.props.title}</h3>
				{nav}
			</div>);
	}

}