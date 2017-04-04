import React, { Component } from 'react';
import UserCard from './UserCard';

class GithubUsers extends Component {
	constructor (props) {
		super(props);
		this.state = {
			loadedUsers: [],
			displayedUsers: [],
			btnText: 'Show more'
		}
	};

	componentDidMount () {
		fetch('https://api.github.com/users')
			.then(data => data.json())
			.then(users => {
				let loadedUsers = users;
				let displayedUsers = loadedUsers.slice(0, 10);

				this.setState({loadedUsers, displayedUsers})
			});
	};

	handleUsersAdd = (e) => {
		e.preventDefault();
		let { loadedUsers } = this.state;
		let { displayedUsers } = this.state;
		let lenDifference = loadedUsers.length - displayedUsers.length;

		if (!lenDifference) {
			this.setState({btnText: 'Loading...'})
			fetch(`https://api.github.com/users?since=${this.state.loadedUsers[loadedUsers.length -1].id}`)
				.then(data => data.json())
				.then(users => {
					let loaded = loadedUsers.concat(users);				
					let displayed = loaded.slice(0, loaded.length - 20);

					this.setState({loadedUsers: loaded,
								   displayedUsers: displayed, 
								   btnText: 'Show more'
					})
				});
		} else {
			let displayed = loadedUsers.slice(0, displayedUsers.length + 10);
			this.setState({displayedUsers: displayed}, () => {
				if (this.state.loadedUsers.length === this.state.displayedUsers.length) {
				this.setState({btnText: 'Load more'})
			}
			})
		}
	}

	render () {
		const { displayedUsers } = this.state;

		return (
			<div className='user-list'>
			{
				displayedUsers.map(user => {
							return <UserCard
											id={user.id}
			                                key={user.id}
			                                src={user.avatar_url}
			                                href={user.html_url}
			                                login={user.login}
			                        />;
						})
			}
			<button 
				type='button'
				className="btn btn-info btn-block"
				onClick={this.handleUsersAdd}>
					{this.state.btnText}
			</button>
			</div>
		);
	}
}

export default GithubUsers;
