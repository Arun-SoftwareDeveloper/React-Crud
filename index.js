import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import Directory from './Directory'
import EditUserForm from './Forms/EditUserForm';
import AddUserForm from './Forms/AddUserForm';
import ShowUser from './ShowUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <EditUserForm></EditUserForm> */}
     {/* <Directory></Directory> */}
     {/* <ShowUser></ShowUser> */}
       {/* <Header></Header> */}
    {/* <AddUserForm></AddUserForm> */}
    <App></App>
    {/* <ViewUser></ViewUser> */}
   </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
