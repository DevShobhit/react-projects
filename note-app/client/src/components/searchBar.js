import { FaSistrix } from "react-icons/fa";
import './searchbar.css';
import { IconContext } from "react-icons";
import note from '../notes.jpg';
import './sidenav.css';
import axios from "axios";
import { useState, useEffect } from "react";

function SearchBar() {
    const [name, setName] = useState("User");
    useEffect(() => {
        const fetchName = async () => {
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
            } catch (e) {
                console.log(e);
            }
        };
        fetchName();
    }, []);

    return (
        <div className='searchbar'>
            <div className="left-cont">
                <div className="logo">
                    Notes
            </div>
            </div>
            <div className="right-cont">
                <div className="searchcont">
                    <label htmlFor="search">
                        <IconContext.Provider value={{ color: "#888", className: "search-icon" }}>
                            <div>
                                <FaSistrix />
                            </div>
                        </IconContext.Provider>
                    </label>
                    <input type="text" placeholder='Search' id='search' className='search-area' />
                </div>

                <div className="user-cont">
                    <div className="user-info">
                        <img src={note} alt="👨‍💻" className='user-img' />
                        <div className="user-greet">Hello,{name}</div>
                    </div>

                    {/* <div className="theme-cont">
                        <input type="checkbox" className='theme-checkbox' id="switch" />
                        <label htmlFor="switch" className='theme-btn'>&nbsp;</label>
                    </div> */}
                </div>

            </div>

        </div>
    )
}

export default SearchBar;
