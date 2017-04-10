import React, { Component } from 'react';
import User from './User';


const scrollButtonStyles = {
    width: 50,
    height: 50,
    position: 'fixed',
    right: 50,
    bottom: 50,
    fontSize: 32,
    cursor: 'pointer'
};


class UserPage extends Component {
    state = {
        showScrollTopButton: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const position = this.usersContainerNode.firstChild.getBoundingClientRect();

        this.setState({
            showScrollTopButton: position.top < -position.height
        });
    };

    moveToUsersTop = () => {
        window.scrollTo(0, this.usersContainerNode.offsetTop);
    };


    render() {
        const { showScrollTopButton } = this.state;
        
        return (
            <div>
                <h1>user page</h1>
                <div ref={(div) => this.usersContainerNode = div}>
                    <User
                        name="Taras"
                        title="JS Developer"
                        skills={['JS', 'CSS']}
                    />
                    <User
                        name="Anna"
                        title="Ruby Developer"
                        skills={['JS']}
                    />
                    <User
                        name="John"
                        title="Go Developer"
                        skills={['Go']}
                    />
                </div>
                {showScrollTopButton &&
                    <div
                        style={scrollButtonStyles}
                        onClick={this.moveToUsersTop}>🔝</div>}
            </div>
        );
    }
}

export default UserPage;
