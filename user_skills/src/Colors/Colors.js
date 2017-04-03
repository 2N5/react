import React, { Component } from 'react';
import {
    colorStyle,
    colorContainerStyles
} from './styles';


export default class Colors extends Component {
    state = {
        selectedColor: null
    };

    selectColor = (selectedColor) => {
        this.setState({selectedColor});
        this.props.onSelectColor(selectedColor);
    };

    render() {
        const colors = [
            'tomato',
            'cyan',
            'indigo',
            'orange'
        ];

        const {selectedColor} = this.state;

        const checkMark = <span>✔</span>;

        return (
            <div style={colorContainerStyles}>
                {colors.map((color) => {
                    return (
                        <div
                            key={color}
                            style={{...colorStyle, backgroundColor: color}}
                            onClick={() => this.selectColor(color)}
                        >
                            {selectedColor === color && checkMark}
                        </div>
                    );
                })}
            </div>
        );
    }
}