import React, { Component } from 'react';
import UserCard from "./UserCard";
import './user.css';

class GithubUsers extends Component {

  state = {
    users: [],
    lastUserId: 0,
    isLoading: true
  };

  componentDidMount() {
    this.setState({isLoading: true});
    fetch('https://api.github.com/users')
        .then(data => data.json())
        .then(json => {
          this.setState({users: json});
          this.setState({isLoading: false});
        });

  }

  loadMore = () => {
    if (this.state.users.length > 0){
      this.setState({isLoading: true});
      let lastUserId = this.state.users[this.state.users.length - 1].id;
      fetch(`https://api.github.com/users?since=${lastUserId}`).then(data => data.json()).then(json => {
        this.setState({users: this.state.users.concat(json)});
        this.setState({isLoading: false});
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


    let buttonText = 'Load more';
    if(this.state.isLoading){
      buttonText = 'Loading...';
    }
    let showMore = <button data-last-id={this.state.lastUserId} className="showMore" type="button" onClick={this.loadMore}>{buttonText}</button>

    return (
        <div>
          {list}
          {showMore}
        </div>
    );

  };

}

export default GithubUsers;
