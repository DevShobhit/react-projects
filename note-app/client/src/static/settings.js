import './settings.css';
import React, { useState } from 'react'

function Settings() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();

    }

    return (
        <div className='settings-cont'>
            <div className="settings-cont-left">
                <div className=" cont-title">Profile</div>
                <div className="cont-title">Payments</div>
            </div>
            <div className="settings-cont-right">
                <form
                    action=""
                    className='user-form'
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="name" className='user-label'>New Name</label>
                    <input
                        type="text"
                        id='Name'
                        value={name}
                        className='user-input'
                        onChange={handleNameChange}
                    />

                    <label htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        className='user-input'
                        onChange={handleEmailChange}
                    />

                    <label htmlFor="password" className='user-label'>New Password</label>

                    <input
                        type="password"
                        name=''
                        id="password"
                        className='user-input'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <button className='user-btn change-btn'>Change</button>

                </form>

                <div className="user-btn delete-btn">
                    Delete Account
                </div>

            </div>

        </div>
    )
}

export default Settings
