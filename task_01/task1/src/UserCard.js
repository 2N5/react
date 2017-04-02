import React, { Component } from 'react';

export default class UserCard extends Component {
	render () {
		return (
			<figure>
				<img src={this.props.src}
					 alt={this.props.altImg}
				/>
				<figcaption>{this.props.name}</figcaption>
				<a href={this.props.href} target='_blank'>{this.props.login}</a>
			</figure>
		);
	}
}
