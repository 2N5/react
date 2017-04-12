import React, { Component } from 'react';
import UserComand from './UserComand'

class GithubUsers extends Component {
	state = {
		users: [],
		nextUsers: [],
		nextUsersCounter: 10,
		isLoading: false,
		btnText: '',
		loadBtnShow: true
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
		const githubUsersUrl = 'https://api.github.com/users'
		fetch(githubUsersUrl)
				.then(users => users.json())
				.then(json => {
					this.setState({users: json, nextUsers: this.state.users.slice(0, this.state.nextUsersCounter)})
				})
				.then(() => {
					this.setState({nextUsers: this.state.users.slice(0, this.state.nextUsersCounter)})
				});
	}

	componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  newUsersRequest() {
  	let {users} = this.state,
			{nextUsers} = this.state,
			{nextUsersCounter} = this.state

		this.setState({isLoading: true});

		var newUsersUrl = 'https://api.github.com/users?since=';
		fetch(newUsersUrl + users.length)
		.then(users => users.json())
		.then(json => {
				this.setState({users : users.concat(json)})
		})
		.then(() => {
			this.setState({nextUsersCounter: (nextUsersCounter + 10), nextUsers: this.state.users.slice(0, (this.state.nextUsersCounter + 10))});
		})
		.then(() => {
			this.setState({isLoading: false})
		})
  }

  addNewTenUsers() {
  	let {users} = this.state,
			{nextUsers} = this.state,
			{nextUsersCounter} = this.state
  	this.setState({nextUsersCounter: (nextUsersCounter + 10), nextUsers: users.slice(0, (nextUsersCounter + 10))})
  }

	handleScroll = () => {
		const lastUserPosition = this.usersContainerNode.firstChild.children[1].lastChild.getBoundingClientRect();
		let bottomPadding = 20
		const addAndLoadUsers = () => {
			let {users} = this.state,
					{nextUsers} = this.state,
					{nextUsersCounter} = this.state

			if(users.length === nextUsers.length) {
				this.newUsersRequest();
			}
			else {
				this.addNewTenUsers()
			}
		}
  	if(!this.state.loadBtnShow) {
  		if((lastUserPosition.bottom + bottomPadding) < window.innerHeight) {
  			setTimeout(addAndLoadUsers, 1000);
  			console.log('done');
  		}
  	}
  }

	addNewUsers = (e) => {
		let {users} = this.state,
			{nextUsers} = this.state,
			{nextUsersCounter} = this.state

		if(users.length === nextUsers.length) {
			this.newUsersRequest();
		}
		else {
			this.addNewTenUsers()
		}
		let hideButton = () => {
			const position = this.usersContainerNode.firstChild.children[1].lastChild.getBoundingClientRect();
    	this.setState({
      	loadBtnShow: position.top < window.innerHeight
    	})
		}
		setTimeout(hideButton, 500);
	}

	render() {
		if (this.state.users.length === this.state.nextUsers.length) {
				this.state.btnText = 'Load More'
		} else {
			this.state.btnText = 'Show More'
		}
		if (this.state.isLoading) {
			this.state.btnText = 'Loading...'
		}
		return (
			<div style={{textAlign: 'center'}} ref={(div) => this.usersContainerNode = div}>
				<UserComand users={this.state.nextUsers} />
				{this.state.loadBtnShow && <button onClick={this.addNewUsers} style={{width: '50%'}}>{this.state.btnText}</button>}
				{this.state.isLoading && <div className="loading">Loading...</div>}
			</div>
		);
	}
}

export default GithubUsers;
