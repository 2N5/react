import React, { Component } from 'react';
import UserCard from './UserCard'

class GithubUsers extends Component {
	state = {
		users: [],
		nextUsers: [],
		nextTen: 10,
		isLoading: false
	}
	componentDidMount() {
		fetch('https://api.github.com/users')
				.then(users => users.json())
				.then(json => {
					this.setState({users: json});
					this.setState({nextUsers: this.state.users.slice(0,this.state.nextTen)})
				})
	}
	addNewUsers = (e) => {
		let {users} = this.state,
				{nextUsers} = this.state,
				{nextTen} = this.state

		if(users.length === nextUsers.length) {

			this.setState({isLoading: true});

			var newUsersUrl = 'https://api.github.com/users?since=';
			fetch(newUsersUrl + users.length)
			.then(users => users.json())
			.then(json => {
					this.setState({users : users.concat(json)})
				})
			.then(() => {
				this.setState({nextTen: (nextTen + 10)})
				this.setState({nextUsers: this.state.users.slice(0, (this.state.nextTen))});
			})
			.then(() => {
				this.setState({isLoading: false})
			})
		} else {
			if (users.length - nextUsers.length === 10) {
				e.target.textContent = 'Load More';
			}
			this.setState({nextTen: (nextTen + 10)});
			this.setState({nextUsers: users.slice(0, (nextTen + 10))});
		}
	}
	render() {
		var loading;
		if (this.state.isLoading) {
			loading = 'Loading...'
		}
		return (
			<div style={{textAlign: 'center'}}>
				<UserCard users={this.state.nextUsers} />
				<button onClick={this.addNewUsers} style={{width: '50%'}}>{loading || 'Show More'}</button>
			</div>
		);
	}
}

export default GithubUsers;
