import React, { Component } from 'react';

class AddSkill extends Component {
    state = {
        enteredSkill: ''
    };

    handleSkillInputChange = (e) => {
        this.setState({
            enteredSkill: e.target.value
        });
    };

    handleAddSkillClick = (e) => {
        e.preventDefault();
        const { enteredSkill } = this.state;

        this.props.onAddSkillClick(enteredSkill);
        this.setState({
            enteredSkill: ''
        });
    };

    render() {
        const { enteredSkill } = this.state;

        return (
            <form>
                <input
                    onChange={this.handleSkillInputChange}
                    value={enteredSkill}
                />
                <button onClick={this.handleAddSkillClick}>
                    Add skill
                </button>
            </form>
        );
    }
}

export default AddSkill;