import React, { useContext, useState } from 'react'
import './login.css'
import { Blob } from './svg'
import note from '../notes.jpg';
import { AuthContext } from '../services/auth';
import { useHistory } from 'react-router-dom';
// import { useCookies } from "react-cookie";


function Login() {

    const [email, setUser] = useState("");
    const [password, setPassword] = useState("");
    const { isAuthorized, handleLogin } = useContext(AuthContext);
    const history = useHistory();

    // const [cookies, setCookie, removeCookie] = useCookies(['email']);

    function handleUserChange(e) {
        setUser(e.target.value)
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        await handleLogin(email, password);
        if (isAuthorized) history.push("/notes");
    }


    return (
        <div className="section-login">
            <div className="blob">
                <Blob />
            </div>
            <div className="blob-bottom">
                <Blob />
            </div>

            <form
                action=""
                className="login-form"
                onSubmit={handleSubmit} >
                <div className="logo-main-login">
                    <a href="/"><img src={note} alt="Logo img" className='notes-logo' /></a>
                </div>
                <div className="form-header">
                    Login to Notes
                </div>
                <div className="form-grp">
                    <label htmlFor="email" className='form-label' >Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='Email'
                        className='form-input'
                        value={email}
                        onChange={handleUserChange}
                    />
                </div>
                <div className="form-grp">
                    <label htmlFor="password" className='form-label'>Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder='Password'
                        className='form-input'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type='submit'
                    className='form-btn'
                >
                    Login
                </button>
                <div className="forget" onClick={() => { alert('Currently this feature is not Available!') }}>Forgot Password?</div>
                <div className="register">Do not have an account? <a href='/register' className='btn-sign'> Register </a></div>

            </form>
        </div >
    )
}

export default Login