import React from 'react';

export const UserData = ({user, setActiveUser}) => {
    return (
        <div
            style={{float: 'left'}}
            onClick={() => setActiveUser(user)}
        >
            <img
                src={`/images/${user.image}.svg`}
                alt={user.name}
                style={{width: 50}}
            />
            <div>{user.name}</div>
            <div>{user.age}</div>
            <div>{user.phone}</div>
        </div>
    );
};
