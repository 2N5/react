import React, { Component } from 'react';
import AddSkill from './AddSkill';


class User extends Component {
    state = {
        skills: this.props.skills
    };

    addSkill = (skill) => {
        this.setState({
            skills: this.state.skills.concat(skill)
        });
    };

    render() {
        return (
            <div>
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
                <AddSkill onAddSkillClick={this.addSkill}/>
            </div>
            
        );
    }
}

export default User;