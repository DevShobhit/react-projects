import React, { useState } from "react";
import Todo from './Todo';
import Form from './TaskForm';
import './tasks.css';
import TaskFilterBar from './taskFilterBar'
const axios = require('axios')

//Task Filter methods
const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function Task(props) {
    const [tasks, setTasks] = useState(props.tasks);
    const [filter, setFilter] = useState('All');

    //add Task
    function addTask(description) {
        const newTask = { description: description, completed: false };
        if (description) {
            axios({
                method: 'post',
                url: `http://localhost:3001/tasks/`,
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("user")}`
                },
                data: {
                    description: `${description}`,
                    completed: false
                }
            });

            setTasks([...tasks, newTask]);
        }
    }

    //toggle complete status of the task
    function toggleTaskCompleted(_id) {
        const updatedTasks = tasks.map(task => {
            if (_id === task._id) {
                return { ...task, completed: !task.completed }
            }
            return task;
        });
        // axios request
        // axios({
        //     method: 'patch',
        //     url: `http://localhost:3001/tasks/${_id}`,
        //     withCredentials: true,
        //     headers: {
        //         Authorization: `Bearer ${sessionStorage.getItem("user")}`
        //     },
        //     data: {
        //         completed: `${completed}`
        //     }
        // })
        setTasks(updatedTasks);
    }

    //delete task
    function deleteTask(_id) {
        const remainingTasks = tasks.filter(task => _id !== task._id);
        axios({
            method: 'delete',
            url: `http://localhost:3001/tasks/${_id}`,
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("user")}`
            }
        });
        setTasks(remainingTasks);
    }

    //edit task
    function editTask(_id, newDescription, completed) {
        const editedTaskList = tasks.map(task => {
            if (_id === task._id && newDescription) {
                return { ...task, description: newDescription, completed: completed }
            }
            return task;
        });
        // axios request
        axios({
            method: 'patch',
            url: `http://localhost:3001/tasks/${_id}`,
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("user")}`
            },
            data: {
                description: `${newDescription}`,
            }
        })
        setTasks(editedTaskList);
    }

    const taskList = tasks
        .filter(FILTER_MAP[filter])
        .map(task => (
            <Todo
                id={task._id}
                description={task.description}
                completed={task.completed}
                key={task._id}
                toggleTaskCompleted={toggleTaskCompleted}
                deleteTask={deleteTask}
                editTask={editTask}
            />
        ));

    const filterList = FILTER_NAMES.map(name => (
        <TaskFilterBar
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
    ));

    return (
        <div className="task">
            <div className="filter-bar">
                {filterList}
            </div>
            <Form addTask={addTask} className='add-task' />

            <ul
                className="task-list"
            >
                {taskList}
            </ul>
        </div>
    );
}

export default Task;