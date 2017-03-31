import React, { Component } from 'react';

class AddSkill extends Component {
    handleAddSkillClick = (e) => {
        e.preventDefault();
        this.props.onAddSkillClick('react');
    }

    render() {
        return (
            <form>
                <input/>
                <button onClick={this.handleAddSkillClick}>
                    Add skill
                </button>
            </form>
        );
    }
}

export default AddSkill;