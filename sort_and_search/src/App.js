import React, { Component } from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { ToolBar } from './components/ToolBar';
import { UserList } from './components/UserList';
import { users } from './data';
import { ActiveUser } from './components/ActiveUser';


class App extends Component {
  state = {
    displayedUsers: users,
    isSortedByNameAsc: false,
    isSortedByAgeAsc: false,
    activeUser: users[0]
  };

  filterUsers = (str) => {
    const filteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(str.trim().toLowerCase());
    });
    this.setState({
      displayedUsers: filteredUsers
    });
  };


  handleSearchChange = (e) => {
    this.filterUsers(e.target.value);
  };

  handleSortBy = (type) => {
    const sortStateName = type === 'name' ? 'isSortedByNameAsc' : 'isSortedByAgeAsc';
    this.setState({
      displayedUsers: this.state.displayedUsers.sort((a, b) => {
        if(this.state[sortStateName]) {
          [a, b] = [b, a];
        }

        if(a[type] === b[type]) {
          return 0;
        }
        return a[type] > b[type] ? 1 : -1;
        
      }),
      [sortStateName]: !this.state[sortStateName]
    });
    
  };

  setActiveUser = (user) => {
    this.setState({
      activeUser: user
    });
  };
  

  render() {
    return (
      <div className="App">
        <SearchBar onSearchChange={this.handleSearchChange}/>
        <ToolBar
          sortByName={() => this.handleSortBy('name')}
          sortByAge={() => this.handleSortBy('age')}
        />
        <div style={{display: 'flex'}}>
          <ActiveUser user={this.state.activeUser}/>
          <UserList
            users={this.state.displayedUsers}
            setActiveUser={this.setActiveUser}
          />
        </div>
      </div>
    );
  }
}

export default App;
