import React, { Component } from 'react';
import UserCard from "./UserCard";
import './user.css';

class GithubUsers extends Component {

  state = {
    users: [],
    lastUserId: 0
  };

  componentDidMount() {
    fetch('https://api.github.com/users')
        .then(data => data.json())
        .then(json => {
          this.setState({users: json});
        });

  }

  loadMore = (e) => {
    if (this.state.users.length > 0){
      let lastUserId = this.state.users[this.state.users.length - 1].id;
      fetch(`https://api.github.com/users?since=${lastUserId}`).then(data => data.json()).then(json => {
        this.setState({users: this.state.users.concat(json)});
      });
    }
  };


  render() {

    let Users = this.state.users;
    const list = Users.map((user) => {
      return (
          <figure key={user.id}>
            <UserCard user={user} />
          </figure>
      );
    });

    let showMore = <button data-last-id={this.state.lastUserId} className="showMore" type="button" onClick={this.loadMore}>Load more</button>

    return (
        <div>
          {list}
          {showMore}
        </div>
    );

  };

}

export default GithubUsers;
