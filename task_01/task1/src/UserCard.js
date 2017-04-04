import React, { Component } from 'react';

export default class UserCard extends Component {
	constructor (props) {
		super(props);

		this.state = {
			showName: false,
			name: ''
		}
	}

	handleImageClick = () => {
		if (name) {
			this.setState({showName: true})
		} else {
			fetch(`https://api.github.com/user/${this.props.id}`)
			.then(data => data.json())
			.then(user => {
				this.setState({name: user.name, showName: true})
			});
		}
	}

	render () {
		return (
			<figure id={this.props.id}>
				<img src={this.props.src}
					 alt={this.props.login}
					 onClick={this.handleImageClick}
				/>
				<figcaption>{this.state.name}</figcaption>
				<a href={this.props.href} target='_blank'>{this.props.login}</a>
			</figure>
		);
	}
}
