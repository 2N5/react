import React, { Component } from 'react';

class UserCard extends Component {

  render() {
    let Users = this.props.users;
    const list = Users.map(function(user){
      return (
          <figure key={user.id}>
            <img src={user.avatar_url} alt={user.name} />
            <br />
            {/*<figcaption>{user.name}</figcaption>*/}
            <a href={user.html_url}>{user.login}</a>
          </figure>
      );
    });
    return (
        <div>{list}</div>
    );
  }
}

export default UserCard;
