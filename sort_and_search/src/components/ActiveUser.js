import React from 'react';

export const ActiveUser = ({user}) => {
    return (
        <figure>
            <img
                src={`/images/${user.image}.svg`}
                alt={user.name}
                style={{width: 100}}
            />
            <div>Name: {user.name}</div>
            <div>Phone: {user.phone}</div>
            <div>Animal: {user.image}</div>
            <div><strong>Favorite phrase</strong>: {user.phrase}</div>
        </figure>
    );
};
