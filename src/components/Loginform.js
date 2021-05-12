import React, {useState} from 'react'
import '../styles/App.css';
import {Link} from 'react-router-dom';
function Loginform({Login, error, toregister}) {

    const [details, setDetails] = useState({email: "", password: "",confirm:""})



    return (
    
    <div class="outer">
        <div class="middle">
            <div class="inner">
                <h1 id="start">H2OKT</h1>

                <form>
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

                
                <br></br>
                <p>Don't have any account yet?</p>
                <Link to='/SingUp'>
                    <button className="loginbutton button">Sing Up!</button>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default Loginform
