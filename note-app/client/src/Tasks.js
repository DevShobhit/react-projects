import React, { useState, useEffect } from 'react'
import SearchBar from './components/searchBar';
import Sidenav from "./components/Sidenav";
// import FilterBar from './components/taskFilterBar';
import Task from './components/Tasks';
const axios = require('axios')

function TasksView() {
    const [data, setData] = useState({ tasksData: [], isFetching: false, isFetched: false });
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                setData({ tasksData: data.tasksData, isFetching: true, isFetched: false });
                const response = await axios({
                    method: 'get',
                    url: 'http://localhost:3001/tasks/',
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("user")}`
                        // Authorization: `Bearer ${cookies.user}`
                    }
                })
                setData({ tasksData: response.data, isFetching: false, isFetched: true });
            } catch (e) {
                console.log(e);
                setData({ tasksData: data.tasksData, isFetching: false, isFetched: true });
            }
        };
        fetchTasks();
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
                    {/* <div className="app-cont-right-top--2">
                        <FilterBar />
                    </div> */}
                    <div className="app-content">
                        {data.isFetched ? <Task tasks={data.tasksData} /> : ' '}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TasksView
