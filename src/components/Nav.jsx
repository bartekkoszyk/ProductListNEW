import React from 'react';

export default class Nav extends React.Component {

	render() {

		var nav = "";
		if (this.props.links)
		{
			for (var i = 0; i < this.props.links.length; i++)
			{
				nav += "<a href='#' class='navigation'>" + this.props.links[i] + "</a>";
			}
		}

		var toReturn = {
			__html: nav
		}

		return (
			<div className="topbar" dangerouslySetInnerHTML={toReturn}>

			</div>);
	}

}
