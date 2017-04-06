import React, { Component } from 'react';
import User from './User';


class UserPage extends Component {
    render() {
        return (
            <div>
                <h1>user page</h1>
                <User
                    name="Taras"
                    title="JS Developer"
                    skills={['JS', 'CSS']}
                />
            </div>
        );
    }
}

export default UserPage;
