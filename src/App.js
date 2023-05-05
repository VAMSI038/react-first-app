import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';


function App() {
  const [usersList,setUsersList]=useState([]);
  const adduser=(uName,uAge)=>{
    setUsersList((prev)=>{
      return [...prev,{name:uName,age:uAge,id:Math.random().toString()}];
    })
  }
  return (
    <div>
        <AddUser onaddUser={adduser}/>
        <UserList users={usersList}/>
    </div>
  );
}

export default App;
