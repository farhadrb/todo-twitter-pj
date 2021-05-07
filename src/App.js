import React, { useState } from 'react';
import './style.css'
import TaskList from './TaskList';
const App = () => {
    const [newTaskText, setNewTaskText] = useState("");
    const [tasks, settasks] = useState([
        "do", "do it", "just do"
    ]);



    const addTask = () => {
        if (!newTaskText)
            return;
        settasks(currentTask=>{
            return [...currentTask,newTaskText]
        })
        setNewTaskText("")    
    }



    const onChangeInput = (e) => {
        const value = e.target.value
        setNewTaskText(value)
    }
    return (
        <div className={"container"}>
            <input value={newTaskText} onChange={onChangeInput} /><button onClick={addTask}>add</button>
            <TaskList tasks={tasks}/>
        </div>    
    );
}

export default App;