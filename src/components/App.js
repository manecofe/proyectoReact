import React, {useState} from 'react';
import Loginform from './Loginform';

import '../styles/App.css';



function App() {
  const adminUsers={
    email: "feelmaneco@gmail.com",
    password:"123"
  }
const [user,setUser]=useState({email:""});
const [error,setError] = useState("");

const Login = details =>{
  console.log(details);
  if(details.email == adminUsers.email && details.password == adminUsers.password){

    console.log("mi negro, logueaste");
    setUser({
      email: details.email
    });

  }else{
    console.log("Nelson Mandela");
  }
}

const logout = () =>{
  console.log("bye bye");
  setUser({
    email:""
  });
}
  return (
    <>


      {(user.email !="") ? (
        <div class="outer">
          <div class="middle">
            <div class="inner">
              <h2> Hello, <span>{user.email}</span></h2>
              <button onClick={logout}>Log Out</button>
            </div>
          </div>
        </div>
      ):(
      <Loginform Login={Login} error={error} />
      )}

      
    </>
  );
}

export default App;
