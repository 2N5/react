import React, { Component } from 'react';
import AddSkill from './AddSkill';
import Colors from './Colors/Colors';


class User extends Component {
    state = {
        skills: this.props.skills,
        favoriteColor: '',
        jokes: [],
        firstUserOutOfScreen: false
    };

    componentDidMount() {
        fetch('http://api.icndb.com/jokes/random/3')
            .then(data => data.json())
            .then(json => {
                this.setState({jokes: json.value})
            });
    }

    addSkill = (skill) => {
        this.setState({
            skills: this.state.skills.concat(skill)
        });
    };

    handleSelectColor = (favoriteColor) => {
        this.setState({favoriteColor});
    };

    render() {

        const {
            favoriteColor,
            jokes
        } = this.state;

        return (
            <div
                style={{background: favoriteColor}}
                ref={(div) => this.user = div}
            >
                <h3>{this.props.name}</h3>
                <h5>{this.props.title}</h5>
                <ul>
                    {this.state.skills.map((skill, i) => {
                        return (
                            <li key={i}>
                                {skill}
                            </li>
                        );
                    })}
                </ul>
                <p>Favorite color: {favoriteColor}</p>
                <div>
                    Favorite jokes:
                    {jokes.map(jokeObj => {
                        return (
                            <div key={jokeObj.id}>{jokeObj.joke}</div>
                        );
                    })}
                </div>
                <Colors onSelectColor={this.handleSelectColor}/>
                <AddSkill
                    skills={this.state.skills}
                    onAddSkillClick={this.addSkill}
                />
            </div>
            
        );
    }
}

export default User;
