import React, { useState } from 'react';
import userList from './data';
import UserTable from './Table/UserTable';
import AddUserForm from './Forms/AddUserForm';
import Header from './Header';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EditUserForm from './Forms/EditUserForm';

const Directory = () => {
  const [users, setUsers] = useState(userList);
  const [editing, setEditing] = useState(false);
  const initialUser = { id: null, name: '', username: '' };
  const [currentUser, setCurrentUser] = useState(initialUser);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => setUsers(users.filter((user) => user.id !== id));

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (newUser) => {
    setUsers(users.map((user) => (user.id === currentUser.id ? newUser : user)));
    setEditing(false);
    setCurrentUser(initialUser);
  };

  return (
    <Router>
      <div>
        <h2>Add user</h2>
        <Route path="/edit" render={() => <EditUserForm updateUser={updateUser} currentUser={currentUser} setEditing={setEditing} />} />
        <Route exact path="/" render={() => <AddUserForm addUser={addUser} />} />
      </div>
    </Router>
  );
};

export default Directory;
