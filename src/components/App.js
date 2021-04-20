import React, {useState} from 'react';
import Loginform from './Loginform';

import '../styles/App.css';



function App() {
  const adminUsera={
    email: "admin@admin.com",
    password:"admin123"
  }
const [user,setUser]=useState({name:"", email:""});
const [error,setError] = useState("");

const Login = details =>{
  console.log(details);
}

const logout = () =>{
  console.log("bye bye");
}
  return (
    <div classname="App">
      {(user.email !="") ? (
        <div classname="welcome">
          <h2> Hello, <span>{user.name}</span></h2>
          <button>Log Out</button>
        </div>
      ):(
        <Loginform Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
