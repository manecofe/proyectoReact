import React, {useState} from 'react'
import '../styles/App.css';

function Loginform({Login, error}) {

    const [details, setDetails] = useState({email: "", password: ""})

    const subminHandler = e =>{
        e.preventDefault();

        Login(details);
    }
    return (
    <div class="outer">
        <div class="middle">
            <div class="inner">
                <h1>Welcome to H2OKT</h1>

                <form onSubmit={subminHandler}>
                    <label className="forms">E-mail</label>
                    <input className="forms" type="email" id="email" name="email" 
                    onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>

                    <label className="forms">Password</label>
                    <input className="forms" type="Password" id="password" name="password"
                    onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>

                    <input className="forms" type="submit" value="Submit"></input>
                </form> 
            </div>
        </div>
    </div>
    )
}

export default Loginform
