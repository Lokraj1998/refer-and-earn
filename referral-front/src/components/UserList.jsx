import React from 'react';
import { UserTable } from './UserItem'; // Change this line to import UserTable

export const UserList = (props) => {
    const { users, rewardEditable } = props;
    return (
        <div style={{ display: "flex" }}>
            <UserTable users={users} rewardEditable={rewardEditable} />
        </div>
    );
};