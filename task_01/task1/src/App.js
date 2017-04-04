import React, { Component } from 'react';
import GithubUsers from './GithubUsers';
import './App.css';

class App extends Component {
    constructor (props) {
        super (props);
        this.state = {
            displayedUsers: []
        };

        //раскомментировать, если использовать объявление
        //функции вида:
        //handleSearch (event) {}

        //this.handleSearch = this.handleSearch.bind(this)
    }

    // handleSearch = (event) => {
    //     let searchQuery = event.target.value.toLowerCase();
    //     let displayedUsers = USERS.filter(function(user) {
    //         let searchValue = user.name.toLowerCase();
    //         return searchValue.indexOf(searchQuery) !== -1;
    //     });
    //     //this ссылается на класс, т.к. стрелочные функции
    //     //не имеют собственного контекста this!
    //     this.setState({
    //         displayedUsers: displayedUsers
    //     });
    // }

    render () {
        return (
            <div className='search-users'>
                <input type="text"
                       className="search-field"
                       onChange={this.handleSearch}
                       placeholder='search...'
                />
                <GithubUsers />
            </div>
        );
    }
}

export default App;
