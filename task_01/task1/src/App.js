import React, { Component } from 'react';
import UserCard from './UserCard';
import USERS from './users';
import './App.css';

class App extends Component {
    constructor (props) {
        super (props);
        this.state = {
            displayedUsers: USERS
        };

        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch (event) {
        let searchQuery = event.target.value.toLowerCase();
        let displayedUsers = USERS.filter(function(user) {
            let searchValue = user.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayedUsers: displayedUsers
        });
    }

    render () {
        return (
            <div className='search-users'>
                <input type="text"
                       className="search-field"
                       onChange={this.handleSearch}
                       placeholder='search...'
                />
                <div className='user-list'>
                    {
                        this.state.displayedUsers.map(function (user) {
                            return <UserCard
                                key={user.id}
                                src={user.avatar_url}
                                href={user.html_url}
                                login={user.login}
                                name={user.name}
                                altImg={user.name + ' avatar'}
                            />;
                        })
                    }
                </div>
            </div>
        );
    }
}

export default App;
