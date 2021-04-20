import React, {useState} from 'react';
import Loginform from './Loginform';
import Singupform from './Singupform';

import '../styles/App.css';



function App() {
const users = require('../jsons/accounts2.json');
const [user,setUser]=useState({email:"",name:"",state:""});
const [error,setError] = useState("");

const Login = details =>{
  console.log(exist(details));
  exist(details);
}
const toregister= () => {
  console.log("al registro")
  setUser({
    email:"register"
  });
  setError("")
}
const tologin= () => {
  console.log("al login")
  setUser({
    email:""
  });
  setError("")
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
    (manito==false)
    ?(setError("Usuario no encontrado"))
    :(setError(""));
    
  }
  return manito;
}

const testfuntion= function(){
  var dictstring = JSON.stringify(users);

  var fs = require('fs');
  fs.writeFile("thing.json", dictstring);
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

const create= function(){

  tologin();
}





  return (
    <>


      {
      (user.email =="register") 
      ?(<Singupform create={create} error={error} setError={setError} tologin={tologin}/>)
      :((user.email !="") ? (
          <div class="outer">
            <div class="middle">
              <div class="inner">
                <h2> Hello, <span>{user.name}</span></h2>
                <button onClick={logout}>Log Out</button>
                <button onClick={testfuntion}>test</button>
              </div>
            </div>
          </div>
        ):(
          (user.email =="") ? (
            <Loginform Login={Login} error={error} toregister={toregister}/>
          ):(
            <></>
          )
        )
      )


      
      
      
      
      }


    </>
  );
}

export default App;
