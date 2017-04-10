import React, { Component } from 'react';
import './user.css';

class UserCard extends Component {

  constructor (props) {
    super(props);

    this.state = {
      showName: false,
      name: ''
    }

  }

  showName = (e) => {
    let userId = e.target.id;
    console.log(userId);
    fetch(`https://api.github.com/user/${userId}`).then(data => data.json()).then(json => {
      this.setState({name: json.name});
      this.setState({showName: true});
    });
  };



  render() {

    let nameBox = <figcaption />;
    if (this.state.name !== '') {
      nameBox = <figcaption>{this.state.name}</figcaption>
    }

    return (
        <table className="userTable" id={this.props.user.id}>
          <tbody>
            <tr>
              <td className="avatar">
                <img id={this.props.user.id} src={this.props.user.avatar_url} alt={this.props.user.name}
                     onClick={this.showName}/>
              </td>
              <td className="desc">
                {nameBox}
                <a href={this.props.user.html_url}>{this.props.user.login}</a> - <span>{this.props.user.id}</span>
              </td>
            </tr>
          </tbody>
        </table>
    );
  }
}

export default UserCard;
