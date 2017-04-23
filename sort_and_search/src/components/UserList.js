import React from 'react';
import { UserData } from './UserData';

export const UserList = ({users = [], setActiveUser}) => {
    return (
        <div>
            {users.map((user) => {
                return (
                    <UserData
                        key={user.id}
                        user={user}
                        setActiveUser={setActiveUser}
                    />
                );
            })}
        </div>
    );
};
