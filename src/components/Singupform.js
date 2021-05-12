import React,{useState} from 'react'
import '../styles/App.css';
import {Link, link} from 'react-router-dom';
function Singupform({create, error, setError,tologin}) {

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
                    <label className="forms">Confirm : </label>
                    <input className="forms formspass" type="password" id="confirm" name="confirm"
                    onChange={e => setDetails({...details, confirm: e.target.value})} value={details.confirm}></input>
                    <p></p>
                    <input className="loginbutton button" type="submit" value="Log in"></input>
                </form>

                <br></br>
                <p>already have an account?</p>
                <Link to='/logIn'>
                    <button className="loginbutton button">Log In!</button>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default Singupform
