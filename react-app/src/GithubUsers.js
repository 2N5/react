import React, { Component } from 'react';
import UserCard from "./UserCard";

class GithubUsers extends Component {

  state = {
    users: []
  };

  componentDidMount() {
    fetch('https://api.github.com/users')
        .then(data => data.json())
        .then(json => {
          this.setState({users: json});
        });
  }

  render() {
    return (
        <UserCard users={this.state.users} />
    );
  };

}

export default GithubUsers;
