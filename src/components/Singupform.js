import React,{useState} from 'react'
import '../styles/App.css';
import avocado from '../components/avocado.png';
import bonk from '../components/error.jpg';
function Singupform({create, error, setError,tologin}) {

    const [details, setDetails] = useState({email: "", password: "",confirm:""})

    const subminHandler = e =>{
        e.preventDefault();

        (details.password==details.confirm)
        ?(create(details))
        :(setError("Contraseñas no coinciden"));
    }
    function handlelogin(e) {
        e.preventDefault();
        tologin();
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
                    <label className="forms">Confirm : </label>
                    <input className="forms formspass" type="password" id="confirm" name="confirm"
                    onChange={e => setDetails({...details, confirm: e.target.value})} value={details.confirm}></input>
                    <p></p>
                    <input className="loginbutton button" type="submit" value="Log in"></input>
                </form>
                <p>already have an account?</p>
                <button className="loginbutton button" onClick={handlelogin} >Log In!</button>
            </div>
        </div>
    </div>
    )
}

export default Singupform
