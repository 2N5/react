import React from 'react';

export const ToolBar = ({sortByName, sortByAge}) => {
    return (
        <div>
            <button onClick={sortByName}>Sort in alphabet order</button>
            <button onClick={sortByAge}>Sort by age</button>
        </div>
    );
};
