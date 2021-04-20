import React, {useState} from 'react'
import '../styles/App.css';
import avocado from '../components/avocado.png';
import bonk from '../components/error.jpg';
function Loginform({Login, error, toregister}) {

    const [details, setDetails] = useState({email: "", password: "",confirm:""})

    const subminHandler = e =>{
        e.preventDefault();
        Login(details);
    }
    function handleregister(e) {
        e.preventDefault();
        toregister();
      }


    return (
    
    <div class="outer">
        <div class="middle">
            <div class="inner">
                <h1 id="start">H2OKT</h1>
                    <div>
                        {(error !="")
                        ?(<div><img src={bonk} width="400" height="288"/><p>Usuario Malo!, no hagas eso</p></div>)
                        :(<img className="App-logo" src={avocado} width="248" height="288"/>)}
                    </div>
                <form onSubmit={subminHandler}>
                    <label className="forms">E-mail :</label>
                    <input className="forms formsmail" type="email" id="email" name="email" 
                    onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
                    <p></p>
                    <label className="forms">Password : </label>
                    <input className="forms formspass" type="Password" id="password" name="password"
                    onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                    <p></p>
                    <input className="loginbutton button" type="submit" value="Log in"></input>
                </form> 
                
                <p>Don't have any account yet?</p>
                <button className="loginbutton button" onClick={handleregister} >Sing Up!</button>
            </div>
        </div>
    </div>
    )
}

export default Loginform
