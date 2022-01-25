import React, { useState } from 'react';

import AddUser from './components/Users/addUser';
import AllUsers from "./components/Users/allUsers"
import styles from "./App.module.css"
let allUsers = [];
function App() {
  const [users, setUsers] = useState();

  const handelUser = (user) => {
    allUsers.push(user)
    setUsers([...allUsers])
  };
  console.log(users)
  return (
    <div className={styles.parentContainer}>
      <AddUser onGetUser={handelUser} />
      <AllUsers users={users && users} />
    </div>
  );
}

export default App;
