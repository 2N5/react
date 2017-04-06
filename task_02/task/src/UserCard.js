import React, { Component } from 'react';
import './style.css';

class UserCard extends Component {
	state = {
		userName: ''
	}
	addName = (e) => {
		var nameUrl = 'https://api.github.com/user/'
    fetch(nameUrl + e.target.getAttribute(name))
    	.then(data => data.json())
    	.then(json => {
    		this.setState({userName: json.name})
    	})
   }
	render() {
		return (
			<div className="Content">
				<h1>Here our Figures</h1>
				<ul>
				{this.props.users.map((user, i) => {
					return (
						<li key={i}>
							<figure>
							<img name={i} onClick={this.addName} src={user.avatar_url} alt='avatar'/>
							<a target="_blank" href={user.html_url}>{user.login}</a>
							</figure>
						</li>
						);
				})}
				</ul>
			</div>
			);
	}
}

export default UserCard;
