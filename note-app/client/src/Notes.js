import React, { useEffect, useState } from 'react'
import SearchBar from './components/searchBar';
import Sidenav from "./components/Sidenav";
import Notes from './components/Notes';
const axios = require('axios')

function NotesView() {

    const [data, setData] = useState({ notesdata: [], isFetching: false, isFetched: false });
    useEffect(() => {
        const fetchNotes = async () => {
            try {
                setData({ notesdata: data.notesdata, isFetching: true, isFetched: false });
                const response = await axios({
                    method: 'get',
                    url: 'http://localhost:3001/notes/',
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("user")}`
                        // Authorization: `Bearer ${cookies.user}`
                    }
                })
                setData({ notesdata: response.data, isFetching: false, isFetched: true });
            } catch (e) {
                console.log(e);
                setData({ notesdata: data.notesdata, isFetching: false, isFetched: true });
            }
        };
        fetchNotes();
    }, []);

    return (
        <div>
            <div className="app-cont">
                <div className="app-cont-left">
                    <Sidenav />
                </div>
                <div className="app-cont-right">
                    <div className="app-cont-right-top--1">
                        <SearchBar />
                    </div>
                    <div className="app-content">
                        {data.isFetched ? <Notes notes={data.notesdata} isFetching={data.isFetching} /> : ' '}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotesView