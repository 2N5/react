import React, { Component } from 'react';
import logo from './logo.svg';
import users from './users';
import './style.css';

class UserComand extends Component {
	render() {
		return (
			<div className="Content">
				<h1>Here our Figures</h1>
				<ul>
					{users.map((user, i) => {
						return (
							<li key={i}>
								<figure>
									<img src={user.avatar_url} alt={user.name + 'avatar'}/>
									<figcaption>{user.name}</figcaption>
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
console.log(users);

export default UserComand;
