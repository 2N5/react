import React from 'react';

export const SearchBar = ({onSearchChange}) => {
    return (
        <input
            placeholder="search..."
            onChange={onSearchChange}
        />
    );
};
