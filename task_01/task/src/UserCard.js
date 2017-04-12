import React, { Component } from 'react';
import './style.css';

class UserComand extends Component {
	state = {
		userName: ''
	}
	addName = (e) => {
		let nameUrl = 'https://api.github.com/user/';
		let userId = e.target.getAttribute('id');
		console.log(e.target);
    fetch(nameUrl + userId)
    	.then(data => data.json())
    	.then(json => {
    		this.setState({userName: json.name});
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
							<img id={i} onClick={this.addName} src={user.avatar_url} alt='avatar'/>
							<figcaption>{this.state.userName}</figcaption>
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

export default UserComand;
