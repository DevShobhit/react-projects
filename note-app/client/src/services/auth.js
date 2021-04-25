import React, { useState } from 'react'
const axios = require('axios')

export const AuthContext = React.createContext({})

export function Auth({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    async function handleLogin(email, password) {
        try {

            const response = await axios({
                method: 'post',
                url: 'http://localhost:3001/user/login',
                data: {
                    email: `${email}`,
                    password: `${password}`
                }
            });

            sessionStorage.setItem("user", response.data.token);

            if (sessionStorage.getItem("user") === response.data.token) {
                setIsAuthenticated(true);
            }

            // setCookie("user", response.data.token, { sameSite: true, maxAge: 5000, secure: true })

            // const data = await axios({
            //     method: 'get',
            //     url: 'http://localhost:3001/notes/',
            //     withCredentials: true,
            //     headers: {
            //         Authorization: `Bearer ${sessionStorage.getItem("user")}`
            //         // Authorization: `Bearer ${cookies.user}`
            //     }
            // });

            // console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleLogout = () => {
        sessionStorage.clear();
        setIsAuthenticated(false);
    };

    const isAuthorized = () => {
        return isAuthenticated
    }
    return (
        <AuthContext.Provider value={{ isAuthorized, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export async function handleLogin(email, password) {
    try {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:3001/user/login',
            data: {
                email: `${email}`,
                password: `${password}`
            }
        });

        sessionStorage.setItem("user", response.data.token);
        // setCookie("user", response.data.token, { sameSite: true, maxAge: 5000, secure: true,httpOnly:true })

        // const data = await axios({
        //     method: 'get',
        //     url: 'http://localhost:3001/notes/',
        //     withCredentials: true,
        //     headers: {
        //         Authorization: `Bearer ${sessionStorage.getItem("user")}`
        //         // Authorization: `Bearer ${cookies.user}`
        //     }
        // });

        //code to set the cookie 
        // console.log(data);
    } catch (error) {
        console.error(error);
    }
}