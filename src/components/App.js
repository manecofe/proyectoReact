import React, {useState} from 'react';
import Loginform from './Loginform';
import Singupform from './Singupform';
import {BrowserRouter, Route} from 'react-router-dom';
import '../styles/App.css';
import { helpHttp } from '../helpers/helpHttp';



function App() {

let api =helpHttp();  
const users = require('../jsons/accounts2.json');
const [user,setUser]=useState({email:"",name:"",state:""});
const [error,setError] = useState("");


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

      <BrowserRouter>
        <Route exact path='/logIn' component={Loginform}/>
        <Route exact path='/SingUp' component={Singupform}/>
      </BrowserRouter>
      

    </>
  );
}

export default App;
