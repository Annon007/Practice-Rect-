import React,{useState} from 'react';

import AddUser from './components/Users/addUser';
import styles from "./App.module.css"
let allUsers=[];
function App() {
  const [users,setUsers]=useState();

  const handelUser=(user)=>{
    allUsers.push(user)
    setUsers(prev=>{
      return{
        ...prev,
        ...allUsers
      }
    })
  };
  console.log(users,"State Updated");
  return (
    <div className={styles.parentContainer}>
      <AddUser onGetUser={handelUser}/>
    </div>
  );
}

export default App;
