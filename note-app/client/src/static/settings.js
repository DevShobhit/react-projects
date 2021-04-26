import './settings.css';
import React, { useState, useContext, useEffect } from 'react'
import note from '../notes.jpg';
import { AuthContext } from '../services/auth';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";

// import { IconContext } from 'react-icons';
// import { BiLogOutCircle } from "react-icons/bi";

function Settings() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { handleLogout } = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios({
                    method: 'get',
                    url: 'http://localhost:3001/users/me',
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("user")}`
                        // Authorization: `Bearer ${cookies.user}`
                    }
                })
                setName(response.data.name);
                setEmail(response.data.email);
            } catch (e) {
                console.log(e);
            }
        };
        fetchUser();
    }, []);

    const handleClick = () => {
        handleLogout();
        history.push("/");
    }

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

        axios({
            method: 'patch',
            url: `http://localhost:3001/users/me`,
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("user")}`
            },
            data: {
                name: `${name}`,
                email: `${email}`,
            }
        })

    }

    function handleDelete() {
        axios({
            method: 'delete',
            url: `http://localhost:3001/users/me`,
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("user")}`
            }
        })
    }

    return (
        <div className='settings-cont'>
            <div className="settings-cont-left">
                <div className="settings-cont-left--top">
                    <div className=" cont-title">Profile</div>
                    <div className="cont-title">Payments</div>
                </div>
                <div className="settings-cont-left--bottom">
                    <Link to="/notes" >
                        <div className="cont-bottom">Go back</div>
                    </Link>
                    <div className="cont-bottom" onClick={handleClick}>
                        {/* <IconContext.Provider value={{ className: "logout-icon" }}>
                            <div>
                                <BiLogOutCircle />
                                Logout
                            </div>
                        </IconContext.Provider> */}
                        Logout
                    </div>
                </div>
            </div>
            <div className="settings-cont-right">

                <div className="user-img">
                    <img src={note} alt="User img" className='user-img--content' />
                </div>
                <form
                    action=""
                    className='user-form'
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="name" className='user-label'>Name</label>
                    <input
                        type="text"
                        id='Name'
                        value={name}
                        className='user-input'
                        onChange={handleNameChange}
                    />

                    <label htmlFor="email" className='user-label'>
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
                    <button className='user-btn change-btn' type='submit'>Update</button>

                </form>
                <div className="delete-info">
                    Want to delete your Account?
                </div>
                <div className="delete-info--detail">
                    We cannot recover your account once it is deleted. Procced with caution.
                </div>

                <div className="user-btn delete-btn" onClick={handleDelete}>
                    Delete Account
                </div>

            </div>

        </div>
    )
}

export default Settings
