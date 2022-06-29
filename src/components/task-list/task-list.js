import React from "react";
import './task-list.css';
import Task from "../task";


const TaskList = ({taskData}) => {
    
    const taskElements = taskData.map((taskEl) => {
        return (
            <Task {...taskEl}/>
        );
    });
    
    return(
        <ul className="todo-list">
            {taskElements}
        </ul>
    );
};

export default TaskList;