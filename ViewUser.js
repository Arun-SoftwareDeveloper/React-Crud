import React, { useState } from 'react';
import UserTable from './Table/UserTable'; // Assuming you have a UserTable component defined
import Header from './Header';

function ViewUser(props) {
  const userList = [
    {
        id: 1,
        name: 'Frank',
        username: 'Frank Degrassi'
    },
    {
        id: 2,
        name: 'Birgit',
        username: 'Birgit Boswald'
    }
];

  const [users, setUsers] = useState(userList);
  const [editing, setEditing] = useState(false);
  const initialUser = { id: null, name: '', username: '' };
  const [currentUser, setCurrentUser] = useState(initialUser);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (newUser) => {
    setUsers(users.map((user) => (user.id === currentUser.id ? newUser : user)));
  };

  return (
    <div>
<Header heading={props.header}>Welcome to View User Page!!!</Header>

      <h2>View users</h2>
      <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
}

export default ViewUser;
