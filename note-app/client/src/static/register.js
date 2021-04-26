import React, { useState, useContext } from 'react'
import './login.css'
import { Blob } from './svg'
import note from '../notes.jpg';
import { AuthContext } from '../services/auth';
import { useHistory } from 'react-router-dom';
const axios = require('axios');


function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isAuthorized, handleLogin } = useContext(AuthContext);
    const history = useHistory();

    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handleEmailChange(e) {
        setEmail(e.target.value)
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await axios({
                method: 'post',
                url: 'http://localhost:3001/users',
                data: {
                    name: `${name}`,
                    email: `${email}`,
                    password: `${password}`
                }
            })

            await handleLogin(email, password);
            if (isAuthorized) history.push("/notes");

        } catch (e) {
            console.log(e)
        }
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
                className="login-form"
                onSubmit={handleSubmit}
            >
                <div className="logo-main-login">
                    <a href="/"><img src={note} alt="Logo img" className='notes-logo' /></a>
                </div>
                <div className="form-header">
                    Register to Notes
                </div>
                <div className="form-grp">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-input"
                        value={name}
                        onChange={handleNameChange}
                        placeholder='Name' />
                </div>
                <div className="form-grp">
                    <label htmlFor="email" className='form-label' >Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        placeholder='Email'
                        onChange={handleEmailChange}
                        className='form-input' />
                </div>
                <div className="form-grp">
                    <label htmlFor="password" className='form-label'>Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder='Password'
                        value={password}
                        onChange={handlePasswordChange}
                        className='form-input' />
                </div>
                <button type='submit' className='form-btn'>Register</button>
                <div className="register">Already have an account? <a href='/login' className='btn-sign'> Login </a></div>
            </form>

        </div>

    )
}

export default Register
