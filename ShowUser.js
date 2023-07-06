import React,{useState} from "react";
import UserTable from "./Table/UserTable";
import userList from "./data";
import AddUserForm from './Forms/AddUserForm.js';
import Header from './Header.js';
import EditUserForm from './Forms/EditUserForm.js';


function ShowUser() {
    const [users, setUsers] = useState(userList);
    const [editing, setEditing] = useState(false);
    const initialUser = {id: null, name: '', username: ''};
  
    const [currentUser, setCurrentUser] = useState(initialUser);
    const addUser = user => {
      user.id = users.length + 1;
      setUsers([...users, user]);
    }
  const deleteUser = id => setUsers(users.filter(user => user.id !== id));

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  }

  return (
    <div>
    <h2>View users</h2>
    <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
    
    </div>
   
  )
}

export default ShowUser