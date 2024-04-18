import React, { useState } from 'react';
import User from './User';

function UserList() {
    const [users, setUsers] = useState([
        {
            name: 'Dmitro',
            age: 22,
        },
        {
            name: 'Svetl',
            age: 25,
        },
        {
            name: 'Ruslan',
            age: 20,
        },
    ]);

    function addUser() {
        const newUser = {
            name: 'New User',
            age: Math.floor(Math.random() * 50) + 18, 
        };
        setUsers([...users, newUser]);
    }

    const usersContent = users.map((item, index) => <User key={index} user={item} />);

    return (
        <>
            <p>UserList</p>
            <button onClick={addUser}>Add User</button>
            {usersContent}
        </>
    );
}

export default UserList;