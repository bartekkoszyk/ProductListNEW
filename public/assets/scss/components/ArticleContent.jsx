import React from 'react';

export default class ArticleContent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			status: "jeden"
		};
	}

	componentWillMount() {
		console.log("will mount");
	}

	componentDidMount() {
		console.log("did mount");
	}

	componentWillUpdate() {
		console.log("will update");
	}

	componentDidUpdate() {
		console.log("did update");
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("should update");
		return true;
	}

	buttonClick() {
		this.setState({status: "dwa"});
	}

	render() {
		console.log("render");

		var inlineCss = {
			float: "left",
			backgroundColor: "blue"
		};

		return (
			<div className="ArticleContent" style={inlineCss}>
				ArticleContent

				<br/>

				{this.state.status}

				<button onClick={this.buttonClick.bind(this)}>Klikaj</button>
			</div>);
	}

}