import React, {useState} from 'react';
import Loginform from './Loginform';

import '../styles/App.css';



function App() {
const users = require('../jsons/accounts.json');
const [user,setUser]=useState({email:"",name:""});
const [error,setError] = useState("");

const Login = details =>{
  console.log(exist(details));
  exist(details);
}

const logout = () =>{
  console.log("bye bye");
  setUser({
    email:"",
    name:""
  });
}


const exist = function (details){
  var manito= false
  var nombre=""
  for(var i=0;i<ObjectLength(users);i++){
    if(users[i].column2==details.email && users[i].column1==details.password){
      manito=true;
      nombre=users[i].column0;
      setUser({
        email: details.email,
        name:nombre
      });
    }
  }
  return manito;
}


const ObjectLength= function ( object ) {
  var length = 0;
  for( var key in object ) {
      if( object.hasOwnProperty(key) ) {
          ++length;
      }
  }
  return length;
};







  return (
    <>


      {(user.email !="") ? (
        <div class="outer">
          <div class="middle">
            <div class="inner">
              <h2> Hello, <span>{user.name}</span></h2>
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
