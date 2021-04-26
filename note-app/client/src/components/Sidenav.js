import React, { useContext } from 'react'
import { HiOutlineViewGrid } from "react-icons/hi";
import { FaTasks } from "react-icons/fa";
import { GoNote } from "react-icons/go";
import note from '../notes.jpg';
import { AuthContext } from '../services/auth';
import { IconContext } from 'react-icons';
import { BsPlusCircle, BsGear } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
import { Link, useHistory } from 'react-router-dom';

function Sidenav() {
    const { handleLogout } = useContext(AuthContext);
    const history = useHistory();


    const handleClick = () => {
        handleLogout();
        history.push("/");
    }

    return (
        <div className='sidenav'>
            <img src={note} alt="📝" className='notes-logo' />
            <ul className="nav-list">
                <li className="list-item">
                    <IconContext.Provider value={{ className: "outline-icon" }}>
                        <div>
                            <HiOutlineViewGrid />
                        </div>
                    </IconContext.Provider>
                    <span className="text">Overview</span>
                </li>

                <Link to='/notes' className='list-link'>
                    <li className="list-item">
                        <IconContext.Provider value={{ className: "note-icon" }}>
                            <div>
                                <GoNote />
                            </div>
                        </IconContext.Provider>
                        <span className="text">Notes</span>
                    </li>
                </Link>

                <Link to='/tasks' className='list-link'>
                    <li className="list-item" >
                        <IconContext.Provider value={{ className: "task-icon" }}>
                            <div>
                                <FaTasks />
                            </div>
                        </IconContext.Provider>
                        <span className="text">Tasks</span>
                    </li>
                </Link>

            </ul>
            <ul className="add-list">
                <Link to='/notes' className='list-link'>
                    <li className='list-item'>
                        <IconContext.Provider value={{ className: "add-icon" }}>
                            <div>
                                <BsPlusCircle />
                            </div>
                        </IconContext.Provider>
                        <span className="text">
                            Add a Note
                    </span>
                    </li>
                </Link>

                <Link to='/tasks' className='list-link'>
                    <li className='list-item'>
                        <IconContext.Provider value={{ className: "add-icon" }}>
                            <div>
                                <BsPlusCircle />
                            </div>
                        </IconContext.Provider>
                        <span className='text'>
                            Add a Task
                    </span>
                    </li>
                </Link>
            </ul>

            <div className="footer-nav">
                <Link to='/settings' className='list-link'>
                    <div className="settings">
                        <IconContext.Provider value={{ className: "settings-icon" }}>
                            <div>
                                <BsGear />
                            </div>
                        </IconContext.Provider>
                    Settings
                </div>

                </Link>

                <div className="logout-btn" onClick={handleClick}>
                    <IconContext.Provider value={{ className: "logout-icon" }}>
                        <div>
                            <BiLogOutCircle />
                        </div>
                    </IconContext.Provider>
                    Logout
                </div>

            </div>

        </div>
    )
}

export default Sidenav
